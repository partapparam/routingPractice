import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detail;

  constructor() { }

  ngOnInit(): void {
    console.log(this.detail);
  }

}
