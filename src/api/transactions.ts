import { api } from './../lib/axios'

export const getTransactions = async (query?: string) => {
  const response = await api.get('/transactions', {
    params: {
      q: query,
    },
  })

  return response.data
}
