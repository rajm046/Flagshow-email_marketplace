import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/Services/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to: "",
    subject:"",
    message:""
  }

  constructor(private email:EmailService) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    console.log(this.data);
    this.email.sendEmail(this.data).subscribe(
    response=>{
      console.log(response);
    },
    request=>{
      console.log(request);
    }
    )
  }

}
