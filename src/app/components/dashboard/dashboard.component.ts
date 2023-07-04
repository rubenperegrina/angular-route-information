import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() queryParams?: string;
  @Input('id') dashboardId?: string;
  @Input('caption') pageCaption?: string;
  @Input('searchData') resolvedData?: any;
  
  ngOnInit(): void {
    console.log("🚀 ~ file: dashboard.component.ts:10 ~ DashboardComponent ~ queryParams:", this.queryParams)
    console.log("🚀 ~ file: dashboard.component.ts:11 ~ DashboardComponent ~ dashboardId:", this.dashboardId)
    console.log("🚀 ~ file: dashboard.component.ts:12 ~ DashboardComponent ~ pageCaption:", this.pageCaption)
    console.log("🚀 ~ file: dashboard.component.ts:14 ~ DashboardComponent ~ resolvedData:", this.resolvedData)
  }
}
