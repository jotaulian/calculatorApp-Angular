import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  operandA: number = 0;
  operandB: number = 0;
  resultado: number = 0;

  addNumbers(): void{
    this.resultado = this.operandA + this.operandB;
  }
  clear():void {
     this.operandA = 0;
     this.operandB = 0;
     this.addNumbers();
  }
}
