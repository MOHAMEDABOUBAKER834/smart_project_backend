import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Flutter app
  app.enableCors({
    origin: '*',  // Allow all for testing
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  
  await app.listen(3000, '0.0.0.0');
  console.log('🚀 NestJS Backend Running');
  console.log('   Local: http://localhost:3000');
  console.log('   Network: http://YOUR_LAPTOP_IP:3000');
  console.log('\n📋 Available Endpoints:');
  console.log('   GET  /api/sensor-data        - Get all data');
  console.log('   GET  /api/sensor-data/latest - Get latest reading');
  console.log('   POST /api/sensor-data        - Store new reading');
}
bootstrap();