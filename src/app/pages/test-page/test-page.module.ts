import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestComponentComponent } from 'src/app/shared/components/test-component/test-component.component';
import { TestPageRoutingModule } from './test-page-routing.module';

@NgModule({
  declarations: [
    TestPageComponent,

    TestComponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestPageRoutingModule
  ],
})
export class TestPageModule {}
