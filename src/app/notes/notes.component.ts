import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {

  @ViewChild('title') title: ElementRef | undefined;
  @ViewChild('noteBody') noteBody: ElementRef | undefined;
  notes: Note[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNote() {
    let obj: Note = new Note();
    obj.id = this.notes.length;
    if (this.noteBody && this.title) {
      obj.description = this.noteBody.nativeElement.innerText;
      obj.title = this.title.nativeElement.innerText;
    }
    this.notes.push(obj);
    this.resetNote();
  }

  selectAll() {
    document.execCommand('selectAll', false, '');
  }

  resetNote() {
    if (this.noteBody && this.title) {
      this.title.nativeElement.innerText = 'Title';
      this.noteBody.nativeElement.innerText = 'Add your Notes here!';
    }
  }
}
