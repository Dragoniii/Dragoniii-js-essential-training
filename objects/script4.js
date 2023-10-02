// JavaScript code​​​​​​‌​‌​​‌​‌​​​‌‌​​‌‌​​‌‌‌​‌‌ below
// Write your answer here, and then test your code.

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = "Lewis Carroll";
const bookPubYear = 1865;
const bookISBN = 9798369203415;

class Book {
constructor(bookTitle, bookAuthor, bookISBN, bookPubYear) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.ISBN = bookISBN;
    this.publicationYear = bookPubYear; 
}
};

const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

console.log(result);