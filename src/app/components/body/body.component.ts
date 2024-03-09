import { Component } from '@angular/core';
import { SectionOneComponent } from "../section-one/section-one.component";
import { SectionTwoComponent } from "../section-two/section-two.component";

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [SectionOneComponent, SectionTwoComponent]
})
export class BodyComponent {

}
