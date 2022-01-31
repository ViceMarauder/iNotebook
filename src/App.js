import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/notes/NotesState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Alert message="This is an amazing React course"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
