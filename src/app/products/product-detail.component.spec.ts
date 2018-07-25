import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertToSpacesPipe } from "./../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from "./../shared/shared.module";
import { RouterTestingModule } from '@angular/router/testing';
import { ProductGuardService } from "./product-guard.service";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";

describe('ProductDetailComponent', () => {
    let component: ProductDetailComponent;
    let fixture: ComponentFixture<ProductDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductDetailComponent, ConvertToSpacesPipe],
            imports: [
                SharedModule,
                RouterTestingModule,
                HttpClientModule
            ],
            providers: [
                ProductGuardService,
                ProductService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
