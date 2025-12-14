import { Controller, Get, Post, Body } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';

@Controller('api/sensor-data')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Post()
  create(@Body() data: any) {
    console.log('📥 Received sensor data:', data);
    return this.sensorDataService.create(data);
  }

  @Get()
  findAll() {
    return this.sensorDataService.findAll();
  }

  @Get('latest')
  findLatest() {
    return this.sensorDataService.findLatest();
  }
}