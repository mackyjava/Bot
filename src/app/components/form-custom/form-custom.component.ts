import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomBotService } from 'src/app/services/custom-bot.service';

@Component({
  selector: 'app-form-custom',
  templateUrl: './form-custom.component.html',
  styleUrls: ['./form-custom.component.scss']
})
export class FormCustomComponent implements OnInit {
  @Output() styles = new EventEmitter<object>();
  styleForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sS: CustomBotService) { }

  ngOnInit() {
    this.styleForm = this.fb.group({
      navColor: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
      // tslint:disable-next-line:max-line-length
      url: ['', Validators.pattern(new RegExp(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/))],
      fontColor: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
      footColor: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
      fontSize: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
      bubbleUser: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
      bubbleBot: ['', Validators.pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))]
    });
  }

  saveStyles(values) {
    this.sS.setStyles(values);
  }

}
