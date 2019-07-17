import { Component } from '@angular/core';
import { CardView } from '@nstudio/nativescript-cardview';
import { registerElement } from 'nativescript-angular';

registerElement('CardView', () => CardView as any);

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './app.component.html'
})
export class AppComponent {}
