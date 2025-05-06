import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  imports: [CommonModule, RouterModule]
})
export class CarDetailComponent {
  car: any;

  allCars = [
    {
      brand: 'Ferrari',
      model: '812 Superfast',
      year: 2023,
      price: '$330,000',
      color: 'Ruby Red',
      horsepower: 789,
      image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/04/ferrari-812-gts-red.jpg',
      description: 'The 812 Superfast lives up to its name with a naturally aspirated V12 engine, delivering raw performance wrapped in sleek Ferrari luxury.',
      locations: ['Los Angeles', 'Miami']
    },
    {
      brand: 'Lamborghini',
      model: 'Huracán EVO',
      year: 2022,
      price: '$261,274',
      color: 'Black Obsidian',
      horsepower: 631,
      image: 'https://www.ilusso.com/imagetag/2366/main/l/Used-2022-Lamborghini-Huracan-EVO-Spyder-1695940950.jpg',
      description: 'An aggressive V10 beast with aerodynamic upgrades and razor-sharp handling — engineered to thrill on both road and track.',
      locations: ['Dubai', 'Miami']
    },
    {
      brand: 'Rolls-Royce',
      model: 'Phantom',
      year: 2023,
      price: '$460,000',
      color: 'Night Turquoise',
      horsepower: 563,
      image: 'https://media.ed.edmunds-media.com/rolls-royce/ghost/2023/oem/2023_rolls-royce_ghost_sedan_black-badge_fq_oem_1_1280.jpg',
      description: 'The ultimate symbol of prestige and craftsmanship. The Phantom offers effortless power and unmatched comfort in every mile.',
      locations: ['Los Angeles']
    },
    {
      brand: 'Bentley',
      model: 'Continental GT',
      year: 2023,
      price: '$240,000',
      color: 'Pearl White',
      horsepower: 626,
      image: 'https://wallpaperaccess.com/full/1603724.jpg',
      description: 'Blending British elegance with twin-turbo muscle, the Continental GT is a grand tourer built for luxurious long-distance cruising.',
      locations: ['Miami', 'Dubai']
    },
    {
      brand: 'Aston Martin',
      model: 'DB11',
      year: 2022,
      price: '$205,600',
      color: 'Silver Moon',
      horsepower: 528,
      image: 'https://s1.cdn.autoevolution.com/images/news/gallery/the-aston-martin-db11-is-a-new-chapter-in-automotive-design_4.jpg',
      description: 'A timeless blend of beauty and performance, the DB11 turns heads with its signature grille and thrilling twin-turbocharged engine.',
      locations: ['Dubai']
    },
    {
      brand: 'Porsche',
      model: '911 Turbo S',
      year: 2023,
      price: '$230,400',
      color: 'Grey Sky',
      horsepower: 640,
      image: 'https://4kwallpapers.com/images/wallpapers/porsche-911-turbo-s-1920x1080-12445.jpg',
      description: 'A supercar disguised as a daily driver. All-wheel drive, turbocharged precision, and iconic curves make this a Porsche classic.',
      locations: ['Los Angeles', 'Miami']
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.allCars[id];
  }
}
