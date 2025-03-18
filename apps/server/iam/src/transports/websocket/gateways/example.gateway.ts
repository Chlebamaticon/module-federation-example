import { MessageBody, SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'example' })
export class ExampleGateway {
    @SubscribeMessage('example')
    handleEvent(@MessageBody('id') id: number): WsResponse<unknown> {
        return {
            event: 'example',
            data: { id }
        }
    }
}