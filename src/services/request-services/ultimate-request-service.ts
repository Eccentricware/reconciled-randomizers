import { AbstractRequestService } from "./abstract-request-service";

export class UltimateRequestService extends AbstractRequestService {
  constructor() {
    super();
  }

  async getRosterFavor(playerId: number): Promise<any> {
    return this.get(`ultimate/get-favor/${playerId}`);
  }

  async selectFighters(fighterCount: number): Promise<any> {
    return this.post('ultimate/select-fighters', {
      fighterCount: fighterCount
    });
  }

  async getRoster(): Promise<any> {
    return this.get('ultimate/get-fighters');
  }
}