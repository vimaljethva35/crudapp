import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent {
  public data: any
  public loading: string
  constructor(private _service: DashboardService) {
//this.data = "I am from create component"
  this.loading = ""
  }
  public update(obj:any) {
    this.loading = "spinner-border text-primary"
    this._service.updateProduct(obj).subscribe(res => {
      this.data = res
      this.loading = ''},
       (err: HttpErrorResponse) => {
    if (err.error instanceof Error)
    console.log('Client Side Error')
    else
    console.log('Server Side Error')
  })
}

}
