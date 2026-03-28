import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ITransaction } from '../../../../shared/transaction/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-item',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './transaction-item.html',
  styleUrl: './transaction-item.scss'
})
export class TransactionItem {
  transaction = input.required<ITransaction>();
}
