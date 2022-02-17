{
  ("use strict");

  const select = {
    templateOf: {
      book: "#template-book",
    },
  };

  const bookList = document.querySelectorAll(".book-list");
  console.log(bookList);

  const favoriteBooks = [];

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
  function initAction() {
    const bookImages = bookList.querySelectorAll(".book-image");
    for (let bookImage of bookImages) {
      bookImage.addEventListener("dblClick", function (event) {
        event.preventDefault();
        bookImage.classList.add("favorite");
        const dataId = bookImage.getAttribute("data-id");
        favoriteBooks.push(dataId);
      });
    }
  }
  renderInBooks();
  initAction();
}
