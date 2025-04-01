import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-description',
  imports: [],
  templateUrl: './title-description.component.html',
  standalone: true,
  styleUrl: './title-description.component.css'
})
export class TitleDescriptionComponent {
  @Input({required:true}) titre!: string
  @Input() description!: string

}
