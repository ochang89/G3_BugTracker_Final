import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  url="./assets/picture.jpg";
  userId!: number;
  user?: User
  constructor(private route: ActivatedRoute, private employeService: UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.user = new User();
    this.employeService.getUserById(this.userId).subscribe( data => {
      this.user = data;
    });
  }
}
