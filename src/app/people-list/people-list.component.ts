import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private service: PersonService, private router: Router) {}

  ngOnInit() {
    this.service.getPeople().subscribe(data => this.people = data);
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    this.service.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(p => p.id !== id);
    });
  }
}
