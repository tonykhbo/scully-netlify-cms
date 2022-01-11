import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'scully-netlify-cms';
	isAdminPage$: Observable<boolean>;

	constructor(private _router: Router) {}

	ngOnInit() {
		this.isAdminPage$ = this._router.events.pipe(
			filter((evt: any) => {
				return evt instanceof NavigationEnd;
			}),
			map((evt: NavigationEnd) => {
				return evt.url.includes('/admin');
			}),
		);
	}
}
