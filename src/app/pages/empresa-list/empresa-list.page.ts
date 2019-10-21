import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/models';
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.page.html',
  styleUrls: ['./empresa-list.page.scss'],
})
export class EmpresaListPage implements OnInit {

  public empresas: Map<string, Empresa>

  constructor(
    private srv: EmpresaService
  ) { }

  ngOnInit() {
    this.empresas = this.srv.getEmpresas()
  }

  delete(empresa: Empresa){
    this.srv.deleteEmpresa(empresa.codigo)
  }

}
