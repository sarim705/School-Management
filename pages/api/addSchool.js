import nextConnect from 'next-connect';
import multer from 'multer';
import pool from '../../lib/db';

const upload = multer({ dest: 'public/schoolImages/' });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file.path;

  try {
    const [result] = await pool.query('INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, address, city, state, contact, image, email_id]);
    res.status(201).json({ id: result.insertId, name, address, city, state, contact, image, email_id });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
