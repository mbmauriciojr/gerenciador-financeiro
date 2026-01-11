import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type CardType = 'income' | 'outcome' | 'balance';

enum ValueCssClass {
  INCOME = 'income',
  OUTCOME = 'outcome'
}

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss'
})
export class BalanceCard {
  type = input.required<CardType>();
  label = input.required<string>();
  value = input.required<number>();

  cssClass = computed<CardType>(() => {
    if (this.type() === 'income') {
      return ValueCssClass.INCOME;
    }

    if (this.type() === 'outcome') {
      return ValueCssClass.OUTCOME;
    }

    return this.value() > 0 ? ValueCssClass.INCOME : ValueCssClass.OUTCOME;
  });
}
