import { Component, ViewChild } from '@angular/core';

import { RequestService } from "../../RequestService/request.service";
import { AuthTableComponent } from "../../shared/shared";

@Component({
    selector: 'admin',
    templateUrl: 'app/routes/admin/admin.component.html',
    // providers: [ RequestService ]
    directives: [ AuthTableComponent ]
})

export class AdminComponent {
    @ViewChild('authorize') authTableAuthorize: AuthTableComponent;
    @ViewChild('rejected') authTableRejected: AuthTableComponent;
    @ViewChild('approved') authTableApproved: AuthTableComponent;

    updateChildren() {
        this.authTableAuthorize.pull();
        this.authTableRejected.pull();
        this.authTableApproved.pull();
    }
}