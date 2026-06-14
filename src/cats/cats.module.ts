import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class CatsModule {}
