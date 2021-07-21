import { Component, OnInit } from '@angular/core';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';

@Component({
  selector: 'app-creados',
  templateUrl: './creados.page.html',
  styleUrls: ['./creados.page.scss'],
})
export class CreadosPage implements OnInit {

  constructor(private actionSheet: ActionSheet) { }

  ngOnInit() {
  }

  // let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

  // const options: ActionSheetOptions = {
  //   title: 'What do you want with this image?',
  //   subtitle: 'Choose an action',
  //   addCancelButtonWithLabel: 'Cancel',
  //   addDestructiveButtonWithLabel: 'Delete',
  //   destructiveButtonLast: true
  // }
  
  // // this.actionSheet.show(options).then((buttonIndex: number) => {
  // //   console.log('Button pressed: ' + buttonIndex);
  // // });

}
