
import React,{useState} from  'react';

function BookEdit({book,onSubmit}){
  const [title,setTitle] = useState(book.title)
 
  const onInputChange =(e)=>{
      setTitle(e.target.value)
  }
  
  const handleOnsubmit=(e)=>{
    e.preventDefault();
    onSubmit(book.id,title)

  }
  return <form onSubmit={handleOnsubmit} className="book-edit">
    <label htmlFor="field2">Title</label>
    <input type="text" id ="field2" value ={title} onChange={onInputChange}/>
    <button class="button" className="button is-primary">Save</button>
  </form>

}

export default BookEdit;