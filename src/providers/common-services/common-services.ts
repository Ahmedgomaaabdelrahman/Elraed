
/*
  Generated class for the CommonServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Events, LoadingController, ToastController,ActionSheetController } from 'ionic-angular';
// import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import {Camera,CameraOptions} from "@ionic-native/camera";
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { IonicStorageModule,Storage } from '@ionic/storage';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import firebase from 'firebase/app';
import * as firebase from 'firebase'; 
import { File } from '@ionic-native/file';
import {Statics} from "../../model/StaticsModel";
/*
  Generated class for the CommonservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServicesProvider {
  private url

  constructor(
              private mediaCapture: MediaCapture,
              public event:Events,
              private file: File,
              public actionSheetCtrl: ActionSheetController,
              private actionSheet: ActionSheet,
              private camera: Camera,
              private base64: Base64,
              private transfer: FileTransfer,
              private statics:Statics,

              public loadingCtrl: LoadingController,
              private store: Storage,
              public http: HttpClient,
              private toast: ToastController) {
    console.log('Hello CommonservicesProvider Provider');
    this.url=this.statics.getURL();

  }
  media():Promise<any>{
    let promise =new Promise((resolve,reject)=>{


      // let options: CaptureVideoOptions = { duration: 60 };
      this.mediaCapture.captureAudio()
        .then(
          (data: MediaFile[]) => resolve(data),
          (err: CaptureError) => console.error(reject(err))
        );})

    return promise;
  }

//   media():Promise<any>{
// let promise =new Promise((resolve,reject)=>{
//
//
//       // let options: CaptureVideoOptions = { duration: 60 };
//       this.mediaCapture.captureVideo()
//           .then(
//               (data: MediaFile[]) => resolve(data),
//               (err: CaptureError) => console.error(reject(err))
//           );})
//
//         return promise;
//   }
    storeValue(key:any,value:any):Promise<any>{
let promise=new Promise((resolve,reject)=>{
    console.log('store',key,value)
    this.store.set(key,value);
    resolve(true)
})

return promise
    }
    getStoredValue(key:string):Promise<any>{
        let promise=new Promise((resolve,reject)=>{
            this.store.get(key).then((val) => {
                console.log('am from local storage ', val);
                resolve(val);
            }).catch((e)=>{
                console.log('storage err :',e);
            });
        });
        return promise;
    }
    removeStoredKey(key:any){
        this.store.remove(key);
    }
    presentActionSheet(msg1,msg2):Promise<any> {
        let promise=new Promise((resolve,reject)=>{

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: msg1,
                    role: 'destructive',
                    handler: () => {
                        resolve(1)
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: msg2,
                    handler: () => {
                        resolve(0)
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'الغاء',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
        })
     return promise
    }

//  createTranslateLoader(http: HttpClient) {
//         return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//     }
    // storeValue(storageName,key,value):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //
    //                 // storage.get('key')
    //                 //     .then(
    //                 //         data => console.log(data),
    //                 //         error => console.log(error)
    //                 //     );
    //
    //                 storage.set(key, value)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // getStoredValue(storageName,key):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //                 storage.get(key)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // removeFromStorage(key){
    //     this.secureStorage.create('my_store_name')
    //         .then((storage: SecureStorageObject) => {
    //
    //
    //             storage.remove(key)
    //                 .then(
    //                     data => console.log(data),
    //                     error => console.log(error)
    //                 );
    //
    //         });
    // }
    presentToast(msg:string,closeText?:string,callback?) {
        const toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
            ,dismissOnPageChange:true,
            showCloseButton:true
            ,closeButtonText:closeText
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
            callback;
        });

        toast.present();

    }
    presentLoadingDefault(msg='رجاء الانتظار') {
        this.loading = this.loadingCtrl.create({
            spinner:'ios',
            content: msg
        });

        this.loading.present();
        return this.loading;
    }
    loading:any;
    loadDismess(){
        this.loading.dismiss();
    }
    //profile pic handler

    camPic(source):Promise<any>{
        let promise=new Promise((resolve,reject)=>{
            const options: CameraOptions = {
                quality: 50,
                sourceType:source,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE

                // quality: 100,
                // sourceType:source,
                // destinationType: this.camera.DestinationType.DATA_URL,
                // encodingType: this.camera.EncodingType.JPEG,
                // mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image =  imageData;
                resolve(base64Image);
            }, (err) => {
                reject(err)
                // Handle error
            });
        })
        return promise;
    }
    eventPublish(ev,content){
        this.event.publish(ev, content)
    }
    eventSubs(ev,callback){
        this.event.subscribe(ev, (user) => {
        return callback
        });
    }
  toBase64(filepath):Promise<any>{
    let promise=new Promise((resolve,reject)=> {
      let filePath: string = filepath;
      this.base64.encodeFile(filePath).then((base64File: string) => {
 //    this.file.readAsDataURL(filePath, 'file').then(res=>{
 //        console.log('file 64',res)
 // resolve(res)
 //    })


        resolve(base64File)
        // console.log(base64File);
      }, (err) => {
        reject(err)
        console.log(err);
      });
    });
    return promise
  }


    // fileUpload(filepath,endpoint){
    //     const fileTransfer: FileTransferObject = this.transfer.create();
    //     let options: FileUploadOptions = {
    //         fileKey: 'image',
    //         httpMethod:'GET',
    //         fileName: 'test.3gp',
    //         // headers: {}
    //         }
    //         fileTransfer.upload(filepath,endpoint,options)
    //             .then((data) => {
    // console.log(data)
    //                 // success
    //             }, (err) => {
    //                 // error
    //                 console.log(err)

    //             })
    //     }
// filedownload(endpoin){
//
//         const url =endpoin;
//         fileTransfer.download(url, this.file.dataDirectory + 'file.3gp').then((entry) => {
//             console.log('download complete: ' + entry.toURL());
//         }, (error) => {
//             console.log(error);
//
//             // handle error
//         });
//
// }
  uploadFile(fileURI,params) {

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      params:params,
      chunkedMode: false,
      httpMethod : 'post',

      mimeType: "audio/m4a",
      headers: {
        // 'content-type': 'application/x-www-form-urlencoded'
      }
    }

    fileTransfer.upload(fileURI, this.url+'askfile', options)
      .then((data) => {
        console.log(data+" Uploaded Successfully");
        // let fileName = "http://192.168.0.7:8080/static/images/ionicfile."
        // loader.dismiss();
        // this.presentToast("Image uploaded successfully");
      }, (err) => {
        console.log(err);
        // loader.dismiss();
        // this.presentToast(err);
      });
  }

  uploadToFirebase(bath){



    var f =bath// use the Blob or File API
    // file: File


    this.dataURItoBlob(f).then(data=>{
        var reader = new FileReader();
        reader.onloadend = function (e) {
            // do your parsing here
            console.log('file reader e : ' ,e)

        };
        reader.readAsText(data);
        console.log('file reader' ,reader.readAsText(f))
        var storageRef = firebase.storage().ref();

        // Create a reference to 'mountains.jpg'
            var mountainsRef = storageRef.child(''+'.m4a');
    mountainsRef.put(reader.readAsText(data),{contentType:'audio/m4a'}).then((snapshot)=> {
      alert('done')
    //   console.log(' timestamp :: ',mountainsRef.TIMESTAMP);
      console.log('Uploaded a blob or file!',snapshot);

    }).catch(e=>{
      alert('e : '+e)
      console.log(e)
    });
    })  
}
  dataURItoBlob(dataURI):Promise<any> {
    // code adapted from: http://stackoverflow.com/questions/33486352/cant-upload-image-to-aws-s3-from-ionic-camera
    let promise=new Promise((resolve,reject)=>{
        console.log('url ',dataURI)

        console.log('data blob : ',new Blob([new Uint8Array(dataURI)], {type: 'audio/mpeg'}))

    // let binary = atob(dataURI.split(',')[1]);
    // let array = [];
    // for (let i = 0; i < binary.length; i++) {
    //   array.push(binary.charCodeAt(i));
    // }
    // console.log('arr',array)
    resolve(new Blob([new Uint8Array(dataURI)], {type: 'audio/m4a'}));
})
return promise;
  }
//   upload() {
//       var uploadTask = firebase.storage()
//       .ref()
//       .child('images/uploaded.png')
//       .put(this.dataURItoBlob('data:image/jpeg;base64,' + imageData));
//       uploadTask.then(s=>{}, e=>{});
    
//   }






//   addAssignmentFile(sbaid, file:any):any{

//     return   this.sbaList.child(file.filename)
// //Saves the file to storage
//           .put(file.blob,{contentType:file.type}).then((savedFile) => {
// //Gets the file url and saves it in the database
//                this.sbaList.child('sbafiles').push({
//                file: savedFile.downloadURL,
//                name: file.filename,
//                ext: file.fileext,
//                type: file.type
//           });
//       })

//   }
}
