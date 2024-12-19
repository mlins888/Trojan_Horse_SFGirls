import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Button1() {
  
    const navigate = useNavigate();  // Initialize the useNavigate hook
  
    const clickMe = () => {
        alert("Patience is a key element to success. The soldiers rest and recharge in preparation for the night. While the warriors of Troy were too busy partying, the soldiers climbed outside the horse and took over the Kingdom of Troy.");
        //navigate('/HomePage'); // Navigate to '/Page1'
    };

    return (
      <div>
        <button onClick={clickMe}>Part 4</button>
      </div>
    );
}
