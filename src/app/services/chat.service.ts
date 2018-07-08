import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { delay } from '../../../node_modules/rxjs-compat/operator/delay';



const CHAT_URL = 'ws://localhost:8081'; //This is a test websocket sending the json data


export interface Message {
	message: string
}

@Injectable()
export class ChatService {

	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {

		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.share()
			.map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);

				console.log(data.message)
				
				return {
					message: data.message
				}
				
			}
			
		);
	}
}