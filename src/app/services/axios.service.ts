import {Injectable} from '@angular/core';
import axios from 'axios';
import {RecordService} from '../services/record.service';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor(private recordService: RecordService) {
  }

  // axiosGet(api) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(api,).then((res) => {
  //       resolve(res);
  //     });
  //   });
  // }

  axiosPost(url, params) {
    this.recordService.record('POST', url, params);
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  axiosGet(url, param) {
    this.recordService.record('GET', url, param);
    return new Promise((resolve, reject) => {
      axios.get(url, {params: param})
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
