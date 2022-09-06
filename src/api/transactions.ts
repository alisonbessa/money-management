export const fetchTransactions = async () => {
  const response = await fetch('http://localhost:3333/transactions')
  const data = await response.json()

  return data
}
