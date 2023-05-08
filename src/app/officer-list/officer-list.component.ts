import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.scss']
})
export class OfficerListComponent implements OnInit {

  id: number = 0;
  cmpName: String = '';
  officersList: any;
  constructor(private route: ActivatedRoute, private searchServ: SearchServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.cmpName = this.route.snapshot.params.comp;
    console.log('id: '+this.id);
    console.log('id: '+this.cmpName);
    this.searchServ.searchOfficers(this.id.toString()).subscribe((res: any) => {
      console.log('officers: '+res);
      this.officersList = [...res?.items];
    })
  }

}
