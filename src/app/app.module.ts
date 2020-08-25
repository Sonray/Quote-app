import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { InquoteComponent } from './inquote/inquote.component';
import { DatePipe } from './date.pipe';
import { HighlightersDirective } from './highlighters.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    ShowQuoteComponent,
    InquoteComponent,
    DatePipe,
    HighlightersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
