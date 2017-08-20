import { Component } from '@angular/core'

@Component({
    selector: 'employee-body',
    templateUrl: 'app/Employee/employee.component.html'
})

export class EmployeeComponent {
    firstName: string = 'Jaber';
    lastName: string = 'Kibria';
}