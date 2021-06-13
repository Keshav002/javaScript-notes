console.log("Welcome to the exercise");
class library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
        this.issuedBooks[bookName] = user;
        }
        else{
            console.log("This book is already issued");
        }
    }
    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }

}

//asynchronous programming
console.log("Learn about asynchronous programming");
setTimeout(() => {
for (let i = 0; i <300; i++) {
    // console.log("This is index no. " + i);
}
}, 10);//settimeout sets time for completing word in milliseconds and do the next task
// console.log("Done printing");