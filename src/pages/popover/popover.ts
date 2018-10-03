import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController} from 'ionic-angular';

import { commentProvider } from '../../providers/comment.service';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'PopoverPage'
})
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  rate: any;
  public token_api: any;
  public id: any;
  public type: any;
  public comment: any;
  public comment_id: any;
  public result: any;
  public rateResult: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private nativeStorage: NativeStorage,
    public commentProvider: commentProvider) {

      this.nativeStorage.getItem('myitem')
      .then(
        data =>{
          this.token_api = data.token_api;
      })
     
      this.type = navParams.get('type');
      this.id = navParams.get('id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  addComment(){

    if(this.comment === undefined){
        let toast = this.toastCtrl.create({
          message: "قم بادخال تعليق",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
    }

    else{

      let loader = this.loadingCtrl.create({
        spinner: 'crescent',
        content: ''
      });
  
      loader.present().then(() => {

        this.commentProvider.add_comment(this.token_api, this.id, this.type, this.comment)
        .then( result =>{
          
          this.result = JSON.parse(result.data);
         
          if(this.result.status_code === 200){

            this.comment_id = this.result.comment_id;
            this.commentProvider.add_rate(this.token_api, this.id, this.type, this.rate, this.comment_id)
            .then( result =>{

              this.rateResult = JSON.parse(result.data);
              if(this.rateResult.status_code === 200){
                loader.dismiss();
                this.viewCtrl.dismiss();
                let toast = this.toastCtrl.create({
                  message: "تم اضافة تقييمك",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              }

              else{
                let toast = this.toastCtrl.create({
                  message: "Please Check you internet connection",
                  duration: 3000,
                  position: 'bottom'
                }); toast.present();
              }

            })
          }

          else if( this.result.status_code === 402){

            loader.dismiss();
            let toast = this.toastCtrl.create({
              message: "Please insert valid comment",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }

          else{

            loader.dismiss();
            let toast = this.toastCtrl.create({
              message: "Please check your internet connection",
              duration: 3000,
              position: 'bottom'
            }); toast.present();
          }

        }).catch(error => {
          loader.dismiss();
          let toast = this.toastCtrl.create({
            message: "Please Check you internet connection",
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        });
      })
    }
    
  }

  saveUserRating(e) {
    //alert("rate" + this.rate);
    /*

    this.commentProvider.add_rate(this.token_api, this.id, this.type, e)
    .subscribe( result =>{
      //alert(JSON.stringify(result));
      if(result.status_code === 200){
        let toast = this.toastCtrl.create({
          message: "تم اضافة تقييمك",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
      }
      else{
        let toast = this.toastCtrl.create({
          message: "Please Check you internet connection",
          duration: 3000,
          position: 'bottom'
        }); toast.present();
      }
    }), err=>{
      //alert(JSON.stringify(err));
      let toast = this.toastCtrl.create({
        message: "Please Check you internet connection",
        duration: 3000,
        position: 'bottom'
      }); toast.present();
    }*/
    
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
