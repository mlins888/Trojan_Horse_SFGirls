import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Button1() {
  
    const navigate = useNavigate();  // Initialize the useNavigate hook
  
    const clickMe = () => {
        alert("Whoops. Bad Idea. The Trojans were suspicious about the Horse and intercepted it before the army could make too much damage. They burned the horse down.");
        //navigate('/HomePage'); // Navigate to '/Page1'
    };

    return (
      <div>
        <button onClick={clickMe}>Part 5</button>
      </div>
    );
}
