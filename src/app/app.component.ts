import { AuthService } from 'src/app/shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jayFire1';
  titleVariable: any
   constructor(private auth:AuthService){
   }

   ngOnInit(): void {
    this.titleVariable = this.auth.getLocal();
    console.log(this.titleVariable)
  }

}
