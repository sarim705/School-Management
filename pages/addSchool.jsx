import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      await axios.post('/api/addSchool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('School added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add school.');
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  };

  const inputStyle = {
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    width: '100%'
  };

  const labelStyle = {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#333'
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.875rem'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input {...register('name', { required: true })} style={inputStyle} />
          {errors.name && <span style={errorStyle}>This field is required</span>}
        </div>
        <div>
          <label style={labelStyle}>Address:</label>
          <input {...register('address', { required: true })} style={inputStyle} />
          {errors.address && <span style={errorStyle}>This field is required</span>}
        </div>
        <div>
          <label style={labelStyle}>City:</label>
          <input {...register('city', { required: true })} style={inputStyle} />
          {errors.city && <span style={errorStyle}>This field is required</span>}
        </div>
        <div>
          <label style={labelStyle}>State:</label>
          <input {...register('state', { required: true })} style={inputStyle} />
          {errors.state && <span style={errorStyle}>This field is required</span>}
        </div>
        <div>
          <label style={labelStyle}>Contact:</label>
          <input {...register('contact', { required: true })} style={inputStyle} />
          {errors.contact && <span style={errorStyle}>This field is required</span>}
        </div>
        <div>
          <label style={labelStyle}>Email:</label>
          <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} style={inputStyle} />
          {errors.email_id && <span style={errorStyle}>Invalid email address</span>}
        </div>
        <div>
          <label style={labelStyle}>Image:</label>
          <input type="file" {...register('image', { required: true })} style={inputStyle} />
          {errors.image && <span style={errorStyle}>This field is required</span>}
        </div>
        <button type="submit" style={buttonStyle} onMouseOver={e => e.currentTarget.style = {...buttonStyle, ...buttonHoverStyle}} onMouseOut={e => e.currentTarget.style = buttonStyle}>
          Add School
        </button>
      </form>
    </div>
  );
}
