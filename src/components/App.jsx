import React from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import notes from "../notes";

function newNote(noteEntry) {
    return (
        <Note 
        key={noteEntry.key}
        title={noteEntry.title}
        content={noteEntry.content}
        />
    )
}





function App() {
    return (
        <div>
        <Header />
        {notes.map(newNote)}
        {/* <Note /> */}
        <Footer />
        </div>
    );
}

export default App;