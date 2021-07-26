import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: User | undefined

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.userService.loadUser(this.activatedRoute.snapshot.params.id).subscribe(user => this.user = user)
    this.activatedRoute.params.pipe(
      tap(() => this.user = undefined),
      switchMap(({ id }) => this.userService.loadUser(id))
    ).subscribe(
      user => this.user = user
    )
  }

}
