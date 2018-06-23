import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-par-q',
  templateUrl: './par-q.component.html',
  styleUrls: ['./par-q.component.scss']
})
export class ParQComponent implements OnInit {

  showPart2 = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event): void {
    this.showPart2 = event.value === 'yes' ? event.value : this.showPart2;
  }

}
