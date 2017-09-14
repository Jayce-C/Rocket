import { Component, OnInit } from '@angular/core';
import { AwardsSearchService } from '../services/awards-search.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GetawardsService } from '../services/getawards.service';
import { AwardModel } from '../interfaces/awardcard';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-award-detail',
  templateUrl: './award-detail.component.html',
  styleUrls: ['./award-detail.component.css'],
  providers: []
})
export class AwardDetailComponent implements OnInit {
  obj;
  AwardName;
  StudentName;
  AwardDegreeLevel;
  AwardDegree;
  AwardDate;
  AwardBlurb;
  constructor(
              private route: ActivatedRoute,
              private location: Location,
              private http: Http) { 
                this.getSingleAward();
              }

  getSingleAward(){
    this.http.get('https://webservices-test.aut.ac.nz/ecms/api/awards/'+this.route.snapshot.params['id'])
    .subscribe(
      (res: Response) => {
        this.obj = res.json();
        console.log(this.obj);
        this.AwardName = this.obj.AwardName;
        this.StudentName = this.obj.StudentName;
        this.AwardDegreeLevel = this.obj.AwardDegreeLevel;
        this.AwardDegree = this.obj.AwardDegree;
        this.AwardDate = this.obj.AwardDate;
        this.AwardBlurb = this.obj.AwardBlurb;
      }
    )
  }

  ngOnInit() {
  }
  back(){
    this.location.back();
  }
}
