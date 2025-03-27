import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselImgList:Array<{src:string,alt:string}>=[
    {src:"https://res.cloudinary.com/cse347/image/upload/v1649969873/cse347/kudos_chicken_sub-sandwitch_voktqv.jpg",alt:"test1"},
    {src:"https://res.cloudinary.com/cse347/image/upload/v1649969872/cse347/kudos_choco_coffee_freeze_lfejmo.jpg",alt:"test2"},
    {src:"https://res.cloudinary.com/cse347/image/upload/v1649969863/cse347/strips_and_rice_combo_eegyqi.jpg",alt:"test3"},
    {src:"https://res.cloudinary.com/cse347/image/upload/v1649969861/cse347/house_party_combo_for_four_i9njw6.jpg",alt:"test4"},
    {src:"https://res.cloudinary.com/cse347/image/upload/v1649969876/cse347/Chicken_Kabab-_jn9kmf.webp",alt:"test5"},
  ]
  ;

}
