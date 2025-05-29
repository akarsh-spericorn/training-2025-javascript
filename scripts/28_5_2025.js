const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  books: ['The Great Gatsby', '1984', 'To Kill a Mockingbird'],
  greet() {
    console.log('Greetings', this.name);
  },
  getMyBooks() {
    this.books.forEach((book) => {
      //   debugger;
      console.log(book);
    });
  },
};

// console.log('User Information:');
// console.log('Name:', user.name);
// console.log('Age:', user.age);
// console.log('Email:', user.email);
// console.log('Greet Function:', user.name, user.greet());
// user.greet();

// user.greetArrow();

// console.log(user.books);
user.getMyBooks();

let a = 1;

let b = 2;

b = a;

console.log(a, b);
