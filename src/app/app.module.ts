import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LocaleService } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxDaterangepickerMd.forRoot()
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
