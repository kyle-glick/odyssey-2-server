import { MapDocument } from '../game/data/maps';

/**
 * Provides an object for scripts to interact with Maps
 *
 * @export
 * @class Map
 */
export class Map {
  constructor(protected gameState, protected map: MapDocument) {
  }

  get name(): string {
    return this.map.name;
  }

  get playerCount() {
    //TODO
    return null;
  }

  get friendly(): boolean {
    //TODO
    return null;
  }
}
