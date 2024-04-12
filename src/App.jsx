// App.js
import './App.css'
import Background from './components/background'
import Cards from './components/cards'
import { useState } from 'react'

function App() {
  const [takeInput, setTakeInput] = useState({
    cardname: '',
    cardnumber: '',
    month: '',
    year: '',
    cvc: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormData = (formData) => {
    setTakeInput(formData);
    setShowSuccess(true);
  };

  const handleSuccessClick = () => {
    setShowSuccess(false);
  };

  return (
    <>
      <Background handleFormData={handleFormData} showSuccess={showSuccess} handleSuccessClick={handleSuccessClick} />
      <Cards {...takeInput} />
    </>
  );
}

export default App;
