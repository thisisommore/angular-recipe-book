import { Component, OnInit, Output, EventEmitter ,ViewChild, ElementRef} from '@angular/core';
import { ShoppingListServService } from '../../../shared/shopping-list-serv.service';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
  
})
export class ShoppingEditComponent implements OnInit {

JFonAddIngredients(form : NgForm)
{
  this.shoppingSV.addIngredient(form.value.name,form.value.amount);
}
  constructor(private shoppingSV: ShoppingListServService) { }

  ngOnInit(): void {
  }

}
