import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
export class Result{
  constructor(public date: string | undefined,
              public distance: number | undefined,
              public time: string | undefined)
  { }
}
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  date: string | undefined;
  distance: number | undefined;
  time: string | undefined ;
  results: Result [] = [];
  addRes(){
    this.results.push(new Result(this.date, this.distance, this.time));
  }
  printResult(form: NgForm){
    console.log(form);
  }

  ngOnInit(): void {
  }
}

