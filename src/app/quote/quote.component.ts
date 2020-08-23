import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { QuoteConstructor } from '../quote-constructor'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteArray = new QuoteConstructor("", "", "", new Date(),0,0);

  @Output() getForm = new EventEmitter<QuoteConstructor>();

  onSubmit(){
    this.getForm.emit(this.quoteArray);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
