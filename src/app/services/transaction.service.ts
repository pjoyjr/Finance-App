import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Transaction } from  '../Transaction';
import { TRANSACTIONS } from '../mock-transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Observable<Transaction[]> {
    const tasks = of(TRANSACTIONS);
    return tasks;
  }
}
