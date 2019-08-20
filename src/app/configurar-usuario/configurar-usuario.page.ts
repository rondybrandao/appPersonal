import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

export class User {
  key: string
}

@Component({
  selector: 'app-configurar-usuario',
  templateUrl: './configurar-usuario.page.html',
  styleUrls: ['./configurar-usuario.page.scss'],
})
export class ConfigurarUsuarioPage implements OnInit {
  public user:User = new User();
  constructor(
    public configService: ConfigService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  getUsuario(){
    if(this.user.key) {
      this.router.navigate(['home/tabs/tab1', {aluno:this.user.key}])
    }
    
  }

}
