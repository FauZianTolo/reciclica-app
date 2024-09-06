import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent  implements OnInit {

  @Input() message: string= '';
  @Input() field: AbstractControl | null | undefined = null;
  @Input() error: string= '';
  @Input() fieldName: string = '';
  @Input() form: FormGroup | null = null;



  constructor() { }

  ngOnInit() {}

  shouldShowComponent(): boolean {
    if (this.form && this.fieldName) {
      const field = this.form.get(this.fieldName);
      return field?.touched && field?.errors?.[this.error];
    } else if (this.field) {
      return this.field.touched && this.field.errors?.[this.error];
    }
    return false;
  }

}
