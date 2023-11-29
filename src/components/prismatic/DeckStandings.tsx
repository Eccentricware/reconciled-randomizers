import { PrismaticRequestService } from "@/services/request-services/prismatic-request-service"
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";

const DeckStandings: FC = () => {
  const prismaticRequestService = new PrismaticRequestService();
  const [standings, setSetandings] = useState<any[] | undefined>(undefined);

  const { data } = useQuery({
    queryKey: ['get-deck-standings'],
    queryFn: () => { return prismaticRequestService.getDeckStandings(16) }
  });

  if (data) {
    return (
      <div>
        Data will be here
      </div>
    )
  }

  return (
    <div>Data will never be here</div>
  )
}

export default DeckStandings;