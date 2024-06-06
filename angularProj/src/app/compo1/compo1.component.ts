import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
  upjv: string ="http://www.u-picardie.fr";
  text2: string = "";
  changeText(e: Event){
  this.text2 = this.text2+(e.target as HTMLInputElement).value;
  (e.target as HTMLInputElement).value = "";
}
}
