import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";

import { RequestService } from "../../RequestService/request.service";

@Component({
    selector: 'auth-table',
    templateUrl: 'app/shared/authTable/authTable.component.html',
    providers: [ RequestService ]
})

export class AuthTableComponent implements OnInit {
    @Input() uri: string;
    questions: any[] = [];
    @Output() updateChildren = new EventEmitter();

    constructor(private rs: RequestService) {

    }

    ngOnInit() {
        this.pull();
        // this.rs.get(this.uri, (data) => {
        //     this.questions = data;
        // }, undefined);
    }

    updateQuestion(id: string, authorize: string) {
        this.rs.postxwww("/askanything/" + id + "/authorize", {"authorize": authorize}, (data) => {
            if(!(data && data.hasOwnProperty("status") && data.status == "Success")) {
                window.alert("There was a problem :(")
            }
            this.pull();
        }, (error) => {
            window.alert(error);
        })
    }

    updateParent() {
        this.updateChildren.emit();
    }

    pull() {
        this.rs.get(this.uri, (data) => {
            this.questions = data;
        }, undefined);
    }
}