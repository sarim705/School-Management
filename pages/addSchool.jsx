import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('contact', data.contact);
    formData.append('email_id', data.email_id);

    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const response = await axios.post('/api/addSchool', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      alert('School added successfully!');
      reset();
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Failed to add school.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add New School</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>School Name</label>
          <input
            {...register('name', { required: true })}
            style={styles.input}
            placeholder="Enter school name"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address</label>
          <input
            {...register('address', { required: true })}
            style={styles.input}
            placeholder="Enter address"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>City</label>
          <input
            {...register('city', { required: true })}
            style={styles.input}
            placeholder="Enter city"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>State</label>
          <input
            {...register('state', { required: true })}
            style={styles.input}
            placeholder="Enter state"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Contact</label>
          <input
            {...register('contact', { required: true })}
            style={styles.input}
            placeholder="Enter contact number"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            {...register('email_id', { required: true })}
            style={styles.input}
            placeholder="Enter email"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Image</label>
          <input
            type="file"
            {...register('image', { required: true })}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Add School
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default AddSchool;
