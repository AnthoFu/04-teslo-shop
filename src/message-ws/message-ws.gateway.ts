import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';
import { Socket } from 'socket.io';



@WebSocketGateway({cors: true, namespace:'/'})
export class MessageWsGateway  implements OnGatewayConnection, OnGatewayDisconnect{
  constructor(private readonly messageWsService: MessageWsService) {}
  handleDisconnect(client: Socket) {
    // console.log('Cliente conectado', client.id);

    this.messageWsService.registerClient(client);
  
    console.log('Clientes conectados:', this.messageWsService.getConnectedClients())
  }
  handleConnection(client: Socket, ...args: any[]) {
    // console.log('Cliente desconectado', client.id);

    this.messageWsService.removeClient(client.id);
  }

}
