import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dtos/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';



@WebSocketGateway({cors: true, namespace:'/'})
export class MessageWsGateway  implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer() wss:Server;

  constructor(
    private readonly messageWsService: MessageWsService,
    private readonly jwtService: JwtService
  ) {}


  async handleConnection(client: Socket) {
    // console.log('Cliente conectado', client.id);

    const token = client.handshake.headers.authentication;
    // console.log('Payload antes de verificar:',{token})

    let payload: JwtPayload;
    try {
      if (typeof token !== 'string') {
        throw new Error('Invalid token');
      }
    payload = this.jwtService.verify(token);
    await this.messageWsService.registerClient(client, payload.id);
    } catch (error) {
      client.disconnect();
      return;
    }
    // console.log({payload})
    

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
      fullName: this.messageWsService.getUserFullNameBySocket(client.id),
      message: payload.message || 'Sin mensaje'
    })
  }

}
