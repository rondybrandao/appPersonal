import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  dataAluno
  listAlunos
  avaliacaoAluno: any[] = []

  constructor(
    private db: AngularFireDatabase
  ) { 
    
  }
  getAlunos(key) {
    console.log(key)
    return new Promise((resolve, reject) => {
      this.db.list('aluno/'+key).snapshotChanges().subscribe(dadosAluno => {
        this.dataAluno = []
        console.log(dadosAluno)
        // dadosAluno.forEach(item => {
        //   if(item){
        //     console.log(item.payload.val())
        //     this.dataAluno.push(item.payload.val())
        //   }
        // })
        resolve(dadosAluno)
        
      })
    })
  }

  getDicas(aluno){
    console.log(aluno)
    return new Promise((resolve, reject) => {
      this.db.list('aluno/'+aluno).snapshotChanges().subscribe(listAlunos => {
        this.listAlunos = []
        console.log(listAlunos)
        // listAlunos.forEach(item => {
        //   if(item){
        //     this.listAlunos.push(item.payload.val())
        //   }
        // })
        resolve(listAlunos)
        
      })
    })
  }

  getAvaliacaoInicio(key) {
    return new Promise((resolve, reject) => {
      this.db.list('avaliacao/teste/2019/Agosto').snapshotChanges().subscribe(avaliacaoAluno => {
        console.log(avaliacaoAluno)
        // avaliacaoAluno.forEach(item => {
        //   console.log(item.payload.val())
        //   this.avaliacaoAluno.push(item.payload.val())
        // })
        resolve(avaliacaoAluno)
      })
      
    })
  }
}

export const snapshotToObject = snapshot => {
  let item = snapshot;
  console.log(item.nome)
  let i = item.nome
  
  return item
}

