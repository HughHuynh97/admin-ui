import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Chart,registerables} from "chart.js";
Chart.register(...registerables);

@Component({
  selector: 'app-analytic',
  templateUrl: './system-monitoring.component.html',
  styleUrls: ['./system-monitoring.component.scss']
})
export class SystemMonitoringComponent implements OnInit, AfterViewInit {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  constructor() {
  }

  ngAfterViewInit() {
    console.log(this.mychart?.nativeElement.value);
    this.canvas = this.mychart?.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    if (this.mychart) {
      new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: ['Task New', 'Task InProgress', 'Task Done', 'Task Failed'],
          datasets: [{
            label: 'List Tasks',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  ngOnInit(): void {
  }

}
