import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  item_id: String = ''
  item: Object;
  files: File[] = [];
  constructor(public globalService: GlobalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.item_id = this.route.snapshot.paramMap.get("id")
    this.item = this.globalService.items.filter(item => item['id'] == this.item_id)[0]
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
