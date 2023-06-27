import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { WecomeComponent } from './Fold1/wecome.component';
import { DetailsComponent } from './parent/details/details.component';
import { MyPipePipe } from './parent/my-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { ParenttGuard } from './parent/parentt.guard';
import { ChiguardGuard } from './child/chiguard.guard';
// import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './Contact/Contact.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ContextParentComponent } from './contextParent/contextParent.component';
import { ContextChildComponent } from './contextChild/contextChild.component';
import { ServiceCheckComponent } from './ServiceCheck/ServiceCheck.component';

@NgModule({
  declarations: [					
    AppComponent,
    ParentComponent,
    ChildComponent,
    WecomeComponent,
    DetailsComponent,MyPipePipe,
      ContactComponent,
      ResponsiveComponent,
      ContextParentComponent,
      ContextChildComponent,
      ServiceCheckComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot([
      {path:'welcome',component:WecomeComponent},
      {path:'Parent',component:ParentComponent},
      {path:'contact',component:ContactComponent},
      {path:'responsive',component:ResponsiveComponent},
      {path:'context',component:ContextParentComponent},
      {path:'Child',canDeactivate:[ChiguardGuard ],component:ChildComponent},
      {path:'Parent/:id',canActivate:[ParenttGuard],component:DetailsComponent },
      {path:"",redirectTo:'welcome',pathMatch:'full'},
      {path:"**",redirectTo:'welcome',pathMatch:'full'}
      
    ]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
