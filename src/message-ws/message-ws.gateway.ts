import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';



@WebSocketGateway({cors: true, namespace:'/'})
export class MessageWsGateway  implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer() wss:Server;

  constructor(private readonly messageWsService: MessageWsService) {}


  handleConnection(client: Socket) {
    // console.log('Cliente conectado', client.id);

    this.messageWsService.registerClient(client);
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients())
    // console.log('Clientes conectados:', this.messageWsService.getConnectedClients())
  }

  handleDisconnect(client: Socket, ...args: any[]) {
    // console.log('Cliente desconectado', client.id);

    this.messageWsService.removeClient(client.id);
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients())
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto){

    //! Esto emite unicamente al mismo cliente
    // client.emit('message-from-server',{
    //   fullName: 'Soy AnthoFu',
    //   message: payload.message || 'Sin mensaje'
    // });
    // console.log(client.id, payload)


    // //! Esto emite a todos MENOS, al cliente inicial
    // client.broadcast.emit('message-from-server', {
    //   fullName: 'Soy AnthoFu!',
    //   message: payload.message || 'Sin mensaje'
    // })

    //! Esto emite a todos, incluyendo el cliente inicial
    this.wss.emit('message-from-server', {
      fullName: 'Soy AnthoFu!',
      message: payload.message || 'Sin mensaje'
    })
  }

}
