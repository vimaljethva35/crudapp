import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [
  ]
})
export class DeleteComponent {
  public data: any
  constructor(private _service: DashboardService) { }
  public delet(obj: any): any {
  this._service.deleteProduct(obj).subscribe(res => { this.data = res },
  (err: HttpErrorResponse) => {
  if (err.error instanceof Error)
  console.log('Client Side Error')
  else
  console.log('Server Side Error')
  })
  }
  }