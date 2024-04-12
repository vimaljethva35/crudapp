import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
selector: 'app-read',
templateUrl: './read.component.html',
styles: [
]
})
export class ReadComponent {
public data: any
public loading: string
constructor(private _service: DashboardService) {
//this.data = "I am from read component"
this.loading = ""
}
ngOnInit() {
this.loading = "Loading"
this._service.getProducts().subscribe(res => {
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