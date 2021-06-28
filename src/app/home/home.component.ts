import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentDate: number = new Date().getFullYear();
  scrollPosition: number = 0;
  openNav: boolean = false
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.scrollToContent('#about');
  }

  scrollToContent(content: string) {
    var element = document.getElementById(content)!;
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: content,
    });
    this.openNav ? (this.openNav = !this.openNav): '';
  }

  @HostListener('window:scroll') onScroll(e: Event): void {
    this.scrollPosition = window.scrollY;
  }

  toggleNavBar() {
    this.openNav = !this.openNav;
  }

}
