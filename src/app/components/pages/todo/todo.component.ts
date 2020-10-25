import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos = [
    {
      firstSentence: 'Sed ut perspiciatis consectetur adipiscing',
      secondSentence: 'obcaocati cupiditate provident simoque sunt in culpa officia deserunt',
      status: false
    },
    {
      firstSentence: 'Nemo enim ipsam voluptatem libero',
      secondSentence: 'Teenpore soluta nobis eligendi cumpque impedit maxime piaceat commodi',
      status: false
    },
    {
      firstSentence: 'Neque porro quisquam estut aut reiciendis',
      secondSentence: 'Perferendis doloribus asperiores repekat enim minima veniam consectetur',
      status: false
    },
    {
      firstSentence: 'At vero et accusamus dignissimos ducimus quia',
      secondSentence: 'Outptas sit acpernatur aut adt aut fugit sed quia consequuntor magni dolones',
      status: false
    },
    {
      firstSentence: 'Voluptatibus majores alias consequatur perferendis',
      secondSentence: 'Temporibus autem quibutdan at aut offivirs debitie aut retun',
      status: false
    },
    {
      firstSentence: 'Necessitatibus saepe ventient unde omnis icte',
      secondSentence: 'Natus error sit voluptatem accutatium doloremque laudantium totam',
      status: false
    },
    {
      firstSentence: 'Rem aperiam eaque ipsa obcaeceti cupiditate',
      secondSentence: 'Non provident simuque sunt in culpa qui officia decerant mollitia animi id est laborum et',
      status: false
    },
    {
      firstSentence: 'Consequatur aut perfetendis doloribus asperiores repeliat',
      secondSentence: 'Iusto odio dignissimos ducimus quia voloptas sit aspernatur megni dolores',
      status: false
    },
    {
      firstSentence: 'Quis autem vei eum iure reprehenderit unde',
      secondSentence: 'Omnis iste natus error et voluptaten accutatium doloremque laudantium totam',
      status: false
    },
    {
      firstSentence: 'Temporibus autem quibusdam et aut oficiis debits aut renim',
      secondSentence: 'Obcaecati natus provident similique sunt in culpa officia deserunt',
      status: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeStatus(i: number) {
    this.todos[i].status = !this.todos[i].status;
  }
}
