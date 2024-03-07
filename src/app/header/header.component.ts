import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss',
  './header.component.css'
]
})
export class HeaderComponent {

  
  navbarfixed: boolean = false;
  defaultImage: string = 'assets/images/an.jpg'; 
  languageOptions: { name: string, image: string }[] = [
    { name: 'Anglais', image: "assets/images/an.jpg" },
    { name: 'Allemand', image: "assets/images/all.jpg" },
    { name: 'Francais', image: "assets/images/fr.jpg" },
    { name: 'Italien', image: "assets/images/ita.jpg" },
  ];

  

  

  

  constructor(public change: TranslateService) {
    change.addLangs(['Anglais', 'Allemand', 'Francais', 'Italien']);
    change.setDefaultLang('Anglais');
  
  }

  changeLanguageTo(lang: string) {
    this.change.use(lang);
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    this.navbarfixed = window.scrollY > 100;
  }

  getSelectedLanguageImage(): string {
    const selectedLanguage = this.languageOptions.find(option => option.name === this.change.currentLang);
    return selectedLanguage ? selectedLanguage.image : 'fallback-image-path';
  }
  
}



