const url = new URL('http://localhost:3333/transactions')

export const getTransactions = async (query?: string) => {
  if (query) {
    url.searchParams.append('q', query)
  }

  const response = await fetch(url)
  const data = await response.json()

  return data
}
