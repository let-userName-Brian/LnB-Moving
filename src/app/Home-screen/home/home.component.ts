import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'ToDos', cols: 2, rows: 1 },
          { title: 'Future Projects', cols: 2, rows: 1 },
          { title: 'Finaces Overview', cols: 2, rows: 1 },
          { title: 'Card 4', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'ToDos', cols: 2, rows: 1 },
        { title: 'Future Projects', cols: 1, rows: 1 },
        { title: 'Finaces Overview', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  navigateToMain(i: number) {
    console.log(i);
    let url = '';
    switch (i) {
      case 1:
        url = '/projects';
        break;
        case 2:
          url = '/finances';
          break;
          case 3:
            url = '/settings';
            break;
          }
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
