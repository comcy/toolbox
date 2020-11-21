import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { StorageListComponent } from './components/storage-list/storage-list.component';


@NgModule({
  declarations: [StorageListComponent],
  imports: [
    CommonModule,
    StorageRoutingModule
  ]
})
export class StorageModule { }
