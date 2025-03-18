import { Module } from '@nestjs/common';

import { GrpcTransportModule } from './transports/grpc';
import { HttpTransportModule } from './transports/http';
import { WebsocketTransportModule } from './transports/websocket';

@Module({
  imports: [
    HttpTransportModule,
    GrpcTransportModule,
    WebsocketTransportModule,
  ],
})
export class AppModule {}
