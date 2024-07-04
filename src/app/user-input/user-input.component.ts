import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentModel } from '../model/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output () calculate=new EventEmitter<InvestmentModel>();
  enteredInitialInvestment='0';
  enteredAnnualInvestment="0";
  enteredExpectedReturn="5";
  enteredDuration="10";

  
  onSubmit(){
    console.log("Submitted");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredDuration);
    this.calculate.emit({
      initialInvestment:+this.enteredInitialInvestment,
    duration:+this.enteredDuration,
    expectedReturn:+this.enteredExpectedReturn,
    annualInvestment:+this.enteredAnnualInvestment

    });
  }

}
