import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  JsonSchemaFormModule,
  MaterialDesignFrameworkModule,
} from 'projects/json-schema-form/src/public_api';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule,
} from '../../node_modules/@angular/material';
import { AceEditorDirective } from './ace-editor.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AceEditorDirective,
    // JsonSchemaFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MaterialDesignFrameworkModule,
    JsonSchemaFormModule.forRoot(MaterialDesignFrameworkModule),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
