import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BannerComponent, ProductComponent, ProductSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'PracticaAngular';

  productsSection1 = [
    { image: 'assets/imagen1.jpg', name: 'Cupcake con viruticas', price: '$4.99' },
    { image: 'assets/imagen2.jpg', name: 'Cupcake de nata y cereza', price: '$6.99' },
    { image: 'assets/imagen3.jpg', name: 'Cupcake de fresa', price: '$9.99' },
  ];

  productsSection2 = [
    { image: 'assets/imagen4.jpg', name: 'Cupcake red velvet', price: '$7.99' },
    { image: 'assets/imagen5.jpg', name: 'Cupcake de limón', price: '$8.99' },
    { image: 'assets/imagen6.jpg', name: 'Cupcake de turrón', price: '$12.99' },
  ];
}
