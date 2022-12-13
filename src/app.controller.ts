import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateNotificationBody } from './@types';

@Controller('notification')
export class NotificationController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('findMany')
  findMany() {
    return this.prismaService.notification.findMany();
  }

  @Post('create')
  create(@Body() createNotificationBody: CreateNotificationBody) {
    const { recipientId, content, category } = createNotificationBody;

    return this.prismaService.notification.create({
      data: {
        recipientId,
        content,
        category,
      },
    });
  }
}
