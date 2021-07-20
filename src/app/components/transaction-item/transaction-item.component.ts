import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../../Transaction';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {
  @Input() transaction: any | Transaction;
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
