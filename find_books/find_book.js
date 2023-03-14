window.current_url = window.location.href;

window.book_page_urls_patterns = {
    'Amazon': /amazon\.com/,
    'Goodreads': /goodreads\.com/
};

window.libraries_urls = [
];

function getBookPage(){
    for (const [book_page, pattern] of Object.entries(book_page_urls_patterns)) {
        if(current_url.match(pattern)){
            return book_page;
        }
    }
    return null;
}

function sanitizeTitle(title){
    let new_book = title.toLowerCase();

    /* Ignore parentheses */
    new_book = new_book.replace(/\(.*\)/, "");
    /* Ignore colon */
    new_book = new_book.replace(/\:/, "");
    
    /* Ignore terms regarding book type */
    const book_types = [
        "hardcover",
        "paperback",
        "capa dura",
    ];
    book_types.forEach((type) => {
        new_book = new_book.replace(type, "");
    });
    
    return new_book.trim().replaceAll("?", "");
}

function getBookInfos(book_page){

    let title = "";
    let author = "";

    switch(book_page){
        case 'Amazon':
            title = document.getElementById("productTitle").textContent;
            author = document.querySelector(".author").querySelector("a").textContent.trim();
            break;

        case 'Goodreads':
            title = document.querySelector("[data-testid='bookTitle']").textContent;
            author = document.querySelector(".ContributorLink").querySelector("[data-testid='name']").textContent;
            break;

        default:
            return null;
    }

    return [sanitizeTitle(title), author];
}

function searchInLibraries(title, author){
    libraries_urls.forEach((url) => {
        const search_url = url.replace("=%s", `=${title.replaceAll(" ", "+")}+${author.replaceAll(" ", "+")}`);
        window.open(search_url);
    });
}

function searchBook(){
    const book_page = getBookPage();
    const [title, author] = getBookInfos(book_page);
    searchInLibraries(title, author);
}

searchBook();
