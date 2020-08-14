import React ,{useState} from 'react';
import marked from 'marked';
import parse from 'html-react-parser';
import './App.css';

function App() {
  const [markedText,setmarkedText]=useState('');
  const [value,setValue]=useState('');
  

  return (
    <>
    <div className="container mt-4">
      <div className="form-group">
          <label htmlFor="comment">Editor :</label>
          <textarea id="editor" className="form-control" rows="5"
          value = {value}
          onChange={(event)=>{
                      setValue(event.target.value)
                   }}
          >

          </textarea>
      </div>
    </div> 
    <div className="container border" id="preview">
    <label htmlFor="comment">Previewer :</label>
    <div
                dangerouslySetInnerHTML={{
                  __html: marked(value),
                }}
              ></div>          
    </div>
  </> 
  );
}

export default App;
