import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface UrlParam {
  name: string;
  value: string;
}

@Component({
  templateUrl: './data-destination.component.html',
})
export class DataDestinationComponent implements OnInit {
  public params: UrlParam[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.params = [];
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      Object.keys(params).forEach((key) => {
        this.params.push({ name: key, value: params[key] });
      });
    });
    console.log(this.params);
  }
}
