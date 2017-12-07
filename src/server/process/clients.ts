import { MessageProcessor } from './process';

import { Message } from '../message';
import { PlayerManager } from '../managers/player';

export class ClientProcessor extends MessageProcessor {
  protected processors: { [id: number]: Server.ProcessFunction } = {};
  protected playerEvents: Server.Managers.PlayerManager;

  constructor(game: Server.GameState) {
    super(game);

    this.processors[23] = this.joinGame.bind(this);
    this.processors[61] = this.clientInfo.bind(this);

    this.playerEvents = game.managers.player;
  }

  async process(msg: Message): Promise<any> {
    this.processors[msg.id](msg);
  }

  clientInfo(msg: Message) {

  }

  async joinGame(msg: Message) {
    await this.playerEvents.joinGame(msg.client);
  }
}
