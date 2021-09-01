const errorDiv = document.getElementById('error');

const searchBooks = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    if (searchInput === ''){
        errorDiv.innerText = "Search field cannot be empty"
        return;
    }
   
    const url =  `https://openlibrary.org/search.json?q=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))

}

const displaySearchResult = books =>{
    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent ='';
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
       
        div.innerHTML = `
        <div class="card h-100 w-70">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top mx-auto pt-2" alt="...">
            <div>
                <h3 class="card-title p-2">Tittle: ${book.title}</h3>
                <p class = 'card-text ps-2'>Writer: ${book.author_name}</p>
                <p class = 'card-text ps-2'>Publisher: ${book.publisher}</p>
                <p class = 'card-text ps-2'>Publish-Date: ${book.first_publish_year}</p>

            </div>
            
        
        
        </div>
        `;
      bookContainer.appendChild(div); 
    })
}

const loadBookDetails = bookId =>{
    const url = `https://openlibrary.org/search.json?q=${bookId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.books[0]));
}

const displayBookDetails = book =>{
    const bookDetails = docuent.getElementById('book-details');
    bookDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card')
}


