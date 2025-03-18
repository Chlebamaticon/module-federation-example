import { Module } from '@nestjs/common';

import { GrpcTransportModule } from './transports/grpc';
import { WebsocketTransportModule } from './transports/websocket';
import { HttpTransportModule } from './transports/http';

@Module({
  imports: [
    HttpTransportModule,
    GrpcTransportModule,
    WebsocketTransportModule
  ],
})
export class AppModule {}
