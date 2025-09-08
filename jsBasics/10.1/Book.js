export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
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

    printInfo() {
    console.log(`This is ${this.title}, authored by ${this.author} and published in ${this.year}.`);
  }

    static findOldestBook(booksArray) {
    return booksArray.reduce((oldest, current) => current.year < oldest.year ? current : oldest);
  }
};

const book1 = new Book ("Alice's Adventures in Wonderland", "Lewis Carroll", 1865);
const book2 = new Book ("The Wizard of the Emerald City", "Alexander Volkov", 1939);

book1.printInfo();
book2.printInfo();

console.log (book1.author);
console.log (book2.title);

export { book1, book2 };