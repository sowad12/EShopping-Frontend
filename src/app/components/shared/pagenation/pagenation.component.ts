import { Component, Input, OnInit, ViewChild,SimpleChanges, Output, EventEmitter  } from "@angular/core";
import { IPagenation } from "src/app/models/common/pagenation.model";

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent {
  
  @Input()total:number=0;
  @Input()limit: number=0;
  @Input()offset: number=0;
  @Output() pageChanged= new EventEmitter<IPagenation>();

  public buttonCount = 5;
  public sizes = [10, 20, 50,100];
  ngOnChanges(changes: SimpleChanges): void {
    // This will log the @Input() properties whenever they change
    // console.log('ngOnChanges:', changes);
    // console.log('Total:', this.total);
    // console.log('Limit:', this.limit);
  }

  public onPageChange(e: any): void {
     this.offset = e.skip;
     this.limit = e.take;
    this.pageChanged.emit({offset:e.skip,limit:e.take});
  }
}
