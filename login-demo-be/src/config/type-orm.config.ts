import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { User } from 'src/user/entities/user.entity'



@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'sqlite',
        database: 'database.sqlite',
        // entities: [process.cwd()+'src/**/entities/*.entity{.ts,.js}'],
        entities: [User],
        synchronize: true,
    }
  }
}
