import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fws-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() loading: boolean;
  constructor() {}

  ngOnInit() {}
}
