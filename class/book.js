export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === "string") {
            this._title = newTitle;
        } else {
            console.error("Title must be a string");
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === "string") {
            this._author = newAuthor;
        } else {
            console.error("Author must be a string");
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === "number" && newYear >= 0) {
            this._year = newYear;
        } else {
            console.error(
                "The year of publication must not be a negative number.",
            );
        }
    }

    printInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    }

    static getOldest(books) {
        if (!Array.isArray(books)) {
            console.error("Books must be an array");
            return;
        }

        if (!books.length) {
            console.error("Should be at least one book in the array");
            return;
        }

        return [...books].sort((a, b) => a.year - b.year)[0];
    }
}
