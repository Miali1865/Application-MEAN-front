import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-img-header',
  imports: [],
  templateUrl: './img-header.component.html',
  standalone: true,
  styleUrl: './img-header.component.css'
})
export class ImgHeaderComponent {
  @Input() img_src!: string
  @Input({required:true}) titre!: string
  @Input() description!: string

}
