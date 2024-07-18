import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="grid">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <Image src={`/schoolImages/${school.image}`} alt={school.name} width={500} height={300} className="school-image" />
            <h2 className="school-name">{school.name}</h2>
            <p className="school-address">{school.address}</p>
            <p className="school-city">{school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
