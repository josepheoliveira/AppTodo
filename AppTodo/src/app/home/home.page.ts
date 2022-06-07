import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',

  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCrtl: AlertController, private toastCtrl: ToastController) {}


  async adicionaTarefa(novaTarefa: string) {
    if (novaTarefa.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, digite a tarefa!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }

  async showAdd(){
    if (novaTarefa).trim().lenght < 1)
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'O que você deseja Fazer?',
      inputs: [
        {
          name: 'tarefa1',
          type: 'text',
          placeholder: 'Digite o que desea fazer.',
        },
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelado com sucesso!');
        },
      },
      {
        text: 'Adicionar',
        handler: (form) => {
          history.adicionarTarefa(form.tarefa1);
        },
      },
    ],
    });
    await alert.present();
}


  }


}


