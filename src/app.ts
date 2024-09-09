import express from 'express';
import vehicleRoutes from './routes/vehicleRoutes';
import { connectToDatabase } from './config/database';

const app = express();

app.use(express.json());
app.use('/api/vehicles', vehicleRoutes);

const startServer = async () => {
  await connectToDatabase();
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};

startServer();
