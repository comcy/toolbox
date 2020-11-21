import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { AuthBaseService } from '../auth/auth-base.service';

@Injectable({ providedIn: 'root' })
export class DesktopEventService {
  constructor(
    private electronService: ElectronService,
    private authBaseService: AuthBaseService,
  ) { }

  registerEvents() {
    this.electronService.ipcRenderer.on(
      'authEvent',
      (event: any, data: any) => this.authBaseService.checkAuth(data)));
  }
}