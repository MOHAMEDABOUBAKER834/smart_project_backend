import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorData } from './sensor-data.entity';
import { SensorDataService } from './sensor-data/sensor-data.service';
import { SensorDataController } from './sensor-data/sensor-data.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [SensorData],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SensorData]),
  ],
  controllers: [AppController, SensorDataController],
  providers: [AppService, SensorDataService],
})
export class AppModule {}