import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  formMessage: FormGroup = new FormGroup({
    message: new FormControl('', [Validators.required, Validators.minLength(25)]),
    img: new FormControl('', [Validators.required, Validators.minLength(25)]),
    type: new FormControl('', [Validators.nullValidator]),
    class: new FormControl('', [Validators.required, Validators.nullValidator])
  })

  constructor() { }

  submit(){

    switch (this.formMessage.get('type')?.value) {
      case '0':
        this.formMessage.controls['class'].setValue(['alert', 'alert-danger']);
        this.formMessage.controls['img'].setValue('https://www.freeiconspng.com/thumbs/error-icon/sign-red-error-icon-1.png');
        break;
        case '1':
          this.formMessage.controls['class'].setValue(['alert', 'alert-warning']);
          this.formMessage.controls['img'].setValue('https://www.freeiconspng.com/thumbs/warning-icon-png/sign-warning-icon-png-7.png');
          break;
          case '2':
            this.formMessage.controls['class'].setValue(['alert', 'alert-info']);
            this.formMessage.controls['img'].setValue('https://www.freeiconspng.com/uploads/fichier-info-icon-002-svg---wikip-dia-28.png');
            break;
            case '3':
              this.formMessage.controls['class'].setValue(['alert', 'alert-success']);
              this.formMessage.controls['img'].setValue('https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png');
        break;

      default:
        this.formMessage.controls['class'].setValue(['alert', 'alert-primary']);
        break;
    }
    console.log(this.formMessage);
  }

}
