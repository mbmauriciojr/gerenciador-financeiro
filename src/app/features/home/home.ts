import { Component, signal } from '@angular/core';
import { Balance } from './components/balance/balance';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { ITransaction } from '../../shared/transaction/interfaces/transaction.interface';
import { ETransactionType } from '../../shared/transaction/enums/transaction-type.enum';

@Component({
  selector: 'app-home',
  imports: [
    Balance,
    TransactionItem
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  transactions = signal<ITransaction[]>([
    { title: 'Salário', value: 100, type: ETransactionType.INCOME },
    { title: 'VA', value: 50, type: ETransactionType.INCOME },
    { title: 'PLR', value: 25, type: ETransactionType.INCOME },
    { title: 'Bônus', value: 25, type: ETransactionType.INCOME },
    { title: 'Ajuda de Custo', value: 75, type: ETransactionType.INCOME },
    { title: 'Aluguel',value: 75, type: ETransactionType.OUTCOME },
  ]);
}
