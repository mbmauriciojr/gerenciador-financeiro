import { ETransactionType } from "../enums/transaction-type.enum";

export interface ITransaction {
  title: string;
  type: ETransactionType;
  value: number;
};
