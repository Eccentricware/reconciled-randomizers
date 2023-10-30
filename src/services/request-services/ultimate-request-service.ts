import { AbstractRequestService } from "./abstract-request-service";

export class UltimateService extends AbstractRequestService {
  constructor() {
    super();
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