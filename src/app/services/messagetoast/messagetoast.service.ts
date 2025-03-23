import {inject, Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessagetoastService {
  messageService = inject(MessageService);

  constructor() { }

  showSuccess(content:string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: content });
    console.log("showSuccess:"+content)
  }

  showInfo(content:string) {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: content });
    console.log("showInfo:"+content)

  }

  showWarn(content:string) {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: content });
    console.log("showWarn:"+content)

  }

  showError(content:string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: content });
    console.log("showError:"+content)

  }

  showContrast(content:string) {
    this.messageService.add({ severity: 'contrast', summary: 'Error', detail: content });
    console.log("showContrast:"+content)
  }

  showSecondary(content:string) {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: content });
    console.log("showSecondary:"+content)
  }
}
