import {
  MiddlewareConsumer,
  Module,
  NestModule,
  // RequestMethod,
} from '@nestjs/common';
// import { ExampleClassMiddleware } from './middlewares/ExampleClassMiddleware.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configure(consumer: MiddlewareConsumer) {
    // consumer
    // .apply(ExampleClassMiddleware)
    // .forRoutes({ path: '/{*any}', method: RequestMethod.ALL });
  }
}
