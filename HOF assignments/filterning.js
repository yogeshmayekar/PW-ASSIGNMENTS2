function filterAndCapitalizeAuthors(book) {
    return {
      title: book.title,
      author: book.author.toUpperCase(), 
      year: book.year
    };
  }
  
 
  const books = [
    { title: "Book1", author: "Author1", year: 2008 },
    { title: "Book2", author: "Author2", year: 2012 },
    { title: "Book3", author: "Author3", year: 2005 },
  ];
  

  const booksAfter2010WithCapitalizedAuthors = books
    .filter(book => book.year >= 2010)
    .map(filterAndCapitalizeAuthors);
  

  console.log("Original Books:", books);
  console.log("Books Published After 2010 with Capitalized Authors:", booksAfter2010WithCapitalizedAuthors);