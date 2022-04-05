class Book
{
    bookId:string;
    bookName:string;
    bookPrice:number
    constructor(id:string,name:string,price:number){
        this.bookId=id;
        this.bookName=name;
        this.bookPrice=price;
    }
    getDetails(){
        return `Id : ${this.bookId} Name :${this.bookName} Price :${this.bookPrice} `
    }
}