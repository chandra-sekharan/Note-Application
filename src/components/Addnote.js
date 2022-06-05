import React, { useState } from "react";
import './Addnote.css';



const Addnote = ({Addnote}) => {
    const [noteText , setnoteText] = useState('');
    const limit = "200";
    const handlechange = (e) => {
        if(limit-noteText.length > 0)
        setnoteText(e.target.value);
    };
    const handlesubmit = () =>{
        if(noteText.trim().length > 0)
         Addnote(noteText);
        setnoteText('');
    }    
    
    return(
        <div>
              <div className="Addnote">
                <textarea rows="8" cols="10" value={noteText} placeholder="Write Note here..." onChange={handlechange}>
                </textarea>
                <div className="Addnote-footer">
                    <button onClick={handlesubmit}>Save</button>
                    <p>{limit-noteText.length}</p>
                </div>
            </div>
        </div>
    );
}
export default Addnote;