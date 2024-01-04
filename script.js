document.addEventListener("DOMContentLoaded", function () {
  const bookListContainer = document.getElementById("bookList");

  const books = [
    { title: "Meyetir Nam Narina", author: "Jafor Ikbal", cover: "assets/1.jpg" },
    { title: "Ratuler Rat Ratuler Din", author: "Jafor Ikbal", cover: "assets/2.jpg" },
    { title: "Ami Topu", author: "Jafor Ikbal", cover: "assets/3.jpg" },
    { title: "Himu Dosh", author: "Humaiyun Ahmed", cover: "assets/4.jpg" },
    { title: "Himur ache jol", author: "Humaiyun Ahmed", cover: "assets/5.png" },
    { title: "Ebong Himu", author: "Humaiyun Ahmed", cover: "assets/6.jpg" },
  ];

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" style="max-width: 100%; height: 200px;">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
    bookListContainer.appendChild(bookCard);
  });
});
