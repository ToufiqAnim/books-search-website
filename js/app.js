 document.getElementById('error-message').style.display = 'none';
// spinner
const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle =>{
    document.getElementById('books').style.display = displayStyle;
}
// Search Books
const searchBooks = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    // display spinner
    toggleSpinner('block');
    toggleSearchResult('none');

    searchInput.value = '';
    document.getElementById('error-message').style.display = 'none';

    const url =  `https://openlibrary.org/search.json?q=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
    .catch(error => displayError(error));

}

const displayError = error =>{
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = books =>{
    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent ='';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
       
        div.innerHTML = `
        <div class="card h-100">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top mx-auto p-4" alt="...">
            <div>
                <h3 class="card-title px-2 ps-3">Tittle: ${book.title}</h3>
                <p class = 'card-text ps-3'>Publisher: ${book.publisher}</p>
                <p class = 'card-text ps-3'>Writer: ${book.author_name}</p>
                <p class = 'card-text ps-3 pb-2'>Publish-Date: ${book.first_publish_year}</p>
            </div>
        
        </div>
        `;
      bookContainer.appendChild(div); 
    })
    toggleSpinner('none');
    toggleSearchResult('block');
}
//  onclick="loadBookDetails('${book.title})"
/* const loadBookDetails = bookDetails =>{
    const url = `https://openlibrary.org/search.json?q=${bookDetails}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookDetails(data.books));
}

const displayBookDetails = book =>{
    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <h3 class="card-title p-2">Tittle: ${book.title}</h3> 
    `;
    bookDetails.appendChild(div);
} */


