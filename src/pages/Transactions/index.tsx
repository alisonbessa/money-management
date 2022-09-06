import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { fetchTransactions } from '../../api/transactions'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={`transaction-${transaction.id}`}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}

            <tr>
              <td width="40%">Hambúrger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
