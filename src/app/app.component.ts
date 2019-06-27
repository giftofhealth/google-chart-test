import { Component, ViewChild } from '@angular/core';
import { ChartReadyEvent, ChartErrorEvent, ChartSelectEvent,
	 ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';

declare var $: any;
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public selectEvent: ChartSelectEvent;
    title = 'google-chart-test';
    chart_ready = false;
    public pieChart: GoogleChartInterface = {
	chartType: 'PieChart',
	dataTable: [
	    ['Task', 'Hours per Day'],
	    ['Work',     11],
	    ['Eat',      2],
	    ['Commute',  2],
	    ['Watch TV', 2],
	    ['Sleep',    7]
	],
	//opt_firstRowIsData: true,
	options: {'title': 'Tasks'},
    };

    public tableChart =  {
	chartType: 'Table',
	dataTable: [
	    ['Department', 'Revenues', 'Another column', 'ColorFormat'],
	    ['Shoes', 10700, -100, 100],
	    ['Sports', -15400, 25, 500],
	    ['Toys', 12500, 40, 800],
	    ['Electronics', -2100, 889, 1000],
	    ['Food', 22600, 78, 1100],
	    ['Art', 1100, 42, 400]
	],
	formatters: [
	    {
		columns: [1, 2],
		type: 'NumberFormat',
		options: {
		    prefix: '&euro;', negativeColor: 'red', negativeParens: true
		}
	    },
	    {
		columns: [3],
		type: 'ColorFormat',
		options: {
		    ranges: [
			{from: 100, to: 900, fromBgColor: 'green', toBgColor: 'yellow'}
		    ]
		}
	    }
	],
	options: {title: 'Countries', allowHtml: true}
    };
  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error("Error: " + event);
  }

  public select(event: ChartSelectEvent) {
      this.selectEvent = event;
  }

  public mouseOver(event: ChartMouseOverEvent) {
    console.log('ChartMouseOverEvent');
    console.log('bb: ' + JSON.stringify(event.boundingBox));
    console.log('pos: ' + JSON.stringify(event.position));
    console.log('type: ' + JSON.stringify(event.columnType));
    console.log('label: ' + JSON.stringify(event.columnLabel));
    console.log('value: ' + JSON.stringify(event.value));
  }

  public mouseOut(event: ChartMouseOutEvent) {
    console.log('ChartMouseOutEvent');
    console.log('bb: ' + JSON.stringify(event.boundingBox));
    console.log('pos: ' + JSON.stringify(event.position));
    console.log('type: ' + JSON.stringify(event.columnType));
    console.log('label: ' + JSON.stringify(event.columnLabel));
    console.log('value: ' + JSON.stringify(event.value));
  }

}
