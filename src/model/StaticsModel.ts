export class Statics{
    public readonly URL='http://alraedapp.com/api/'
    public  USER_TYPE : number;
    public USE_CAMERA:string='استخدم الكاميرا'
    public USE_GALARY:string='استخدم صورة من البوم الصور'
    public TYPE_CAMERA:number=0;
    public TYPE_GALARY:number=1;
    constructor(){

    }
    getURL(){
        return this.URL;
    }
    
}