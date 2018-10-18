import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

export interface Billet {  
  data: Array<number>;  
  label: string;  
}  
export interface Candidate {  
  candidateInterview: Billet[];  
  chartLabels: string[];  
}  


@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public candidates: Candidate;  
  public chartLegend: boolean = true;  
  public chartType: string = 'bar';
      
  public chartOptions: any = {  
        responsive: true,  
        legend: {  
            position: 'bottom'  
        }  
    };  
  
    constructor(private http: Http) {  
        http.get('../../assets/pmo.json').subscribe(result => { 
          console.log(result.json());
          this.candidates = result.json() as Candidate;  
        }, error => console.error(error));  
    }  
 
  ngOnInit() {
  }

}
