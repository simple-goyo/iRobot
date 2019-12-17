import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecordService} from '../../services/record.service';

@Component({
  selector: 'app-recordbutton',
  templateUrl: './recordbutton.component.html',
  styleUrls: ['./recordbutton.component.css']
})
export class RecordbuttonComponent implements OnInit {
  // @Output() public outer = new EventEmitter();
  operationMode = '';

  constructor(private recordService: RecordService) {
  }

  ngOnInit() {
  }

  chooseMode(e) {
    this.operationMode = e.currentTarget.id;
    // this.outer.emit(this.operationMode);
    this.recordService.operationMode = this.operationMode;
    switch (this.operationMode) {
      case 'startRecord':
        this.recordService.recordScript = [];
        document.getElementById('startRecord').style.display = 'none';
        document.getElementById('endRecord').style.display = '';
        document.getElementById('startReplay').style.display = 'none';
        break;
      case 'endRecord':
        this.recordService.stopRecord();
        document.getElementById('startRecord').style.display = '';
        document.getElementById('endRecord').style.display = 'none';
        document.getElementById('startReplay').style.display = '';
        break;
      case 'startReplay':
        this.recordService.replay(this.relplayEnd);
        document.getElementById('startRecord').style.display = 'none';
        document.getElementById('startReplay').style.display = 'none';
        document.getElementById('endReplay').style.display = '';
        break;
      case 'endReplay':
        document.getElementById('startRecord').style.display = '';
        document.getElementById('startReplay').style.display = '';
        document.getElementById('endReplay').style.display = 'none';
        break;
    }
  }

  relplayEnd() {
    document.getElementById('startRecord').style.display = '';
    document.getElementById('startReplay').style.display = '';
    document.getElementById('endReplay').style.display = 'none';
  }

}
