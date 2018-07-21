import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jsonFormSchema = 'empty';
  yourJsonSchema = 'empty';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('init');
    const exampleURL = `assets/kitchen.json`;
    this.http.get(exampleURL).subscribe((schema) => {
      console.log(schema);
      // this.jsonFormSchema = schema;
      // this.generateForm(this.jsonFormSchema);
    });
  }
  generateForm(schema: any): any {
    console.log(schema);
  }

  yourOnSubmitFn(e) {
    console.log(e);
  }
}
