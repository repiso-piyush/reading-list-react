import React,{useState} from 'react';
import BookEdit from  './BookEdit.js';

function BookShow({book,onDelete,onEdit}){
  // console.log(title)
  const [showEdit,setShowEdit] = useState(false);

function handleDeleteClick (){
      onDelete(book.id);
}
function handleEditClick(){
      setShowEdit(!showEdit);
}

function handleSubmit(id,newtitle){
        setShowEdit(false);
        onEdit(id,newtitle);
}

let content = <div>{book.title}</div>
if(showEdit) content = <BookEdit onSubmit ={handleSubmit} book={book}  />

  return <div className ="book-show"> 
            <img src={`https://picsum.photos/seed/${book.id}/300/200 `}alt=""/>
            {content}
          <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
     </div>

}
export default BookShow;