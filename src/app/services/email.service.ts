import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getEmails(): Email[] {
    return [
      {
        containsAttachments: false,
        date: '2019/12/31',
        from: 'aaa@example.com',
        subject: '[ HR-888 ] Notice of official announcement',
        to: 'zzz.zzz@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        from: 'bbb.bbbb@example.com',
        subject: '[web:333]"Web Contact!"',
        to: 'yyy@example.com'
      },
      {
        containsAttachments: true,
        date: '2019/12/31',
        extraRecipients: 1,
        from: 'ccc@example.com',
        subject: 'Happy New Year! Greetings for the New Year.',
        to: 'xxx@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        extraRecipients: 1,
        from: 'ddd.dddd@example.com',
        subject: '[HR-887(Revised: Office Expansion Project Team)] Notice of official room expansion',
        to: 'vvv.vvv@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        extraRecipients: 2,
        from: 'eee@example.com',
        subject: '[Github] Logout page',
        to: 'sss@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        from: 'fff.ffff@example.com',
        subject: '[dev] Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5',
        to: 'qqq.qqq@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        from: 'ggg@example.com',
        subject: 'Re: [Github] Brush-up on loading animation',
        to: 'ppp@example.com'
      },
      {
        containsAttachments: true,
        date: '2019/12/31',
        from: 'hhh.hhh@example.com',
        subject: 'Workplace Summary for sample, Inc.: Jun 2 - Jun 9',
        to: 'ooo.ooo@example.com'
      },
      {
        containsAttachments: true,
        date: '2019/12/31',
        from: 'iii@example.com',
        subject: 'I love you',
        to: 'nnn@example.com'
      },
      {
        containsAttachments: false,
        date: '2019/12/31',
        from: 'Pablo-Diego@example.com',
        subject: '[info:888] ABC EQUIPMENT COMPANY',
        to: 'Pablo-Diego-Jose-Francisco@example.com'
      }
    ];
  }
}
