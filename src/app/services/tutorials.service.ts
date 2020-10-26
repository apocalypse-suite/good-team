import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  constructor() {
  }

  async getAllTutorials(): Promise<any> {
    return new Promise(((resolve, reject) => {
      fetch('http://localhost:1000/api/tutorials', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:1000',
          'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        }
      }).then(res => res.json())
        .then(res => {
          resolve(res.items);
        })
        .catch(err => {
          reject(err);
        });
    }));
  }
}
