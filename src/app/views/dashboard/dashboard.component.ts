import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface A {
  color: String;
  name: String;
}
@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  dateFecha: any;
  elemet: A[] = [
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
    {
      color: "#055255",
      name: "Modulo Ambienta",
    },
  ];
  constructor(public router: Router) {}
  ngOnInit(): void {
    this.dateFecha = new Date();
  }

  hola(event) {
    const name = event.target.name;

    if (name == "cliente") {
      this.router.navigateByUrl("/app/producto/listproduct");
      return 0;
    } else if (name == "conocimiento") {
      this.router.navigateByUrl("/app/inovacion/listInovacion");
    } else if (name == "Proveedor") {
      this.router.navigateByUrl("/app/proveedor/listproveedor");
    } else if (name == "Proceso") {
      this.router.navigateByUrl("/app/porcess/listproceso");
    } else if (name == "ambiental") {
      this.router.navigateByUrl("/app/ambiental/listgeneral");
    } else if (name == "infraestructura") {
      this.router.navigateByUrl("/app/infraEstruc/listGenInfraEstruc");
    } else this.router.navigateByUrl("/404");
  }
}
