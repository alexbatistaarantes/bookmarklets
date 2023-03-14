When you're in a page for a book in Amazon or Goodreads, click on the bookmarklet and new tabs will open searching the book by title and author name in online libraries (👀) in new tabs

To add a library (👀), just search something in it, and in the URL created in the result, replace the thing you searched for %s, and place this in the `libraries_urls` variable

Example:
```
window.libraries_urls = [
    "https://library.👀/search?query=%s",
];
```