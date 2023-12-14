import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleSearch = () => {
        console.log('Input value');
        onSearch(inputValue);
      };
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Cerca</button>
      </>
    );
  }