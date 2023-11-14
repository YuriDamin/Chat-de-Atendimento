import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log('Valor do input:', inputValue);
  };

  return (
    <div>
      <input  
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Digite seu nome..."
      />
      <button onClick={handleButtonClick}>Entrar no Chat</button>
    </div>
  );
};

export default Home;
