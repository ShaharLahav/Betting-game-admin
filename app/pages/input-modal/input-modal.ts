import {Page, NavController, ViewController} from 'ionic-angular';
import {MeteorComponent} from 'angular2-meteor';
// import {Lists} from '../page1/parties';
import {Countries,Games} from './countries'
/*
  Generated class for the InputModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/input-modal/input-modal.html',
})
export class InputModalPage  extends MeteorComponent {
    public myData:Array<any>;
    hour:any = "16";
    month:any = "June";
    minute:any = "00";
    day:any = "01";
    Country2:any;
    Country1:any;
    
    
    constructor(public nav: NavController, private viewController: ViewController) {
        super();
        // this.nav = nav;
        this.myData = Countries.find().fetch();
        console.log(this.myData);
    }
    
    dismiss() {
        
        this.viewController.dismiss()
    }
    
    clicked() {
        console.log(this.Country1);
        console.log(this.Country2);
        var st = this.month +" " + this.day + ", 2016 " + this.hour + ":" + this.minute +  ":00";
        let t = Date.parse(st);
        
        // console.log(Date.parse("1464872400000"));
        
        let obj = {
            "Country1":this.Country1,
            "Country2":this.Country2,
            "time":t,
            "score":"Not Defined",
            "closed":false
        };
        
        let id = Games.insert(obj);
        console.log(id);
        
         this.viewController.dismiss();
    }
}
