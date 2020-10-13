import { Component } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CardView } from '@nstudio/nativescript-cardview';

registerElement('CardView', () => CardView as any);

@Component({
    selector: 'ns-app',
    moduleId: module.id,
    templateUrl: './app.component.html'
})
export class AppComponent {}
