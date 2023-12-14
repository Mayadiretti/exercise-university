import { useEffect, useState } from "react"

const UniversityList = ({ universities }) => {
    return (
      <div>
        <h2>Elenco Università</h2>
          {universities.map((university, i) => (
            <li key={i}>
              <a href={university.url} >
                {university.name}
              </a>
            </li>
          ))}
      </div>
    );
  };

export default UniversityList