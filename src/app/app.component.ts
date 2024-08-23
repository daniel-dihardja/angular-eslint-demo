import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-eslint-demo';

  onClick() {
    console.log('click');
  }

  onMouseOver() {
    console.log('click');
  }

  onKeydown() {
    console.log('keydown');
  }
}
