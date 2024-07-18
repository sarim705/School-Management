
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM schools');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
}
