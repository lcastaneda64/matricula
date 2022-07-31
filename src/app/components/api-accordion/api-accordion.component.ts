import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DynamicService } from 'src/app/services/dynamic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-api-accordion',
  templateUrl: './api-accordion.component.html',
  styleUrls: ['./api-accordion.component.css']
})
export class ApiAccordionComponent implements OnInit {

  baseUrl = environment.baseUrl;
  @Input() apis: any[] = [];

  constructor(private dynamicService: DynamicService) { }

  ngOnInit(): void {
  }

  public async submitRequest(apiName: string, method: any): Promise<void> {
    const requestData: any[] =[];
    let i = 0;
    for (const key in method.form) {
      requestData[i] = {};
      requestData[i].type = key.split(":")[2];
      requestData[i].value = method.form[key];
      requestData[i][key.split(":")[3]] = method.form[key];
      i++;
    }
    method.dynamicUrl = `${this.baseUrl}/${apiName}`;

    const queryParams = requestData.filter((r: any) => r.type === 'query');
    const bodyParams = requestData.filter((r: any) => r.type === 'body');
    const params = requestData.filter((r: any) => r.type === 'params');

    let query: any = {};
    for (const queryParam of queryParams) {
      for (const key in queryParam) {
        if(key !== 'value' && key !== 'type') { 
          query[key] = queryParam[key];
        }
        
      }
    }

    let body: any = {};
    for (const bodyParam of bodyParams) {
      for (const key in bodyParam) {
        if(key !== 'value' && key !== 'type') { 
          body[key] = bodyParam[key];
        }
        
      }
    }

    for (const param of params) {
      method.dynamicUrl = `${method.dynamicUrl}/${param.value}`
    }
    try {

    switch (method.name) {
      case "GET":
        method.returnData = await lastValueFrom(this.dynamicService.getData(method.dynamicUrl, query));
        break;
      case "POST":
        method.returnData = await lastValueFrom(this.dynamicService.postData(method.dynamicUrl, body, query));
        break;
      case "PUT":
        method.returnData = await lastValueFrom(this.dynamicService.putData(method.dynamicUrl, body, query));
        break;
      case "DELETE":
        method.returnData = await lastValueFrom(this.dynamicService.deleteData(method.dynamicUrl, query));
        break;
      default:
        break;
    }

    } catch (err: any) {
      method.returnData = err.error;
    }
  }

}
