import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Add this

@Component({
  standalone: true, // ✅ Standalone component
  selector: 'app-home',
  imports: [RouterModule], // ✅ Add this
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
