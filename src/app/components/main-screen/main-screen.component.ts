import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../../services/api-caller.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
  animations: [

    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        animate(1000)
      ])
    ]),

    trigger('resize', [
      state('void', style({ height: 0 })),
      transition('void <=> *', [
        animate('300ms ease-out', style({ height: '*' }))
      ])
    ]),

  ]
})
export class MainScreenComponent implements OnInit {

  request = {
    text: '',
    target_lang: ''
  };

  translatedTextDummy: string = 'Learning a new language opens up many doors. It allows you to connect with people from different cultures, enhances your cognitive abilities, and can provide career opportunities. Whether for personal growth or professional reasons, mastering a new language can be a rewarding experience.Learning a new language opens up many doors. It allows you to connect with people from different cultures, enhances your cognitive abilities, and can provide career opportunities. Whether for personal growth or professional reasons, mastering a new language can be a rewarding experience.Learning a new language opens up many doors. It allows you to connect with people from different cultures, enhances your cognitive abilities, and can provide career opportunities. Whether for personal growth or professional reasons, mastering a new language can be a rewarding experience.Learning a new language opens up many doors. It allows you to connect with people from different cultures, enhances your cognitive abilities, and can provide career opportunities. Whether for personal growth or professional reasons, mastering a new language can be a rewarding experience.Learning a new language opens up many doors. It allows you to connect with people from different cultures, enhances your cognitive abilities, and can provide career opportunities. Whether for personal growth or professional reasons, mastering a new language can be a rewarding experience.';
  translatedText: string = ""
  isLoading: boolean = false

  constructor(private apiCallerService: ApiCallerService) { }

  ngOnInit(): void { }

  onIdentify() {

    if (this.request.text) {
      this.isLoading = true;

      this.apiCallerService.post('identify', this.request).subscribe((res: any) => {
        console.log(res)
        this.request.target_lang = res.language
        this.isLoading = false;
      },
        (error) => {
          console.error('API error:', error);
          this.isLoading = false;
        }
      );

    }


  }

  onTranslate() {
    this.isLoading = true;

    this.apiCallerService.post('translate', this.request).subscribe((res: any) => {
      console.log(res)
      this.translatedText = res.translated_text;
      this.isLoading = false;
    },
      (error) => {
        console.error('API error:', error);
        this.isLoading = false;
      }
    );
  }

  languages = [
    { code: 'en', name: 'English' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ta', name: 'Tamil' },
    { code: 'kn', name: 'Kannada' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'it', name: 'Italian' },
    { code: 'ru', name: 'Russian' },
    { code: 'sv', name: 'Swedish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'ar', name: 'Arabic' },
    { code: 'tr', name: 'Turkish' },
    { code: 'de', name: 'German' },
    { code: 'da', name: 'Danish' },
    { code: 'el', name: 'Greek' },
  ];



}
