import { Component } from '@angular/core';
import { SafAlert, SafAnchor, SafButton } from '@saffron/core-components';


SafButton();
SafAlert();
SafAnchor();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'sandbox-uxe-idt';
}
