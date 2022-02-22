{
  ("use strict");

  const select = {
    templateOf: {
      book: "#template-book",
    },
    filters: ".filters",
  };
  const template = {
    book: Handlebars.compile(
      document.querySelector(select.templateOf.book).innerHTML
    ),
  };

  const bookList = document.querySelector(".books-list");
  console.log('aa', bookList);

  

  function renderInBooks() {
    for (let book of dataSource.books) {
      const bookDetails = {
        id: book.id,
        name: book.name,
        price: book.price,
        rating: book.rating,
        image: book.image,
      };
      const ratingBgc = dataSorce.determineRatingBgc(book.rating);
      book.ratingBgc = ratingBgc;
      const ratingWidth = book.rating * 10;
      book.ratingWidth = ratingWidth;
      console.log(bookList);
      // const generatedHTML = templates.menuProduct(thisProduct.data);
      const generatedHTML = template.book(bookDetails);
      // /* create element using utils.createElementFromHTML */
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      // /* add element to menu */
      console.log(bookList);
      bookList.appendChild(generatedDOM);
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
    const filters = [];
    const filtersForm = document.querySelector("filters");
    console.log(filtersForm);
    filtersForm.addEventListener("click", function (event) {
      event.preventDefault();
      const filtersClicked = event.target;
      console.log("filter clicked", filtersClicked);
      if (
        (filtersClicked.tagName =
          "INPUT" &&
          filtersClicked.type == "checkbox" &&
          filtersClicked == "filter")
      ) {
        if (filtersClicked.tagName == true) {
          filters.push(filtersClicked.value);
        } else {
          filters.splice(filters.indexOf(element.value), 1);
        }
        console.log(filtersClicked.value);
      }
    });
    filterBooks();
  }
  function filterBooks() {
    const filters = [];
    for (let book of dataSource.books) {
      let shouldBeHidden = false;
      for (const filter of filters) {
        if (!book.details == true) {
          shouldBeHidden == true;
          break;
        }
      }
      const bookImage = booksList.querySelector(
        '.book__image[data-id="' + book.id + '"]'
      );
      if (shouldBeHidden === true) {
        bookImage.classList.add("hidden");
      }
      if (shouldBeHidden === false) {
        bookImage.classList.remove("hidden");
      }
    }
  }
  function determineRatingBgc(rating) {
    if (rating < 6) {
      return "background: linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)";
    } else if (rating > 6 && rating <= 8) {
      return "linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)";
    } else if (rating > 8 && rating <= 9) {
      return "linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)";
    } else if (rating > 9) {
      return "linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)";
    }
  }
  renderInBooks();
  initAction();
}
