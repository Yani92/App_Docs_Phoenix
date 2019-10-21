import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/models';
import { EmpresaService } from '../../services/empresa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const { Camera, Toast } = Plugins

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.page.html',
  styleUrls: ['./empresa-form.page.scss'],
})
export class EmpresaFormPage implements OnInit {


  public empresa: Empresa ={
    
  };

  public key: string

  public titulo: string = "Ingresar nueva Empresa"

  constructor(
    private srv: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.key = this.route.snapshot.params ['key']

    if (this.key){
      this.titulo = "Editar Empresa"
      this.empresa = this.srv.getEmpresaBy (this.key)
    }
  }

  async tomarFoto() {
    const options = {
      quality: 90,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    }

    const imagen = await Camera.getPhoto(options);

    //this.empresa.urlFoto = imagen.webPath;
  }

  guardar(){
    if(this.key){

    }else{
      this.srv.setEmpresa(this.empresa)
    }

    this.router.navigate(['/empresa-list'])
  }

}
