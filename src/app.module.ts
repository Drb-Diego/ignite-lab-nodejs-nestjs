import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationController } from './app.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [NotificationController],
  providers: [PrismaService],
})
export class AppModule {}
