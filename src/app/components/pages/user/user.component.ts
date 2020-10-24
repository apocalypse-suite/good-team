import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users = [
    {
      imageUrl: 'assets/images/icon-02.png',
      user: {
        name: 'Minnie Ferguson',
        location: 'Chesapeake, USA'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$150/hour',
      hour: '32 Hour/week',
      score: '365543'
    },
    {
      imageUrl: 'assets/images/icon-01.png',
      user: {
        name: 'Caleb Castillo',
        location: 'Philadelphia, Bangladesh'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$200/hour',
      hour: '21 Hour/week',
      score: '10543'
    },
    {
      imageUrl: 'assets/images/icon-03.png',
      user: {
        name: 'Ann Hunter',
        location: 'Lexington-Fayette, India'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$90/hour',
      hour: '25 Hour/week',
      score: '234543'
    },
    {
      imageUrl: 'assets/images/icon-04.png',
      user: {
        name: 'Florence Harmon',
        location: 'Carpus Christi, France'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$240/hour',
      hour: '24 Hour/week',
      score: '54321'
    },
    {
      imageUrl: 'assets/images/icon-02.png',
      user: {
        name: 'Minnie Ferguson',
        location: 'Chesapeake, USA'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$150/hour',
      hour: '32 Hour/week',
      score: '365543'
    },
    {
      imageUrl: 'assets/images/icon-01.png',
      user: {
        name: 'Caleb Castillo',
        location: 'Philadelphia, Bangladesh'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$200/hour',
      hour: '21 Hour/week',
      score: '10543'
    },
    {
      imageUrl: 'assets/images/icon-03.png',
      user: {
        name: 'Ann Hunter',
        location: 'Lexington-Fayette, India'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$90/hour',
      hour: '25 Hour/week',
      score: '234543'
    },
    {
      imageUrl: 'assets/images/icon-04.png',
      user: {
        name: 'Florence Harmon',
        location: 'Carpus Christi, France'
      },
      skills: ['Angular JS', 'React', '.NET'],
      price: '$240/hour',
      hour: '24 Hour/week',
      score: '54321'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
