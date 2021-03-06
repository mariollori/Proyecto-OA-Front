import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material/core';

import {MatStepperModule} from '@angular/material/stepper';
import { HomeComponent } from './home/homepage/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatGridListModule, MatPaginatorModule, MatRadioModule, MatSelectModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';

import { NavComponent } from './navbar/nav/nav.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { LoginpsiComponent } from './Login/loginpsi/loginpsi.component';
import { RegistroPacienteComponent } from './registros/registro-paciente/registro-paciente.component';
import { DatosUserComponent } from './pages/Perfil/datos-user/datos-user.component';
import { GestOpComponent } from './pages/gest-op/gest-op.component';
import { AuthInterceptorService } from './interceptor/auth-interceptor.service';
import { SpinnerLoaderComponent } from './snipper/spinner-loader/spinner-loader.component';
import { SpinnerBlancComponent } from './snipper/spinner-blanc/spinner-blanc.component';
import { RegistrarAtencionComponent } from './pages/registrar_atencion/registrar-atencion/registrar-atencion.component';
import {MatCardModule} from '@angular/material/card';
import { GestUsersComponent } from './pages/gest-users/gest-users/gest-users.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { MatSortModule } from '@angular/material/sort';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { PastorComponent } from './asignacion/pastor/pastor.component';
import { PsicologoComponent } from './asignacion/psicologo/psicologo.component';
import { EstudianteComponent } from './asignacion/estudiante/estudiante.component';

import { RegDatoPsicologoComponent } from './reg-dato-psicologo/reg-dato-psicologo.component';



import { ReportesComponent } from './reportes/reportes/reportes.component';
import { ChartsModule, ThemeService } from 'ng2-charts';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AsignacionComponent,
    PastorComponent,
    PsicologoComponent,
    EstudianteComponent,

    NavComponent,
    

    LoginpsiComponent,
    RegistroPacienteComponent,
    DatosUserComponent,
    GestOpComponent,
    SpinnerLoaderComponent,
    SpinnerBlancComponent,
    RegistrarAtencionComponent,
    GestUsersComponent,

    ReportesComponent,

  
 
    RegDatoPsicologoComponent,

  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSortModule,
   
    ChartsModule,
    MatTooltipModule,
    MatCardModule,
    MatSlideToggleModule,
    MatTabsModule,
    CommonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSidenavModule,

    MatGridListModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,

    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  entryComponents : [  ] ,
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  },ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
