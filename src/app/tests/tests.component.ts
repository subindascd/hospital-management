
import { Component } from '@angular/core';

export interface TestRecord {
  patientId: string;
  patientName: string;
  tests: { name: string; result: string; imageUrl?: string }[];
  xrayImageUrl?: string;
  scanImageUrl?: string;
  otherTestResult?: string;
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  showPrintResult = false;
  openPrintResult() {
    this.showPrintResult = true;
  }
  closePrintResult() {
    this.showPrintResult = false;
  }
  allTestRecords: TestRecord[] = [
    // Example data; in a real app, fetch from backend or service
    {
      patientId: 'P001',
      patientName: 'John Doe',
      tests: [
        { name: 'Blood Test', result: '', imageUrl: '' },
        { name: 'Urine Test', result: '', imageUrl: '' }
      ],
      xrayImageUrl: '',
      scanImageUrl: '',
      otherTestResult: ''
    }
  ];
  searchPatientId: string = '';
  foundRecord: TestRecord | null = null;
  notFound = false;

  onSearch() {
    this.foundRecord = this.allTestRecords.find(r => r.patientId === this.searchPatientId.trim()) || null;
    this.notFound = !this.foundRecord;
  }

  onImageUpload(event: any, type: 'xray' | 'scan' | 'test', testIndex?: number) {
    const file = event.target.files[0];
    if (file && this.foundRecord) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (type === 'xray') this.foundRecord!.xrayImageUrl = e.target.result;
        else if (type === 'scan') this.foundRecord!.scanImageUrl = e.target.result;
        else if (type === 'test' && typeof testIndex === 'number') this.foundRecord!.tests[testIndex].imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
