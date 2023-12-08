import { UltimateRequestService } from "@/services/request-services/ultimate-request-service";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import React, { CSSProperties, FC, useEffect, useState } from "react";

const attributeStyle: CSSProperties = {
  textAlign: 'right'
}

const FavorEditMode: FC = () => {
  const ultimateRequestService = new UltimateRequestService()
  const [roster, setRoster] = useState<any[] | undefined>(undefined);
  const [remainingFavorJoe, setRemainingFavorJoe] = useState(100000);
  const [remainingFavorDan, setRemainingFavorDan] = useState(100000);
  const [joeRoster, setJoeRoster] = useState<any[] | undefined>(undefined);
  const [danRoster, setDanRoster] = useState<any[] | undefined>(undefined);

  const rosterFavorLimit = 100000;

  const { data: joeData } = useQuery({
    queryKey: ['get-joe-favor'],
    queryFn: () => { return ultimateRequestService.getRosterFavor(1)}
  });

  const { data: danData } = useQuery({
    queryKey: ['get-dan-favor'],
    queryFn: () => { return ultimateRequestService.getRosterFavor(2)}
  });

  useEffect(() => {
    if (joeData) {
      updatePercentages(joeData.roster, 'joe');
    }
  }, [joeData]);

  useEffect(() => {
    if (danData) {
      updatePercentages(danData.roster, 'dan');
    }
  }, [danData]);

  const updatePercentages = (fighters: any[], rosterOwner: string) => {
    const favorTotal = fighters.reduce((total: number, fighter: any) => {
      return total + fighter.favor;
    }, 0);

    fighters.forEach((fighter: any) => {
      fighter.percent = (fighter.favor / favorTotal * 100).toFixed(2);
    });

    if (rosterOwner === 'joe') {
      setJoeRoster(fighters);
      setRemainingFavorJoe(rosterFavorLimit - favorTotal);
    } else {
      setDanRoster(fighters);
      setRemainingFavorDan(rosterFavorLimit - favorTotal);
    }
  }

  const handleFavorChange = (index: number, rosterOwner: string, value: number) => {
    if (value < 1) {
      return;
    }
    
    if (rosterOwner === 'joe' && joeRoster) {
      const updatedRoster = joeRoster?.slice();
      let newValue = value - updatedRoster[index].favor > remainingFavorJoe
        ? updatedRoster[index].favor + remainingFavorJoe
        : value;

      updatedRoster[index].favor = newValue;
      setJoeRoster(updatedRoster);
      updatePercentages(updatedRoster, 'joe');

    } else if (danRoster) {
      const updatedRoster = danRoster?.slice();
      let newValue = value - updatedRoster[index].favor > remainingFavorDan
        ? updatedRoster[index].favor + remainingFavorDan
        : value;

      updatedRoster[index].favor = value;
      setDanRoster(updatedRoster);
      updatePercentages(updatedRoster, 'dan');
    }
  }

  if (joeData && danData) {
    return (
      <div>
        <h4>Joe Favor Remaining: {remainingFavorJoe}</h4>
        <h4>Dan Favor Remaining: {remainingFavorDan}</h4>
        <table>
          <thead>
            <tr>
              <td>Fighter</td>
              <td>Joe's Favor</td>
              <td>Joe %</td>
              <td>Dan's Favor</td>
              <td>Dan %</td>
            </tr>
          </thead>
          <tbody>
            {
              joeData.roster.map((fighter: any, index: number) =>
                <tr key={index}>
                  <td>{fighter.name}</td>
                  <td style={attributeStyle}>
                    <input type="number"
                      value={fighter.favor}
                      onChange={(e) => handleFavorChange(index, 'joe', Number(e.target.value))}
                    />
                  </td>
                  <td style={attributeStyle}>{fighter.percent}%</td>
                  <td style={attributeStyle}>
                    <input type="number"
                      value={danData.roster[index].favor}
                      onChange={(e) => handleFavorChange(index, 'dan', Number(e.target.value))}
                    />
                  </td>
                  <td style={attributeStyle}>{danData.roster[index].percent}%</td>
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