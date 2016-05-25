import {Page, Alert} from 'ionic-angular';
import {MeteorComponent} from 'angular2-meteor';
import {Lists} from './parties';
import {IterableDiffers, Component} from 'angular2/core';
import {NavController, Modal} from 'ionic-angular';
import {Gesture} from 'ionic-angular/gestures/gesture';
import {InputModalPage} from '../input-modal/input-modal';
import {LongPress} from '../../components/long-press/long-press'
import {Page3} from '../page3/page3'
import {Games} from '../input-modal/countries'


@Page({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [LongPress]
})
export class Page1 extends MeteorComponent {
    public myData: Mongo.Cursor<any>;
    month: any;

    // add(item: string) {
    //     Lists.insert({ name: item });
    // }

    constructor(private nav: NavController) {
        super();
        this.myData = Games.find({}, { sort: { "time": 1 } });

    }

    clicked(game) {
        // console.log(list);
        console.log(game._id);

        let confirm = Alert.create({
            title: 'What Is The Score ? ',
            message: 'Please enter the score tomer!',
            buttons: [
                {
                    text: '1',
                    handler: () => {
                        console.log('1 clicked');
                        Games.update({ "_id": game._id }, { "$set": { "score": "1" } });
                    }
                },
                {
                    text: 'X',
                    handler: () => {
                        console.log('X clicked');
                        Games.update({ "_id": game._id }, { "$set": { "score": "X" } });

                    }
                },
                {
                    text: '2',
                    handler: () => {
                        console.log('2 clicked');
                        Games.update({ "_id": game._id }, { "$set": { "score": "2" } });

                    }
                },
                {
                    text: 'Not Defined',
                    handler: () => {
                        console.log('Not Defined clicked');
                        Games.update({ "_id": game._id }, { "$set": { "score": "Not Defined" } });

                    }
                }
            ]
        });
        this.nav.present(confirm);
    }

    openModal() {
        console.log(this.month)
        let modal = Modal.create(InputModalPage);
        this.nav.present(modal);
    }
    NotDefinedYet(game) {
        return game.score === "Not Defined";
    }
}
