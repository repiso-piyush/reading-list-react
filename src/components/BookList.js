
import React from 'react';
import BookShow from './BookShow';

function BookList({books,onDelete,onEdit}){
  console.log(books);
  const renderBooks = books.map((book)=>{
    return <BookShow key ={book.id} onDelete={onDelete} onEdit ={onEdit}  book ={book} />
  })
  return <div class ='book-list'> 
     {renderBooks}
   </div>

}

export default BookList;