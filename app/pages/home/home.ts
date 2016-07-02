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
          placeholder: 'Stop Number',
          type: 'number'
        }, {
          name: 'route',
          placeholder: 'Bus Route',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        }, {
          text: 'Save',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });

    this.navController.present(prompt);

  }
}
