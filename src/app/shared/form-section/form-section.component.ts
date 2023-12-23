import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.css'
})
export class FormSectionComponent implements OnInit {
  @Input({required: true}) title: string = '';
  @Input({required: true}) helpText: string = '';
  @Input() titleStyles:string = '';
  @Input() helpTextStyles: string = '';
  @Input() sameTextStylesAsTitle: boolean = true;

  ngOnInit(): void {
    if (this.sameTextStylesAsTitle) {
      this.helpTextStyles = this.titleStyles;
    }
  }
}
