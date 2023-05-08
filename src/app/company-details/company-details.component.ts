import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  id: number = 0;
  comp: String = '';
  companyDetail: any;
  constructor(private route: ActivatedRoute, private searchServ: SearchServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.comp = this.route.snapshot.params.comp;
    console.log(this.id);
    console.log(this.comp);
    this.searchServ.searchCompany(this.comp).subscribe((res: any) => {
      //console.log('search response: '+res?.items[0]?.company_number);

      this.companyDetail = res?.items.filter((cmp: any) => cmp?.company_number == this.id)[0];
      console.log('companyDetail: '+this.companyDetail);
    })
  }

  officersList(name: String, id: number) {
    this.router.navigate(['officers', name,  id]);
  }

}
