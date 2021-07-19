import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Net Worth';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTransaction() {
    console.log('Add Transaction');
  }

}
