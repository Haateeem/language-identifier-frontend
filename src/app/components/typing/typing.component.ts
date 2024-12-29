import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
  animations: [
    trigger('typeAnimation', [
      transition(':enter', [
        style({ width: 0 }),
        animate('4s ease-in-out', style({ width: '100%' }))
      ])
    ])
  ]
})
export class TypingComponent implements OnInit {

  @Input() text: string = '';
  @Input() speed: number = 100;

  displayText: string = '';


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.startTyping(); // Restart typing animation when text changes
    }
  }

  startTyping() {
    let index = 0;
    this.displayText = ''; // Reset display text

    const interval = setInterval(() => {
      if (index < this.text.length) {
        this.displayText += this.text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, this.speed);
  }

}
