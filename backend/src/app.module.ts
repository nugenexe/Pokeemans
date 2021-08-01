import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeApiModule } from './poke-api/poke-api.module';
import { RxtestModule } from './rxtest/rxtest.module';

@Module({
  imports: [PokeApiModule, RxtestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
