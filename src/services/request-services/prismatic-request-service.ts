import { AbstractRequestService } from "./abstract-request-service";

export class PrismaticRequestService extends AbstractRequestService {
  constructor()  {
    super();
  }

  async getDeckStandings(league: number): Promise<any> {
    return this.get(`prismatic/standings/${league}`);
  }
}