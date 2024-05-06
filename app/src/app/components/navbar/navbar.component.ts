import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: "navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css",
    imports: [RouterLink]
})
export class Navbar {

}