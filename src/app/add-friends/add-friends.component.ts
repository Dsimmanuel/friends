import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  friend={
    name:"",
    friendName:"",
    friendNickName:"",
    DescribeYourFriend:""
  }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  AddFriend(){
    this.api.addfriend(this.friend).subscribe(
      (data)=>{
        alert("success");
      }
    )
  }

}
