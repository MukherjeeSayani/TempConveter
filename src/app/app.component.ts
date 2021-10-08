import {​​​​​​​​ Component }​​​​​​​​ from'@angular/core';

@Component({​​​​​​​​
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls: ['./app.component.scss']
}​​​​​​​​)
export class AppComponent {​​​​​​​​
title = 'exam-app';
selected:any;
degree:number=0;
result:number=0;
calculateTemp(data:any){​​​​​​​​
this.degree=data;
if(this.selected=="Farenheit")
    {​​​​​​​​
data=parseFloat(data);
this.result=(data-32)/1.8;
    }​​​​​​​​
if(this.selected=="Kelvin"){​​​​​​​​
data=parseFloat(data);
this.result=(data-273.15);

    }​​​​​​​​
  }​​​​​​​​
}​​​​​​​​

