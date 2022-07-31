import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DynamicService } from 'src/app/services/dynamic.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-api-usuario',
  templateUrl: './api-usuario.component.html',
  styleUrls: ['./api-usuario.component.css']
})
export class ApiUsuarioComponent implements OnInit {

  baseUrl = environment.baseUrl;

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
              message: "No se encontraron usuarios para consultar"
            },
            {
              statusCode: 200,
              error: false,
              message: "Se consultaron los usuarios exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar consultar los usuarios."
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
              message: "No se encontraron usuarios para consultar"
            },
            {
              statusCode: 200,
              error: false,
              message: "Se consultaron los usuarios exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar consultar los usuarios."
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
              message: "No se encontró el usuario para actualizar."
            },
            {
              statusCode: 200,
              error: false,
              message: "Se actualizó el usuario exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar actualizar el usuario."
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
              message: "No se encontró el usuario a eliminar."
            },
            {
              statusCode: 200,
              error: true,
              message: "Se eliminó el usuario exitosamente"
            },
            {
              statusCode: 500,
              error: true,
              message: "Error al intentar eliminar el usuario."
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
