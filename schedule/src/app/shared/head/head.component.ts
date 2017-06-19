import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  profile = "assets/images/cover.jpg";//head logo
  logo  = "assets/images/profile.jpg";//logo
  constructor() { }

  ngOnInit() {
  }

}
