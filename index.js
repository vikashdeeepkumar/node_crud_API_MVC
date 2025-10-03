import express from 'express';
import dotenv from 'dotenv';
import userroutes from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;



// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount routes
app.use('/api', userroutes);

// Error handler (to catch next(err))
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://stack.brstdev.com:${PORT}`);
});