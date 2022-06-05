import React from "react";
import logo from './images/delete.png'
import './Notelist.css';
const Notelist = (props) =>{
    return(
        <div>
            {props.notes.map((notes) =>
            <div className="note">
                <span>{notes.text}</span>
                <div className="note-footer">
                    <img src={logo} onClick={()=>props.delete(notes.id)}></img>
                    <p>{notes.date}</p>
                </div>
            </div>
            )}
            
        </div>
    );
}

export default Notelist;