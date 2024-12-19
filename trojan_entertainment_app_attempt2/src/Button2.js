import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function Button1() {
  
    const navigate = useNavigate();  // Initialize the useNavigate hook
  
    const clickMe = () => {
        alert("The army leaves the Trojan Horse outside the walls of Troy, claiming it was a gift for the goddess Athena.The Trojans fell for the lie, bringing the Horse inside the walls of Troy. As the day goes on, the warriors get curious and might investigate. Do you: Do you… wait patiently until nightfall to disarm the guards (go to part 4)  or  attack now and catch the warriors off guard (go to part 5)");
        //navigate('/HomePage'); // Navigate to '/Page1'
    };

    return (
      <div>
        <button onClick={clickMe}>Part 3</button>
      </div>
    );
}
