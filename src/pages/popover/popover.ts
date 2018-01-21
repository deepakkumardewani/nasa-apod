import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { DataService } from "../../app/services/data.service";

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-popover",
  templateUrl: "popover.html"
})
export class PopoverPage {
  @ViewChild("yearFirst") yearFirst;
  @ViewChild("yearSecond") yearSecond;
  @ViewChild("yearThird") yearThird;
  @ViewChild("yearFourth") yearFourth;

  @ViewChild("monthFirst") monthFirst;
  @ViewChild("monthSecond") monthSecond;

  @ViewChild("dateFirst") dateFirst;
  @ViewChild("dateSecond") dateSecond;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private dataService: DataService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PopoverPage");
    // setTimeout(() => {
    //   this.dateSecond.setFocus();
    // }, 500);
  }

  close() {
    this.viewCtrl.dismiss();
  }

  yearFocusNext() {
    if (this.yearFirst.value !== "") {
      this.yearSecond.setFocus();
    } else if (this.yearSecond.value !== "") {
      this.yearThird.setFocus();
    } else if (this.yearThird.value !== "") {
      this.yearFourth.setFocus();
    } else if (this.yearFourth.value !== "") {
      this.dateFirst.setFocus();
    }
  }

  dateFocusNext() {
    if (this.dateFirst.value !== "") {
      this.dateSecond.setFocus();
    }
  }

  monthFocusNext() {
    if (this.monthFirst.value !== "") {
      this.monthSecond.setFocus();
    }
    if (this.monthSecond.value !== "") {
      this.dateFirst.setFocus();
    }
  }

  search() {
    const date = `${this.yearFirst.value}${this.yearSecond.value}${
      this.yearThird.value
    }${this.yearFourth.value}-${this.monthFirst.value}${
      this.monthSecond.value
    }-${this.dateFirst.value}${this.dateSecond.value}`;

    console.log(date);
    this.dataService.getDataForDate(date).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteInput() {}
}