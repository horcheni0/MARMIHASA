import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public change: TranslateService){
    change.addLangs(['Anglais', 'Allemand', 'Francais', 'Italien']);
    change.setDefaultLang('Anglais');
  }
  changeLanguageTo(lang: string){
    this.change.use(lang);
  }

  title = 'Marmihansa';
}
