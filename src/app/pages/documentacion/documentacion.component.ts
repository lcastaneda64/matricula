import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { DynamicService } from 'src/app/services/dynamic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  data  = {"msg":"Matrícula registrada exitosamente","status":200,"cont":{"matricula":{"strNombreAlumno":"sdfds","strMatricula":"UTM00000000","strCorreoInstitucional":"lcastand@utma.edu.mx","blnActivo":false,"_id":"62c283d61d1c190044ee3d19","created_at":"2022-07-04T06:08:22.736Z","updated_at":"2022-07-04T06:08:22.736Z","__v":0}}}

  baseUrl = environment.baseUrl;

  constructor(private dynamicService: DynamicService) { }

  apisDocumentation: any = [
    {
      name: "usuario",
      methods: [
        {
          name: "GET",
          url: this.baseUrl,
          params: [{
            name: "matricula",
            exampleValue: "UTM000000",
            type: "query",
            required: true
          }],
          bodyParams: [],
          responses: [],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        },
        {
          name: "POST",
          url: this.baseUrl,
          params: [{
            name: "matricula",
            exampleValue: "UTM000000",
            type: "query",
            required: true
          }],
          bodyParams: [{
            name: "strNombre",
            fieldName: "Nombre",
            dataType: "string",
            required: true
          },
          {
            name: "strPrimerApellido",
            fieldName: "Primer apellido",
            dataType: "string",
            required: true
          },
          {
            name: "strSegundoApellido",
            fieldName: "Segundo apellido",
            dataType: "string",
            required: false
          },
          {
            name: "nmbEdad",
            fieldName: "Edad",
            dataType: "number",
            required: true
          }],
          responses: [
            {
              statusCode: 400,
              error: true,
              message: "No se recibió una matrícula válida"
            },
            {
              statusCode: 404,
              error: true,
              message: "No se recibió una matrícula válida"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar consumir la API"
            },
            {
              statusCode: 400,
              error: true,
              message: "Error de validación de campos."
            },
            {
              statusCode: 200,
              error: false,
              message: "Usuario registrado exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al registrar el usuario"
            }
          ],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        },
        {
          name: "PUT",
          url: this.baseUrl,
          params: [{
            name: "matricula",
            exampleValue: "UTM000000",
            type: "query",
            required: true
          },
          {
            name: "id",
            exampleValue: "62bd3246cb9f1b6629349c16",
            type: "params",
            required: true
          }],
          bodyParams: [{
            name: "strNombre",
            exampleValue: "Nombre",
            dataType: "string",
            required: true
          },
          {
            name: "strPrimerApellido",
            exampleValue: "Primer apellido",
            dataType: "string",
            required: true
          },
          {
            name: "strSegundoApellido",
            exampleValue: "Segundo apellido",
            dataType: "string",
            required: false
          },
          {
            name: "nmbEdad",
            exampleValue: "Segundo apellido",
            dataType: "number",
            required: true
          }],
          responses: [],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        },
        {
          name: "DELETE",
          url: this.baseUrl,
          params: [{
            name: "matricula",
            exampleValue: "UTM000000",
            type: "query",
            required: true
          },
          {
            name: "id",
            exampleValue: "62bd3246cb9f1b6629349c16",
            type: "params",
            required: true
          }],
          bodyParams: [],
          responses: [],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        }]
    }
  ]

  ngOnInit(): void {
  }

  public async submitRequest(apiName: string, method: any): Promise<void> {

    console.log(method.form);
    
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

      console.log(method.dynamicUrl);
      console.log(query);
      console.log(body);
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

    console.log(method.returnData);
    

  }

}
