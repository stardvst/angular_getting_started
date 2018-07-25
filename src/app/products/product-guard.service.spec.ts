import { TestBed, inject } from '@angular/core/testing';

import { ProductGuardService } from './product-guard.service';
import { RouterModule } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule,
                RouterTestingModule
            ],
            providers: [ProductGuardService]
        });
    });

    it('should be created', inject([ProductGuardService], (service: ProductGuardService) => {
        expect(service).toBeTruthy();
    }));
});
