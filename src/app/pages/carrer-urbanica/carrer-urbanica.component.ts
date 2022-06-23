import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrer-urbanica',
  templateUrl: './carrer-urbanica.component.html',
  styleUrls: ['./carrer-urbanica.component.scss']
})
export class CarrerUrbanicaComponent implements OnInit {

  currentSection = 'carrers';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

}
