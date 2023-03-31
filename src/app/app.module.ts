import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    DialogModule,
    BrowserModule,
    FullCalendarModule, // import the FullCalendar module! will make the FullCalendar component available
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
