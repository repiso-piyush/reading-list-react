
import React,{useState} from 'react';

function BookCreate({onCreate}){
  const [title,setTitle] = useState('');
  
  function handleOnChange(e){
      setTitle(e.target.value);
  }
  function handleOnSubmit(e){
    e.preventDefault();
    onCreate(title);
    setTitle('');
  }
  return (
    <div className ="book-create">
      <h3>Add a Book</h3>
      <form class="form" onSubmit ={handleOnSubmit}>
      <label for ="field" >Title</label>
      <input  className = "input" id ="field" value ={title} onChange ={handleOnChange} type="text" />
      <button className ="button">Submit</button>
    </form>
    </div>
  
    )

}

export default BookCreate;