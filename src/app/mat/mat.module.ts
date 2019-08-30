import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as Mat from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const matMod = [
  ReactiveFormsModule,
  Mat.MatToolbarModule,
  Mat.MatFormFieldModule,
  Mat.MatInputModule,
  Mat.MatCardModule,
  Mat.MatButtonModule,
  Mat.MatGridListModule,
  Mat.MatTooltipModule,
  Mat.MatTabsModule,
  Mat.MatListModule,
  Mat.MatIconModule,
  Mat.MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [...matMod]
  ],
  exports: [
    CommonModule,
    [...matMod]
  ]
})
export class MatModule { }
