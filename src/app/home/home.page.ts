import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
   cards = [
      {
        titulo: "Luminiflora Amazonensis",
        imagen: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
        descripcion:"Descubren una nueva especie de flor en lo profundo de la selva amazónica. Los científicos la han llamado 'Luminiflora Amazonensis' debido a su brillo único al reflejar la luz solar. Se espera que este hallazgo contribuya al estudio de la biodiversidad en la región"
      },
      {
        titulo:"Uso Excesivo de Redes Sociales",
        imagen:"https://www.portafolio.co/files/article_main/uploads/2016/02/05/56b54689ac705.jpeg",
        descripcion:"Estudio Revela: El Uso Excesivo de Redes Sociales Afecta la Salud Mental de Jóvenes. Investigadores señalan un aumento significativo en ansiedad y estrés entre usuarios frecuentes, destacando la necesidad de un equilibrio digital para preservar el bienestar emocional."
      },
      {
        titulo:"Aumentan Conflictos",
        imagen:"https://www.eluniverso.com/resizer/s0mGz9YehZ5K3upYYxax9twlau4=/640x360/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6IYSBO2IIREIFNFXW4G4SMNX7A.jpg",
        descripcion:"Escalada de Tensiones: Aumentan Conflictos en la Región XYZ, Aumentando Temores de una Guerra Civil Inminente. Facciones opuestas se enfrentan, provocando preocupación internacional. Llamamientos urgentes a la mediación para evitar un conflicto a gran escala y proteger la estabilidad regional."
      }


   ];


}
