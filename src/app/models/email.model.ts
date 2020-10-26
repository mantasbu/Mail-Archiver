export interface Email {
    containsAttachments: boolean;
    date: string;
    from: string;
    extraRecipients?: number;
    subject: string;
    to: string;
}
