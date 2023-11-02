import { UltimateRequestService } from "@/services/request-services/ultimate-request-service";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import React, { FC, useState } from "react";

const FavorEditMode: FC = () => {
  const ultimateRequestService = new UltimateRequestService()
  const [roster, setRoster] = useState<any[] | undefined>(undefined);

  const rosterFavorResult: UseQueryResult<any> = useQuery({
    queryKey: ['get-roster-favor'],
    queryFn: () => { return ultimateRequestService.getRosterFavor(0)}
  });

  return (
    <div>Figters Going to be here!</div>
  )
}

export default FavorEditMode;