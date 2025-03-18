import { Module } from "@nestjs/common";
import { ExampleGateway } from "./gateways/example.gateway";

@Module({
    providers: [
        ExampleGateway
    ]
})
export class WebsocketTransportModule {}