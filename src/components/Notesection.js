import React from "react";
import Notelist from './Notelist';
import Addnote from './Addnote';
import './Notesection.css';

const Notesection = (props) => {
    return(
        <div className="container">
           <h1>Notes</h1>
           <Notelist notes={props.notes} delete={props.deleteNote}/>
           <Addnote Addnote={props.addNote}/>
        </div>
    );
}
export default Notesection;