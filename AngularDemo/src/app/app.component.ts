import { Component } from '@angular/core'

@Component({
    selector: 'main-body',
    template: `<h1>Hello {{names}} 1</h1>
                <employee-body></employee-body>
                `
})
export class AppComponent {
    names = 'Angular 2!';
}
