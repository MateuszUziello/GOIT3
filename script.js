function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };





// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };





//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book.title;
//   console.log(bookTitle); 
  
//   const bookGenres = book.genres;
//   console.log(bookGenres);
  
//   const bookPrice = book.price;
//   console.log(bookPrice); 





//   const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };
  
//   console.log(user.location); 
  
//   const country = user.location.country;
//   console.log(country); 

//   const hobbies = user.hobbies;
// console.log(hobbies); 

// const firstHobby = user.hobbies[0];
// console.log(firstHobby);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); 





// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book["title"];
//   console.log(bookTitle); 
  
//   const bookGenres = book["genres"];
//   console.log(bookGenres); 
  
//   const propKey = "author";
//   const bookAuthor = book[propKey];
//   console.log(bookAuthor); 





//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("drama");
  
//   console.log(book.rating); 
//   console.log(book.isPublic); 
//   console.log(book.genres); 





//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];
  
//   console.log(book.pageCount);
//   console.log(book.originalLanguage); 
//   console.log(book.translations); 





//   const name = "Henry Cibola”";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name);
// console.log(user.age); 





// const name = "Henry Cibola”";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); 
// console.log(user.age); 





// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Henry Cibola”";
// console.log(user.name); 





// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: "Henry Cibola”",
// };

// console.log(user.name);





// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     getBooks() {
//       console.log("Ta metoda zwróci wszystkie książki - właściwość books");
//     },
//     addBook(bookName) {
//       console.log("Ta metoda doda nową książkę do właściwości books");
//     },
//   };
  
//   bookShelf.getBooks();
//   bookShelf.addBook("Nowa książka");





// const books = [];
// function getBooks() {}
// function addBook() {}





// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       console.log(this);
//     },
//   };
  
//   bookShelf.getBooks(); 





//   const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };
  
//   console.log(bookShelf.getBooks()); 
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); 
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks());





//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "Sen śmiesznego człowieka",
//       author: "Fiodor Dostojewski",
//       rating: 7.75,
//     },
//   ];

//   for (const book of books) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }





//   const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); 





// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); 





// const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps));

// console.log(...temps);
// console.log(Math.max(...temps));





// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];
// console.log(copyOfTemps);





// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); 





// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third);





// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); 

// const fourth = { ...second, ...first };
// console.log(fourth); 





// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); 

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); 

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); 






//   function multiply(...args) {
//     console.log(args); 
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);





//   function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); 
//     console.log(secondNumber); 
//     console.log(otherArgs); 
//   }
  
//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);





