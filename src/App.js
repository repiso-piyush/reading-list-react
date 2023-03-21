import React,{useState} from "react";
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js'

export default function App() {
  const [books,setBooks] = useState([]);
  const deleteBookById = (id)=>{
    setBooks(books.filter((book)=>{
      return book.id !==id;
    }))
  
  }
  const editBookById =(id,title)=>{
    const updatedBooks = books.map((book,index)=>{
      if(book.id===id) return {...book,title}
      return book;
    })
    setBooks(updatedBooks);
  }
  const createBook =(title)=>{
      console.log('to add book with title',title)
      setBooks([...books,
      { id: Math.round(Math.random()*9999),
        title
      }
    ])
    console.log(books)
  }
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onDelete ={deleteBookById} onEdit ={editBookById} books ={books}/>
     <BookCreate  onCreate={createBook}/>
    </div>
  );
}
