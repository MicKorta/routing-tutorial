import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
})
export class DataSourceComponent {

  constructor(private router: Router) {
    // NOOP
  }

  public navigatePassingData(): void {
    this.router.navigate(['/data-destination'], { queryParams: { firstname: 'Bruce', lastname: 'Wayne' }});
  }
}
