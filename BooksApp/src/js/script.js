{
  ("use strict");

  const select = {
    templateOf: {
      book: "#template-book",
    },
  };
  const template = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };

  function renderInBooks() {
    for (let book of dataSource.books) {
      const bookDetails = {
        id: book.id,
        name: book.name,
        price: book.price,
        rating: book.rating,
        image: book.image,
      };
      console.log(bookList);
      // const generatedHTML = templates.menuProduct(thisProduct.data);
      const generatedHTML = template.book(bookDetails);
      // /* create element using utils.createElementFromHTML */
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      // /* add element to menu */
      console.log(bookList);
      bookList.appendChild(generatedDOM);
    }
  }
  function initAction() {
    const favoriteBooks = [];
    console.log("fav books", favoriteBooks);
    const bookList = document.querySelector(".books-list");
    console.log("aa", bookList);
    //const bookImages = bookList.querySelectorAll(".book-image");
    // console.log("book images", bookImages);
    //const clickedElement = this;
    bookList.addEventListener("click", function (event) {
      event.preventDefault();
      const clickedElement = event.target.offsetParent;
      console.log(clickedElement);
      if (clickedElement.classList.contains("book__image")) {
        clickedElement.classList.toggle("favorite");
        const dataId = clickedElement.getAttribute("data-id");
        if (!favoriteBooks.includes(dataId)) {
          favoriteBooks.push(dataId);
        } else {
          favoriteBooks.splice(favoriteBooks.indexOf, 1);
        }
      }
    });
  }

  renderInBooks();
  initAction();
}
