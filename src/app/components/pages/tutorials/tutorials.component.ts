import {Component, OnInit} from '@angular/core';
import {TutorialsService} from '../../../services/tutorials.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  tutorials: any[] = [];

  constructor(public tutorialsService: TutorialsService) {
  }

  async ngOnInit(): Promise<any> {
    await this.setupPage();
  }

  async setupPage(): Promise<any> {
    this.tutorials = await this.tutorialsService.getAllTutorials();
  }

}
