import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/models/users';
import { UsersService } from 'src/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  users$: any;
  displayedColumns: string[] = ['id', 'username', 'email', 'roles', 'modify'];

  constructor(
    private usersService: UsersService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((res) => {
      this.users$ = res;
    });
  }
  deleteUser(id: number): void {
    this.usersService.deleteUser(id).subscribe(() => {
      location.reload();
    });
  }
  editUser(user: Users) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: user,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res.username.value);
      console.log(res.email.value);
      const body = {
        username: res.username.value,
        email: res.email.value,
      };

      this.usersService.updateUser(user.id!, body).subscribe(() => {
        location.reload();
      });
    });
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}
