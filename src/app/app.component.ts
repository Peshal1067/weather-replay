import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weather Replay';

  constructor( public dialog: MatDialog ) {}

  openDialog(): void {
    let dialog = this.dialog.open( AboutComponent );

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
