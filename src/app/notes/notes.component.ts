import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {

  @ViewChild('editableNote') field: ElementRef | undefined;
  notes: Note[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNote() {
    // console.log(this.field.innerText);
    let obj: Note = new Note();
    obj.id = this.notes.length;
    if (this.field) {
      obj.description = this.field.nativeElement.innerText;
      this.notes.length % 2 === 0 ? obj.bgClass = 'bg-black' : obj.bgClass = 'bg-gray';
    }
    this.notes.push(obj);
    console.log(this.notes);
    if (this.field) {
      this.field.nativeElement.innerText = 'Add your Notes here!';
    }
  }
}
