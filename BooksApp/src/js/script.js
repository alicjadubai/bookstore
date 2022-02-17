{
  ("use strict");

  const select = {
    templateOf: {
      book: "#template-book",
    },
  };
  const template = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.books).innerHTML
    ),
  };
  const bookList = document.querySelectorAll("book-list");
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
      const generatedHTML = template.book(bookDetails);
      // /* create element using utils.createElementFromHTML */
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      // /* add element to menu */
      bookList.appendChild(generetedDOM);
    }
  }
  function initAction() {
    const bookImages = bookList.querySelectorAll("book-image");
    console.log(bookImages);
    const clickedElement = this;

    for (let bookImage of bookImages) {
      bookImage.addEventListener("dblClick", function (event) {
        event.preventDefault();
        const clickedElement = event.target.offsetParent;
        if (clickedElement.classList.contains("book__image")) {
          const dataId = clickedElement.getAttribute("data-id");
          if (favoriteBooks.includes(dataId)) {
            clickedElement.classList.toggle("favorite");
          } else {
            console.log(dataId);
            favoriteBooks.push(dataId);
          }
        }
      });
    }
  }

  renderInBooks();
  initAction();
}
