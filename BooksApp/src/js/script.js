{
  ("use strict");

  const select = {
    templateOf: {
      book: "#template-book",
    },
  };

  const bookList = document.querySelectorAll(".book-list");
  console.log(bookList);

  function renderInBooks() {
    for (let book of dataSource.books) {
      bookDetails = {
        id: book.id,
        name: book.name,
        price: book.price,
        rating: book.rating,
        image: book.image,
      };
      console.log(bookDetails);
      // const generatedHTML = templates.menuProduct(thisProduct.data);
      const generatedHTML = templates.book(bookDetails);
      // /* create element using utils.createElementFromHTML */
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      // /* add element to menu */
      bookList.appendChild(generetedDOM);
    }
  }
}
