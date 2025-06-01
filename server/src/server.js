
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/users', userRoutes);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.join(__dirname, '../../client2/dist');
app.use('/', express.static(clientDist));


app.use('/', express.static(path.join(__dirname, '../../client2/dist')))

// app.get('*', (_req, res) => {
// //   res.sendFile(path.join(clientDist, 'index.html'));
// });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Listening on http://localhost:${PORT}`);
});
