import { Module } from '@nestjs/common';

import '@inveniam/server-protobuf/proto/example.proto'

import { HttpTransportModule } from './transports/http';
import { GrpcTransportModule } from './transports/grpc';
import { WebsocketTransportModule } from './transports/websocket';

@Module({
  imports: [
    HttpTransportModule,
    GrpcTransportModule,
    WebsocketTransportModule,
  ],
})
export class AppModule {}
