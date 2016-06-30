import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
  }

  addStop() {
    let prompt = Alert.create({
      title: 'Add Stop',
      message: 'Add a new stop to track.',
      inputs: [
        {
          name: 'stopno',
          placeholder: 'Stop Number'
        }, {
          name: 'route',
          placeholder: 'Bus Route'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

    this.navController.present(prompt);

  }
}
