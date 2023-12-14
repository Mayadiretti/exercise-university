import { useEffect, useState } from 'react'
import './App.css'
import UniversityList from './UniversityList';
import SearchBar from './SearchBar';

function App() {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const fetchUni = async () => {
      try {
        const response = await fetch('http://universities.hipolabs.com/search?country=Italy');
        const obj = await response.json();

        const elencoUniversities = obj.map((university) => ({
          name: university.name,
          url: university.web_pages[0],
        }));

        setUniversities(elencoUniversities);
        setFilteredUniversities(elencoUniversities);
      } catch (error) {
        console.error('Errore durante il recupero delle università', error);
      }
    };

    fetchUni();
}, []); 
    
    const handleSearch =(inputValue)=>{
      console.log(inputValue);
      const filtered = universities.filter((university) =>
      university.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredUniversities(filtered);
    }
  

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UniversityList universities={filteredUniversities} />
    </div>
  );
 
}

export default App
