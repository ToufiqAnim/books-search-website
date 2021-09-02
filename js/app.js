 const errorMessage = document.getElementById('error-message');
// Spinner Function
const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}
// Search style Function
const toggleSearchResult = displayStyle =>{
    document.getElementById('books').style.display = displayStyle;
}
// Search Books
const searchBooks = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    // display style spinner and search result
    toggleSpinner('block');
    toggleSearchResult('none');

    // book container
    const bookContainer = document.getElementById('book-container');
    bookContainer.textContent =''; 
    //book result
    const booksResult = document.getElementById('books-result');
    booksResult.textContent = '';

    // Error Handling
    errorMessage.innerText = 'Please Write Books Names'
    if (searchText === ''){
        errorMessage.style.display = 'block';
        
    }
    else{
        errorMessage.style.display = 'none';
    }
    
    const url =  `https://openlibrary.org/search.json?q=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}


// Display Search Result

const displaySearchResult = books =>{
    const totalBooks = books.filter(info => info.cover_i !== undefined && info.author_name !== undefined && info.first_publish_year !== undefined && info.publisher !== undefined);

    
    const booksResult = document.getElementById('books-result');

    // Error Handling
    if (totalBooks.length === 0){
        booksResult.innerText = `No Books Found`;
    }
    
    else{
        booksResult.innerText = `Total ${totalBooks.length} Results Found`;
    }
        const bookContainer = document.getElementById('book-container');
        bookContainer.textContent ='';
        totalBooks.slice(0,25)?.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
    
            div.innerHTML = `
            
            <div class="card h-100">
                <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top mx-auto p-4" alt="...">
                <div>
                    <h3 class="card-title px-2 ps-3">Tittle: ${book.title}</h3>
                    <p class = 'card-text ps-3'>Publisher: ${book.publisher ? book.publisher[0]: ''}</p>
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



