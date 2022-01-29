import React,{ useContext } from 'react';
import NoteContext from '../Context/notes/noteContext';
import { useEffect } from 'react';

const About = () => {
    const a = useContext(NoteContext)
    useEffect(() => {
      a.update();
    });
    
  return <div>
      This is About {a.state.name} and he is in class {a.state.class}.
  </div>;
};

export default About;