import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRelease } from 'app/models/irelease';

@Component({
  selector: 'app-traffic-views',
  templateUrl: './views.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewsComponent {

  @Input()
  public data;
  @Input()
  public count;
  @Input()
  public uniques;
  constructor() {
  }
}

