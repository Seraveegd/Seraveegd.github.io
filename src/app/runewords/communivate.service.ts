import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunivateService {
  private data = new Subject()

  constructor() { }

  getData() {
    return this.data;
  }

  updateData(data: string) {
    this.data.next(data);
  }
}
