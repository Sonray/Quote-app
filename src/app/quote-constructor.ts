export class QuoteConstructor {
    showQuote: boolean;
    constructor(
        public quoteDescription: string,
        public userName: string,
        public quoteAuthor: string,
        public quoteDay: Date,
        public like: number,
        public dislike: number
    ){
        this.showQuote = false;
    }
}
