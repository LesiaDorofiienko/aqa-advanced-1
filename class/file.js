import { Book } from "./book.js";
import { EBook } from "./ebook.js";

const delimeter = "=<>=".repeat(10);

const book1 = new Book("The Pilgrim’s Progress", "John Bunyan", 1678);
const book2 = new Book("Robinson Crusoe", "Daniel Defoe", 1719);
const book3 = new Book("Gulliver’s Travels", "Jonathan Swift", 1726);
const ebook = new EBook("Wuthering Heights", "Emily Brontë", 1847, "PDF");

const allBooks = [book1, book2, book3, ebook];
const oldestBook = Book.getOldest(allBooks);
const ebooked = EBook.createEBookFromBook(book2, "fb2");

console.log(delimeter);
book1.printInfo();
console.log(delimeter);
book2.printInfo();
console.log(delimeter);
book3.printInfo();
console.log(delimeter);
ebook.printInfo();
console.log(delimeter);
console.table(oldestBook);
console.log(delimeter);
console.table(ebooked);
console.log(delimeter);
