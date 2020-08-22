export class CustomQoute {

    message: String;
    quote: Quoter;
    quoteArray: Array<Quoter>;
    
    loadQuote(){
        this.quoteArray = [
            new Quoter("I am a loner", "David", "Denis", "2020-10-13" )
        ]
        this.message = this.quoteArray[1].quoteName,this.quoteArray[1].quoteAurthor,this.quoteArray[1].quotedDay,this.quoteArray[1].name;
    }
    
}

export class Quoter {

    constructor( public quoteName: String, public quoteAurthor: String, 
        public name: String, public quotedDay:String ){
            this.name = name,
            this.quoteAurthor = quoteAurthor,
            this.quoteName = quoteName,
            this.quotedDay = quotedDay
    }
}