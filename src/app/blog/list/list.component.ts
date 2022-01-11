import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	public blogPosts$: Observable<ScullyRoute[]>;

	constructor(private _scully: ScullyRoutesService) {}

	ngOnInit(): void {
		this.blogPosts$ = this._scully.available$.pipe(
			map((routes: ScullyRoute[]) => {
				return routes.filter((r: ScullyRoute) => {
					return r.route.includes('/blog/') && r.route !== '/blog';
				});
			}),
		);
	}
}
