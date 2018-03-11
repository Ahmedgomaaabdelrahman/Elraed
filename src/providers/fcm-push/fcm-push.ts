import { User } from './../../model/UserModel';
import { Events } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
declare var FCMPlugin;

/*
  Generated class for the FcmPushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmPushProvider {

  constructor(public events:Events,private user:User,
    public fcm:FCM,public http: HttpClient) {
    console.log('Hello FcmPushProvider Provider');
  }
  getDviceToken():Promise<any>{
    let promise=new Promise((resolve,reject)=>{
      this.fcm.getToken().then(token=>{
        //   resolve(token)

        // let req={
        //   'Id':uid,
        //   'Token':token
        // }
        // this.http.post(this.domain.url+'/storeTokenId',req).subscribe(res=>{
        //   console.log('fcm response',res)
        // });
        console.log('device token by fcm : ',token)
        resolve(token)
      }).catch(e=>{
        console.log('fcm error',e)
      });
    });

    return promise;
  }

  onTokenIdRefresh():Promise<any>{
    let promise=new Promise((resolve,reject)=>{
      this.fcm.onTokenRefresh().subscribe(token=>{
        console.log('token refreshed',token)
        resolve(token)
      })});
    return promise;
  }
  onTokenRecived(context):Promise<any>{
    let promise=new Promise((resolve,reject)=>{


      console.log('fcm subscribtion starts')

      FCMPlugin.onNotification( (token)=>{
        console.log('FCM Fired : Token :: ',token)
        // this.zone.runOutsideAngular(()=>{


          if(token.wasTapped){

            //Notification was received on device tray and tapped by the user.
            // alert(token.wasTapped)ionic serve
          
            // alert( token );
            this.events.publish('msg',1)

            if(this.user.USER.type=='1'){
              alert('تم الاجابة علي سؤال جديد لك');
return;
            }else if(this.user.USER.type=='2'){
              alert('لديك سؤال جديد');
return;
            }
            alert("من فضلك تابع صفحة الاسئلة");
            resolve(true)
          }else{

            this.events.publish('msg',1)
            if(this.user.USER.type=='1'){
              alert('تم الاجابة علي سؤال جديد لك');
return;
            }else if(this.user.USER.type=='2'){
              alert('لديك سؤال جديد');
return;
            }
            alert("من فضلك تابع صفحة الاسئلة");
            // alert(token.wasTapped)
            // alert( token );
            // alert('');

            // alert(token.wasTapped)
            resolve(false)
          //  FCMPlugin. backend.registerToken(token);

            //Notification was received in foreground. Maybe the user needs to be notified.
            // console.log(context.getActive().name)

          }
        })
      })

      FCMPlugin.onTokenRefresh(function (token){
        FCMPlugin.onTokenRefresh(function (token){
          alert('لديك رسالة جديدة');

        })
      })

    return promise;
  }


}
