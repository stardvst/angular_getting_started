import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';

	imageWidth: number = 50;
	imageMargin: number = 2;

	showImage: boolean = false;

	filteredProducts: IProduct[];

	errorMessage: string = "";

	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;

		// logic
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	products: IProduct[];

	// Angular Injector will inject the service upon initialization of component
	constructor(private _productService: ProductService) {

	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) =>
			product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}

	ngOnInit(): void {
		this._productService.getProducts()
			.subscribe(
				products => {
					this.products = products;

					// set filtered products AFTER all products are known
					this.filteredProducts = this.products;
				},
				error => this.errorMessage = <any>error
			);
	}
}