import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Angular将会在创建MessagesComponent的实例时把MessageService的实例注入到这个属性中
  // 这个messageService属性必须是公共属性，因为你将会在模板中绑定到它。
  // Angular只会绑定到组件的公共属性
  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
  }

}
