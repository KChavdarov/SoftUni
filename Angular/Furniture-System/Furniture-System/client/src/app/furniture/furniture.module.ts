import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture-user/furniture-user.component';
import { furnitureRoutingModule } from './furniture-routing.module';
import { FurnitureService } from './furniture.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FurnitureAllComponent, FurnitureCreateComponent, FurnitureDetailsComponent, FurnitureUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    furnitureRoutingModule
  ],
  providers: [
    FurnitureService,
  ],
})
export class FurnitureModule {}
