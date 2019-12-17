import {Injectable} from '@angular/core';
// import {AxiosService} from '../services/axios.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  operationMode = '';
  recordScript = [];

  constructor() {
  }

  record(httpType, url, param) {
    if (this.operationMode === 'startRecord') {
      const timestamp = new Date().getTime();
      let relativeTime = 0;
      if (this.recordScript.length !== 0) {
        relativeTime = timestamp - this.recordScript[0].timestamp;
      }
      this.recordScript.push({httpType, url, param, timestamp, relativeTime});
      console.log(this.recordScript);
    }
  }

  replay() {
    for (const recordScriptItem of this.recordScript) {
      setTimeout(() => {
        if (this.operationMode === 'startReplay') {
          if (recordScriptItem.httpType === 'GET') {
            // this.axiosService.axiosGet(recordScriptItem.url, recordScriptItem.param).then((data) => {
            //   console.log('回放GetAction执行成功', recordScriptItem, data);
            // });
            axios.get(recordScriptItem.url, {params: recordScriptItem.param})
              .then(response => {
                console.log('回放GetAction执行成功', recordScriptItem, response);
              });
          } else {
            // this.axiosService.axiosPost(recordScriptItem.url, recordScriptItem.param).then((data) => {
            //   console.log('回放PostAction执行成功', recordScriptItem, data);
            // });
            axios.get(recordScriptItem.url, recordScriptItem.param)
              .then(response => {
                console.log('回放PostAction执行成功', recordScriptItem, response);
              });
          }
        }
      }, recordScriptItem.relativeTime);
    }
  }
}
