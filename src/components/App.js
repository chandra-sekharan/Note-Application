import React, { useState , useEffect } from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Notesection from './Notesection';

const App = () => {
  const [notes ,setNotes] = useState([
   {
    id :nanoid(),
    text:"Hello I'm chandra",
    date : "12/05/2020",
  },
]);
  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
  
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  return (
    <div>
     <Notesection notes={notes} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
