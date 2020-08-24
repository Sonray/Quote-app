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

  addQuote(quotes){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quoteLength.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quote);
  }

  displayQuote(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
