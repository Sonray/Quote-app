import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor'

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  @Input() quoted: QuoteConstructor;
  @Output() quotecomplete = new EventEmitter<boolean>();

  deleteQuote(reader: boolean){
    this.quotecomplete.emit(reader);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
