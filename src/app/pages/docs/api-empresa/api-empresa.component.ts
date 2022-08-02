import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-empresa',
  templateUrl: './api-empresa.component.html',
  styleUrls: ['./api-empresa.component.css']
})
export class ApiEmpresaComponent implements OnInit {

  baseUrl = environment.baseUrl;
  apisDocumentation: any = [
    {
      name: "empresa",
      methods: [
        {
          name: "GET",
          url: this.baseUrl,
          params: [{
            name: "matricula",
            exampleValue: "UTM000000",
            type: "query",
            required: true
          },
          {
            name: "termino",
            exampleValue: "google",
            type: "query",
            required: false
          }],
          bodyParams: [],
          responses: [{
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
              statusCode: 404,
              error: true,
              message: "No se encontraron empresas para consultar"
            },
            {
              statusCode: 200,
              error: false,
              message: "Se consultaron las empresas exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar consultar las empresas."
            }],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        },
        {
          name: "GET",
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
          responses: [{
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
              statusCode: 404,
              error: true,
              message: "No se encontraron empresas para consultar"
            },
            {
              statusCode: 200,
              error: false,
              message: "Se consultaron las empresas exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar consultar las empresas."
            }],
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
            name: "strRazonSocial",
            fieldName: "Razón social",
            dataType: "string",
            required: true
          },
          {
            name: "strRFC",
            fieldName: "RFC",
            dataType: "string",
            required: true
          },
          {
            name: "strDireccion",
            fieldName: "Dirección",
            dataType: "string",
            required: false
          },
          {
            name: "strUrlLogo",
            fieldName: "URL Logo",
            dataType: "string",
            required: true
          },
          {
            name: "strPais",
            fieldName: "País",
            dataType: "string",
            required: false
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
              message: "Empresa registrada exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al registrar la empresa"
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
            fieldName: "Nombre",
            dataType: "string",
            required: true
          },
          {
            name: "strRazonSocial",
            fieldName: "Razón social",
            dataType: "string",
            required: true
          },
          {
            name: "strRFC",
            fieldName: "RFC",
            dataType: "string",
            required: true
          },
          {
            name: "strDireccion",
            fieldName: "Dirección",
            dataType: "string",
            required: false
          },
          {
            name: "strUrlLogo",
            fieldName: "URL Logo",
            dataType: "string",
            required: true
          },
          {
            name: "strPais",
            fieldName: "País",
            dataType: "string",
            required: false
          }],
          responses: [{
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
              message: "No se recibió un identificador válido."
            },
            {
              statusCode: 404,
              error: true,
              message: "No se encontró la empresa para actualizar."
            },
            {
              statusCode: 200,
              error: false,
              message: "Se actualizó la empresa exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar actualizar la empresa."
            }],
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
          responses: [{
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
              message: "No se recibió un identificador válido."
            },
            {
              statusCode: 404,
              error: true,
              message: "No se encontró la empresa a eliminar."
            },
            {
              statusCode: 200,
              error: true,
              message: "Se eliminó la empresa exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar eliminar la empresa."
            },],
          form: {},
          returnData: {},
          dynamicUrl: undefined
        }]
    }
  ]

  constructor() { }
  
  ngOnInit(): void {
  }

}
