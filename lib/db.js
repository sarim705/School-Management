
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '9934017506',
  database: 'assignment',
});

export default pool;
