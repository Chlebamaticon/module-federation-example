import { Module } from '@nestjs/common';

import { HttpTransportModule } from './transports/http';
import { GrpcTransportModule } from './transports/grpc';
import { WebsocketTransportModule } from './transports/websocket';
import { OrganizationService } from './services/organization.service';
import { PortfolioService } from './services/portfolio.service';
import { DealService } from './services/deal.service';
@Module({
  imports: [HttpTransportModule, GrpcTransportModule, WebsocketTransportModule],
  providers: [OrganizationService, PortfolioService, DealService],
})
export class AppModule {}
