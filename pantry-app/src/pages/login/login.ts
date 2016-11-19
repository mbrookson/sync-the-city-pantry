import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

export class QuestionModel {
    subject: string;
    dataType: string;
    relationship: string;
    prompt: string;
    type: string;
    plural: boolean;
    allowCF: boolean;
    allowUnknown: boolean;
    canAdd: boolean;
    ////knownAnswers: AnswerModel[];
    ////concepts: ConceptModel[];
}

export class ResultModel {
  // relationshipType: string;
  // certainty: number;
  // conditions: string[];
  // objectType: string;
  // source: number;
  // object: string;
  // queryID: string;
  // objectMetadata: string;
    // factID: string;
    question: QuestionModel;
}

export class RecommendationResultModel {
    result: RecommendationModel[];
}

export class RecommendationModel {
    object: string;
}


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private http: Http) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login() {
    this.navCtrl.setRoot(IntroPage);

    var apiKey = 'c2af1683-83b7-4a21-8533-0fab6c17ec9a';
    var knowledgeMapID = 'ced58c8e-7a0d-472d-9391-425e76507fc9';
    var url = 'https://enterprise-api.rainbird.ai/start/' + knowledgeMapID;
    var headers = new Headers();
    headers.append('accept', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(apiKey + ':'));

    this.http.get(url, { headers: headers })
      ////.map(data => data.json() as QuestionModel)
      ////.map(data => data.json())
      .subscribe(result => {
         //Success callback
         var id = result.json().id;

         url = 'https://enterprise-api.rainbird.ai/' + id + '/query';
         headers = new Headers();
         headers.append('Content-Type', 'application/json');
         this.http.post(url, '{ "subject": "User 1", "relationship": "would prefer"}', { headers: headers })
           .map(data => data.json() as ResultModel)
           .subscribe(foo => {
               console.log("IT WORKED");
               console.log(foo.question.allowUnknown);

               url = 'https://enterprise-api.rainbird.ai/' + id + '/response';
               headers = new Headers();
               headers.append('Content-Type', 'application/json');
               this.http.post(
                   url,
                   '{ "answers" : [ { "subject": "User 1", "relationship": "fits into", "object": "Gluten Free", "cf": "100", "answer": "yes" } ] }',
                   { headers: headers })
                   .map(data => data.json() as RecommendationResultModel)
                   .subscribe(bar => {
                       console.log("we have a winner");
                       console.log(bar.result[0].object);
                       alert(bar.result[0].object);
                   },
                   error => {
                       console.log('oh no');
                       console.log(error);
                   });
           },
           error => {
               console.log("it didn't work");
           });
     }, error => {
       //Error callback
     }
    )
  }
}
