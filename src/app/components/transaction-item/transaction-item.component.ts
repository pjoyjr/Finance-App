import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction: any | Transaction;
  @Output() onDeleteTransaction: EventEmitter<Transaction> = new EventEmitter();
  faEllipsisH = faEllipsisH;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(transaction: Transaction) {
   this.onDeleteTransaction.emit(transaction);
  }
}
