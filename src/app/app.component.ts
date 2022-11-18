import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularApp-001';
  qtdCharacter = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  GerarSenha() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '@#$%&!';

    let validChar: string = '';
    if (this.includeNumbers) {
      validChar += numbers;
    }
    if (this.includeLetters) {
      validChar += letters;
    }
    if (this.includeSymbols) {
      validChar += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < Number(this.qtdCharacter); i++) {
      const element = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[element];
    }
    this.password = generatedPassword;
  }
}
