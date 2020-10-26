import { Component, OnInit } from '@angular/core';
import { Email } from '../models/email.model';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  emails: Email[] = [];

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emails = this.emailService.getEmails();
  }

}
