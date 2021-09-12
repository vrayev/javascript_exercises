const getTheTitles = function(bookList) {
    return bookList.map(function(book){
        return book.title;
    });
};

module.exports = getTheTitles;
