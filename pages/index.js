import React from 'react';
import Link from 'next/link';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    textAlign: 'center',
    padding: '2rem',
    boxSizing: 'border-box'
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#333'
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    color: '#555'
  };

  const linkStyle = {
    display: 'block',
    fontSize: '1.25rem',
    textDecoration: 'none',
    color: '#0070f3',
    padding: '0.75rem 1.5rem',
    border: '1px solid #0070f3',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    width: '100%',
    maxWidth: '300px',
    margin: '0.5rem auto',
    textAlign: 'center'
  };

  const linkHoverStyle = {
    backgroundColor: '#005bb5',
    color: '#fff',
    transform: 'scale(1.05)'
  };

  const footerStyle = {
    marginTop: 'auto',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.875rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>WELCOME TO EDUNIFY - UNIFORM APPLICATION</h1>
      <h2 style={subHeadingStyle}>School Management System</h2>
      <Link href="/addSchool" >
        <div style={linkStyle} onMouseOver={e => e.currentTarget.style = {...linkStyle, ...linkHoverStyle}} onMouseOut={e => e.currentTarget.style = linkStyle}>
          Add School
        </div>
      </Link>
      <Link href="/showSchools" >
        <div style={linkStyle} onMouseOver={e => e.currentTarget.style = {...linkStyle, ...linkHoverStyle}} onMouseOut={e => e.currentTarget.style = linkStyle}>
          Show Schools
        </div>
      </Link>
      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} Edunify. All rights reserved.
      </footer>
    </div>
  );
}
