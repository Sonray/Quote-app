import { Component, OnInit } from '@angular/core';
import { CustomQoute } from '../custom-qoute'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  message: String = "";
  breda = new CustomQoute("nan", "kgh", "ghgk", "fgy");
  quoteArray : Array<CustomQoute>;
  
  loadQuote(){
      this.quoteArray = [
        new CustomQoute("nan", "kgh", "ghgk", "fgy"),
        new CustomQoute("nan", "kgh", "ghgk", "fgy"),
        new CustomQoute("nan", "kgh", "ghgk", "fgy")
      ]
      this.message = this.quoteArray[0].quoteAurthor
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
