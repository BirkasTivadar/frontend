import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { superPowers } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  // powers: string[] = new superPowers().list; // ha nem static a list a hero.ts-ben
  powers: string[] = superPowers.list;

  newHeroGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]), // egy tömbben kell megadni a validációs feltételeket
    address: new FormControl('', [Validators.required, Validators.minLength(8)]),
    superpower: new FormControl('')
  });

  constructor(private hService: HeroService) {
    console.log(this.newHeroGroup);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
   this.hService.add(this.newHeroGroup.value)
   .then(
     () => console.log("Save success"),
     () => console.error("Error in request.")
   );
  }

}
