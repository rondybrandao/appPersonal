import { ConfigService } from './../services/config.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalImageProgressPage } from '../modal-image-progress/modal-image-progress.page';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit, OnInit {
  @ViewChild('chartDoughnutLucroMes') chartDoughnutLucroMes
  doughnuLucroMes: any;

  userkey
  images = []
  grid = true
  //dados do usuario
  nome
  altura
  peso
  imc
  gordura

  dica
  titulo

  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false
  }

  constructor(
    public modalController: ModalController,
    public configService: ConfigService,
    private route: ActivatedRoute,) 
    {
      
      this.userkey = this.route.snapshot.paramMap.get('aluno')
      console.log(this.userkey)
    }

  ngOnInit() {
    this.getUsuario()
    this.getAvaliacao()
    
  }
  ngAfterViewInit(): void {
    
    //this.showDoughnutLucroMes()
  }

  openPreview(img){
    this.modalController.create({
      component: ModalImageProgressPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }
  close() {
    this.modalController.dismiss();
  }

  getUsuario() {
    console.log(this.userkey)
    this.configService.getAlunos(this.userkey).then((res) => {
      console.log(res)
      console.log(res[2].payload.val().dica)
      this.dica = res[2].payload.val().dica
      this.titulo = res[2].payload.val().titulo
    })
  }

  getAvaliacao() {
    this.configService.getAvaliacaoInicio(this.userkey).then((res) => {
      console.log(res)
      
      console.log()
      this.peso = res[13].payload.node_.value_
      this.imc = res[8].payload.node_.value_
      this.gordura = res[6].payload.node_.value_

      console.log(this.peso, this.imc, this.gordura)
    })
  }

  //grafico dounuts
  // showDoughnutLucroMes(){
  //   this.doughnuLucroMes = new Chart(this.chartDoughnutLucroMes.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       datasets: [{
  //         data: [50 , 15, 27, 15, 25, 10
  //         ],
  //         backgroundColor: [
  //           'rgba(182, 46, 235, 1.0)',
  //           'rgba(101, 83, 50, 1.0)',
  //           'rgba(255, 25, 0, 0.1)',
  //           'rgba(255, 255, 0, 1)',
  //           'rgba(51,  153, 0, 1)',
  //           'rgba(255, 102, 0, 1)'
  //         ],
  //         label: 'partes do corpo'
  //       }],
  //       labels: [
  //         'Gluteo',
  //         'Costa',
  //         'Peito',
  //         'Abdomen',
  //         'Pernas',
  //         'Cardio'
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'julho'
  //       },
  //       animation: {
  //         animateScale: true,
  //         animateRotate: true
  //       }
  //     }
  //   });
  // }

}
