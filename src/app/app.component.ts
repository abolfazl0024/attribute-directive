import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  imports: [FormsModule,HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'attribute-directive';
  searchText='';

}
