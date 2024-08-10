import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}> List Of Schools</h1>
      <ul style={styles.list}>
        {schools.map((school) => (
          <li key={school.id} style={styles.listItem}>
            <h2 style={styles.schoolName}>{school.name}</h2>
            <p style={styles.schoolInfo}>{school.address}, {school.city}, {school.state}</p>
            <p style={styles.schoolInfo}>Contact: {school.contact}</p>
            <p style={styles.schoolInfo}>Email: {school.email_id}</p>
            {school.image && (
              <img
                src={school.image}
                alt={`${school.name} logo`}
                style={styles.schoolImage}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: 'auto',
  },
  header: {
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  schoolName: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  schoolInfo: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  schoolImage: {
    width: '300px', 
    height: 'auto', 
    borderRadius: '10px', 
    marginTop: '15px', 
    
  },
};

export default ShowSchools;


