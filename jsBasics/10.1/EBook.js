import Book, { book1, book2 } from './Book.js';

class EBook extends Book {
  constructor(title, author, year, extension) {
    super(title, author, year);
    this.extension = extension;
  }

    get title() {
    return this._title;
  }

    set title(value) {
    this._title = value.toUpperCase();
  }

    get author() {
    return this._author;
  }

    set author(value) {
    this._author = value.toUpperCase();
  }

    get extension() {
    return this._extension
  }

    set extension(value) {
    this._extension = value.toUpperCase();
  }

    printInfo() {
    console.log(`This is ${this.title}, authored by ${this.author} and published in ${this.year}. Available format: ${this.extension}`);
  }

    static fromBook(bookInstance, extension) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("Argument must be an instance of Book");
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, extension);
  }
};

const ebook1 = new EBook ("The Green Mile", "Stephen King", 1996, "fb2");

ebook1.printInfo();

console.log (ebook1.author);
console.log (ebook1.extension);

const oldest = Book.findOldestBook([book1, book2, ebook1]);
console.log("Oldest book: ", oldest);

const convertedEBook = EBook.fromBook(book1, "pdf");
console.log (convertedEBook);