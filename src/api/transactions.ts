import { api } from './../lib/axios'

export const getTransactions = async (query?: string) => {
  const response = await api.get('/transactions', {
    params: {
      _sort: 'createdAt',
      _order: 'desc',
      q: query,
    },
  })

  return response.data
}

interface NewTransactionData {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

export const createNewTransaction = async (data: NewTransactionData) => {
  const response = await api.post('/transactions', {
    ...data,
    createdAt: new Date(),
  })

  return response.data
}
