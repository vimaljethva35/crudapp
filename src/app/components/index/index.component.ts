import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent {
  public data: string
  constructor() {
    this.data = "I am from index component"
  }

}
