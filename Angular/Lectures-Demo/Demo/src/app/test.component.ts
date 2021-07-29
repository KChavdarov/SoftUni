import { Component } from '@angular/core'

@Component({
    selector: 'app-test',
    template: `<p>Created Manually</p>`,
    styles: ['p { background-color: red;}']
})

export class TestComponent {
    content = 'test';
};