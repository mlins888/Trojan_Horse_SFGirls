import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Button1() {
  
    const navigate = useNavigate();  // Initialize the useNavigate hook
  
    const clickMe = () => {
        alert("Horse? Built. Army? Ready. The Greeks have built the enormous wooden horse and are ready to execute the plan. The city of Troy is celebrating their supposed victory, believing the Greeks have finally given up. Go to Part 3.");
        //navigate('/HomePage'); // Navigate to '/Page1'
    };

    return (
      <div>
        <button onClick={clickMe}>Part 2</button>
      </div>
    );
}
