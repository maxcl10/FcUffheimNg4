/*
 * Angular 2 decorators and services
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import { Router, Event, NavigationEnd } from '@angular/router';

import { TeamsService } from './teams/shared/teams.service';
import { Team } from './teams/shared/team.model';
import { AppConfig } from './app.config';

import * as jQuery from 'jquery';
declare let ga: any;

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  providers: [TeamsService, AppConfig],
})
export class AppComponent implements OnInit {

  public teams: Team[];
  public errorMessage: string;

  constructor(public appState: AppState, private teamsService: TeamsService, public router: Router) {

    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd) {
          // comment has been removed
           ga('send', 'pageview', event.urlAfterRedirects);
        }
        window.scrollTo(0, 0);
      });

    // Method to close the nav bar when clicking on a link on small screens
    $(document).on('click', '.navbar-collapse.in', function (e) {
      if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
        $(this).collapse('hide');
      }
    });
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);

    alert(AppConfig.settings.env.name);
    this.teamsService.getHomeTeams().subscribe(
      (homeTeams) => {
        this.teams = homeTeams;
      },
      (error) => this.errorMessage = <any> error);
  }
}
