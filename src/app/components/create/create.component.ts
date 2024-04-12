import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent {
  public data: any
  public loading: string
  constructor(private _service: DashboardService) {
//this.data = "I am from create component"
  this.loading = ""
  }
  public create(obj:any) {
    this.loading = "spinner-border text-primary"
    this._service.createProduct(obj).subscribe(res => {
      this.data = res
      this.loading = ""
    }, (err: HttpErrorResponse) => {
    if (err.error instanceof Error)
    console.log('Client Side Error')
    else
    console.log('Server Side Error')
  })
}
}

