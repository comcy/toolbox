import { Component, OnInit } from '@angular/core';
import { DesktopAuthService } from '../auth/desktop-auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MPM - Toolbox';

  constructor(private authService: DesktopAuthService) {
  }

  ngOnInit() {
    this.authService.doLogin();
  }

}
