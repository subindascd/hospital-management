import { Component, Input } from '@angular/core';
import { TestRecord } from './tests.component';

@Component({
  selector: 'app-print-result',
  templateUrl: './print-result.component.html',
  styleUrls: ['./print-result.component.css']
})
export class PrintResultComponent {
  @Input() foundRecord: TestRecord | null = null;
  selectedType: string = 'lab';
  showResult = false;

  onTypeSelect() {
    this.showResult = true;
  }

  printResult() {
    window.print();
  }
}
