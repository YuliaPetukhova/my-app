import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { IProduct } from './models/product';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
