import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchInput: String = '';
  companies: any;
  p: number = 1;

  constructor(private searchServ: SearchServiceService) { }

  ngOnInit(): void {
  }

  searchResult() {
    this.searchServ.searchCompany(this.searchInput).subscribe((res: any) => {
      //console.log('search response: '+res?.items[0]?.company_number);

      if(res?.items?.length) this.companies = [...res?.items];
      else this.companies = undefined;
    })
  }

  goToLink(url: string) {
    console.log(url);
    window.open(url);
    //http://localhost:4200/company/OE021005
  }

}
