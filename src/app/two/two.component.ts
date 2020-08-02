import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  @Input() ngxLazyLoadModuleData: any;
  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

}
