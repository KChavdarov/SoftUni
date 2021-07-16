import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-test',
  templateUrl: './another-test.component.html',
  styleUrls: ['./another-test.component.css']
})
export class AnotherTestComponent implements OnInit {
  counter = 0;

  users = [
    { name: 'Gosho' ,age: 20 },
    { name: 'Kiro', age: 29 },
    { name: 'Pesho', age: 32 },
  ]

  classes = {
    'one': true,
    'two': false,
    'three': true
  }

  phone = ''

  logPhone(phoneInput : HTMLInputElement) {
    this.phone = phoneInput.value;
    phoneInput.value = '';
  }

  testBool = true

  clickCounter() {
    this.counter++;
    this.testBool = !this.testBool;
  }

  ngOnInit(): void {
  }
}
