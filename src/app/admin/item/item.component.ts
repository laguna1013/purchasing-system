import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public globalService: GlobalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.globalService.menu = 'item';
  }

  status_change = item => {
    item.status = !item.status;
  }

  edit_item = id => {
    this.router.navigate(['/item/edit', id])
  }
}
