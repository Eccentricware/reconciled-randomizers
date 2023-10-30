export class AbstractRequestService {
  async get(route: string, idToken?: string): Promise<any> {
    // const idToken = await this.user?.getIdToken();

    return await this.baseGetRequest(route);
  }

  async baseGetRequest(route: string): Promise<any> {
    return fetch(`http://localhost:8000/${route}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response: any) => {
      console.log('Response', response);
      return response.json();
    })
    .then((data: any) => {
      console.log('Data', data);
      return data;
    })
    .catch((error: Error) => {
      console.log('Base Fetch Get Request Error: ' + error.message);
    });
  }

  async post(route: string, payload: any): Promise<any> {
    return await this.basePostRequest(route, payload);
  }

  async basePostRequest(route: string, payload: any): Promise<any> {
    return fetch(`http://localhost:8000/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then((response: any) => {
      console.log('Response:', response)
      return response.json();
    })
    .then((data: any) => {
      console.log('Data', data);
      return data;
    })
    .catch((error: Error) => {
      console.log('Base Fetch Post Request Error: ' + error.message);
    });
  }


  // async put(route: string, payload: any): Promise<any> {
  //   return this.user?.getIdToken()
  //     .then(async (idToken: string) => {
  //       return await this.basePutRequest(
  //         route,
  //         idToken,
  //         payload
  //       );
  //     });
  // }

  // async basePutRequest(
  //   route: string,
  //   idToken: string | undefined,
  //   payload: any
  // ): Promise<any> {
  //   idToken = idToken ? idToken : '';

  //   return fetch(`${this.host}:${this.port}/${route}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       idToken: idToken
  //     },
  //     body: JSON.stringify(payload)
  //   })
  //   .then((response: any) => {
  //     console.log('Response:', response)
  //     return response.json();
  //   })
  //   .then((data: any) => {
  //     console.log('Data', data);
  //     return data;
  //   })
  //   .catch((error: Error) => {
  //     console.log('Base Fetch Post Request Error: ' + error.message);
  //   });
  // }
}