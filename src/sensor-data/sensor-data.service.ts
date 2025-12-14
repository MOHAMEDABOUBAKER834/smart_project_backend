import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorData } from '../sensor-data.entity';

@Injectable()
export class SensorDataService {
  constructor(
    @InjectRepository(SensorData)
    private sensorDataRepository: Repository<SensorData>,
  ) {}

  create(data: any): Promise<SensorData> {
    const sensorData = this.sensorDataRepository.create({
      temperature: parseFloat(data.temperature),
      humidity: parseFloat(data.humidity),
      sensor_id: data.sensor_id || 'VIRTUAL_SENSOR_001',
      device_type: data.device_type || 'virtual_ble',
    });
    
    console.log('💾 Saving to database:', sensorData);
    return this.sensorDataRepository.save(sensorData);
  }

  findAll(): Promise<SensorData[]> {
    return this.sensorDataRepository.find({
      order: { timestamp: 'DESC' },
      take: 100,
    });
  }

  async findLatest(): Promise<SensorData | { message: string }> {
    const [latest] = await this.sensorDataRepository.find({
      order: { timestamp: 'DESC' },
      take: 1,
    });
    
    return latest || { message: 'No data available' };
  }
}