import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.componenet.html'
})

export class ProductComponent {
    @Input() product: IProduct

    details = false
}