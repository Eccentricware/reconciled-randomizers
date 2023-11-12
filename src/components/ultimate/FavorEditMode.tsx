import { UltimateRequestService } from "@/services/request-services/ultimate-request-service";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import React, { FC, useState } from "react";

const FavorEditMode: FC = () => {
  const ultimateRequestService = new UltimateRequestService()
  const [roster, setRoster] = useState<any[] | undefined>(undefined);

  const { data: joeData } = useQuery({
    queryKey: ['get-joe-favor'],
    queryFn: () => { return ultimateRequestService.getRosterFavor(1)}
  });

  const { data: danData } = useQuery({
    queryKey: ['get-dan-favor'],
    queryFn: () => { return ultimateRequestService.getRosterFavor(2)}
  });

  if (joeData) {
    console.log('joeData:', joeData);
  }

  if (danData) {
    console.log('danData:', danData);
  }

  if (joeData && danData) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Fighter</td>
              <td>Joe Favor</td>
              <td>Dan Favor</td>
            </tr>
          </thead>
          <tbody>
            {
              joeData.roster.map((fighter: any, index: number) => 
                <tr key={index}>
                  <td>{fighter.name}</td>
                  <td>{fighter.favor}</td>
                  <td>{danData.roster[index].favor}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>Figters Going to be here!</div>
  )
}

export default FavorEditMode;