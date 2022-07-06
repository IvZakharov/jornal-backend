import { UserEntity } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Lurosa71',
      database: 'ijornal',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
