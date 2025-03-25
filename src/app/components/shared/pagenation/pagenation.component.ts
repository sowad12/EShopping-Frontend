import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent {
 
  public pageSize = 5;
  public buttonCount = 5;
  public sizes = [10, 20, 50,100];
  public skip = 0;
  public total = 100;

  public onPageChange(e: any): void {
    this.skip = e.skip;
    this.pageSize = e.take;
  }
  
}
