import { Book } from "./book.js";

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newFileFormat) {
    if (typeof newFileFormat === "string") {
      this._fileFormat = newFileFormat;
    } else {
      console.error("File format must be a string");
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this.fileFormat}`);
  }

  static createEBookFromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

const ebook = new EBook("Kobzar", "Schevchenko", 1853, "PDF");
// ebook.printInfo();
