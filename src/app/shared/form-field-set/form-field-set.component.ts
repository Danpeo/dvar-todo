import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form-field-set',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './form-field-set.component.html',
  styleUrl: './form-field-set.component.css'
})
export class FormFieldSetComponent implements OnInit {
  @Input({required: true}) label: string = '';
  @Input({required: true}) labelFor: string = '';
  @Input() helpText: string = '';
  @Input() labelTextStyles: string = '';
  @Input() helpTextStyles: string = '';
  @Input() sameStylesAsLabel: boolean = true;


  helpTextId: string = `${this.labelFor}Help`;

  ngOnInit(): void {
    if (this.sameStylesAsLabel){
      this.helpTextStyles = this.labelTextStyles;
    }
  }
}
