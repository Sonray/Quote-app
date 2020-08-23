import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirective } from './highlighter.directive';
import { QuoteComponent } from './quote/quote.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { InquoteComponent } from './inquote/inquote.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    QuoteComponent,
    ShowQuoteComponent,
    InquoteComponent
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
