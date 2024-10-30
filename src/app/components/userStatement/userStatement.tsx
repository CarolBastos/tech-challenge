import { useEffect, useState } from "react";
import { statement } from "../../../mocks/statement";
import { TransactionCard } from "../generics/TransactionCard";


export default function ClientStatement () {
    const [transactions, setTransactions] = useState(statement?.transactions.slice().reverse());

  // Monitora as mudanças no `statement` e atualiza `transactions`
    useEffect(() => {
        setTransactions(statement?.transactions.slice().reverse());
    }, [statement]);

    function convertDate(date: string):string{
        const year = date.slice(0,4);
        const month = date.slice(5,7);
        const day = date.slice(8,10);
      return day + "/" + month + "/" + year
    }  

    function getMonth(date: string):string{
      const nDate = new Date(date);
      return nDate.toLocaleDateString('pt-BR', {month:'long'})[0].toUpperCase() + nDate.toLocaleDateString('pt-BR', {month:'long'}).substring(1);
    } 

    function convertDescription(description: string):string{  
      return description[0].toUpperCase() + description.substring(1); 
    }

    return (
        <div>
            <ul>
        {transactions?.map((transaction, index)=>(
            <li key={index}>
        <TransactionCard
                month={getMonth(transaction.date)}
                date={convertDate(transaction.date)}
                transactionType={convertDescription(transaction.description)}
                transactionValue={transaction.amount}
              />
              </li>
        ))}
        </ul>
        </div>
    );
}