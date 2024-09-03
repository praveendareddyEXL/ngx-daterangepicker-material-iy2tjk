import { Component } from '@angular/core';
import { Moment } from 'moment';
import moment from 'moment';
import { LocaleConfig, LocaleService } from 'ngx-daterangepicker-material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ LocaleService ]
})

export class AppComponent {
  moment = moment;
  calendarLocale: LocaleConfig;
  ranges: any;
  calendarPlaceholder: string;
  selectedRange: null;
  minDate: Moment;
  maxDate: Moment;

  constructor() {
    this.calendarLocale = {
      customRangeLabel: 'Pick a date...',
      applyLabel: 'Apply',
      clearLabel: 'Clear',
      format: 'DD/MM/YYYY',
      daysOfWeek: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      firstDay: 1
    };
    
    this.ranges = {
      'Current day': [moment(), moment()],
      'Current week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
      'Next 2 days': [moment().add(1, 'days'), moment().add(2, 'days')],
      'Next 3 days': [moment().add(1, 'days'), moment().add(3, 'days')],
      'Next weekend': [this.getNextSaturday(), this.getNextSunday()]
    };

    this.calendarPlaceholder = 'All';

    this.minDate = moment();
    // this.maxDate = moment().clone().add(10, 'years');
  }


  private getNextSaturday() {
    const dayINeed = 6; // for Saturday
    const today = moment().isoWeekday();
    if (today <= dayINeed) {
      return moment().isoWeekday(dayINeed);
    } else {
      return moment().add(1, 'weeks').isoWeekday(dayINeed);
    }
  }

  private getNextSunday() {
    const dayINeed = 7; // for Sunday
    const today = moment().isoWeekday();
    if (today <= dayINeed) {
      return moment().isoWeekday(dayINeed);
    } else {
      return moment().add(1, 'weeks').isoWeekday(dayINeed);
    }
  }
}
