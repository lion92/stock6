import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chartvente',
  templateUrl: './chartvente.component.html',
  styleUrls: ['./chartvente.component.css']
})
export class ChartventeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
new Chart("myChart", {
  type: 'line',
  data: {
    labels:["0","1","2","3","4","5","6","7","8","9"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor:"red",
      tension: 0.1
    }]

  }

})
  }
}
