import { Injectable } from '@angular/core';
import { Empresa } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {


private empresas: Map<string, Empresa> = new Map<string, Empresa>();

  constructor() { }

public getEmpresas(){
  return this.empresas;
}

public getEmpresaBy(key: string){
  return this.empresas.get(key)
}

public setEmpresa (empresa: Empresa){
  this.empresas.set(empresa.codigo, empresa);
}

public deleteEmpresa(key: string) {
  this.empresas.delete(key);
}

}
