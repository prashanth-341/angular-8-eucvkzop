import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPerson(id).subscribe(data => this.person = data);
  }

  updatePerson() {
    this.service.updatePerson(this.person.id, this.person)
      .subscribe(() => this.router.navigate(['/']));
  }
}
