import { Component, OnInit } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor';

@Component({
  selector: 'app-inquote',
  templateUrl: './inquote.component.html',
  styleUrls: ['./inquote.component.css']
})
export class InquoteComponent implements OnInit {

  quotes: QuoteConstructor[] = [];

  quoteDelete(getForm, index){

    if (getForm) {
      let theDelete: boolean = confirm(`Do you want to delete the quote?`)
      if (theDelete) {
        this.quotes.splice(index, 1);
      }
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
