import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Button() {
  
    const navigate = useNavigate();  // Initialize the useNavigate hook
  
    const clickMe = () => {
        alert("Today, you are the courageous, resourceful, and shrewd Odysseus. After decades of war, the army has figured out the perfect way to infiltrate the city of Troy - The Trojan Horse. The fate of your comrades and enemies rests on your hands. Go to part 2");
        //navigate('/HomePage'); // Navigate to '/Page1'
    };

    return (
      <div>
        <button onClick={clickMe}>Part 1</button>
      </div>
    );
}
