import { createRouter } from 'next-connect';
import multer from 'multer';
import pool from '../../lib/db';

// Configure multer for file uploads
const upload = multer({
  dest: 'public/schoolImages/',
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type, only images are allowed!'), false);
    }
  },
});

const router = createRouter();

// Apply multer middleware
router.use(upload.single('image'));

router.post(async (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;

  // Log the uploaded file to debug
  console.log('Uploaded file:', req.file);

  // Construct the image path
  const image = req.file ? `/schoolImages/${req.file.filename}` : null;

  // Validate the input data
  if (!name || !address || !city || !state || !contact || !email_id) {
    return res.status(400).json({ error: 'All fields except image are required' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, image, email_id]
    );

    console.log('Database insert result:', result);

    res.status(201).json({ id: result.insertId, name, address, city, state, contact, image, email_id });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Disable default body parsing since multer handles file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default router.handler();
