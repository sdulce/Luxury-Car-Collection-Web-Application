import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-car-list',
  imports: [RouterModule, FormsModule, CommonModule], 
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  searchTerm: string = ''; 

  cars = [
    {
      brand: 'Ferrari',
      model: '812 Superfast',
      year: 2023,
      price: '$330,000',
      color: 'Ruby Red',
      horsepower: 789,
      image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/04/ferrari-812-gts-red.jpg',
      description: 'A front-engine V12 masterpiece with blistering acceleration and elegant Italian styling.'
    },
    {
      brand: 'Lamborghini',
      model: 'Huracán EVO',
      year: 2022,
      price: '$261,274',
      color: 'Black Obsidian',
      horsepower: 631,
      image: 'https://www.ilusso.com/imagetag/2366/main/l/Used-2022-Lamborghini-Huracan-EVO-Spyder-1695940950.jpg',
      description: 'An aggressive V10 supercar with cutting-edge dynamics and unmistakable design.'
    },
    {
      brand: 'Rolls-Royce',
      model: 'Phantom',
      year: 2023,
      price: '$460,000',
      color: 'Night Turquoise',
      horsepower: 563,
      image: 'https://media.ed.edmunds-media.com/rolls-royce/ghost/2023/oem/2023_rolls-royce_ghost_sedan_black-badge_fq_oem_1_1280.jpg',
      description: 'The pinnacle of luxury, offering a whisper-quiet ride and unmatched presence.'
    },
    {
      brand: 'Bentley',
      model: 'Continental GT',
      year: 2023,
      price: '$240,000',
      color: 'Pearl White',
      horsepower: 626,
      image: 'https://wallpaperaccess.com/full/1603724.jpg',
      description: 'A refined grand tourer that blends comfort, craftsmanship, and power beautifully.'
    },
    {
      brand: 'Aston Martin',
      model: 'DB11',
      year: 2022,
      price: '$205,600',
      color: 'Silver Moon',
      horsepower: 528,
      image: 'https://media.ed.edmunds-media.com/aston-martin/db11/2021/oem/2021_aston-martin_db11_convertible_v8-volante_fq_oem_1_1600.jpg',
      description: 'An elegant British sports coupe with timeless design and a throaty V8.'
    },
    {
      brand: 'Porsche',
      model: '911 Turbo S',
      year: 2023,
      price: '$230,400',
      color: 'Grey Sky',
      horsepower: 640,
      image: 'https://4kwallpapers.com/images/wallpapers/porsche-911-turbo-s-1920x1080-12445.jpg',
      description: 'A legendary all-wheel-drive sports car with precise handling and track-ready power.'
    }
  ];

  get filteredCars() {
    const term = this.searchTerm.toLowerCase();
    return this.cars.filter(car =>
      car.brand.toLowerCase().includes(term) ||
      car.model.toLowerCase().includes(term)
    );
  }
}
