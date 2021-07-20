import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../../Transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  @Output() onAddTransaction: EventEmitter<Transaction> = new EventEmitter();
  text: undefined | string;
  day: undefined | string;
  amount: undefined | number;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text || !this.day || !this.amount){
      alert('Please fill out form!');
      return;
    }

    const newTransaction = {
      text: this.text,
      day: this.day,
      amount: this.amount
    };

    this.onAddTransaction.emit(newTransaction);

    this.text = '';
    this.day = '';
    this.amount = 0;

  }

}
