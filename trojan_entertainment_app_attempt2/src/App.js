import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './HomePage.css';
import Button from './Button'; // Default import for Button component
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';
import HomePage from './HomePage';

import Page1 from './Page1';

export default function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        Odysseus Strategic Entertainment App
        <Button>
          
        </Button>
        <Button1>
          Button
        </Button1>
        <Button2>
          Button
        </Button2>
        <Button3>
          Button
        </Button3>
        <Button4>
          Button
        </Button4>
      </header>
      <Routes>
        <Route path ='/HomePage' element={<HomePage />} />
        <Route path ='/Page1' element={<Page1 />} />
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}






