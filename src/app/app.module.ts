import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicRingComponent } from './dynamic-ring/dynamic-ring.component';
import { StatsTableComponent } from './stats-table/stats-table.component';
import { SettingsComponent } from './settings/settings.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignComponent } from './design/design.component';
import { VisModule } from './vis/vis.module';
import { NgChartsModule } from 'ng2-charts';
import { WatcherComponent } from './watcher/watcher.component';
import { DragulaModule } from 'ng2-dragula';
import { RofCircleComponent } from './rof-circle/rof-circle.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { 
  url: environment.WS_ENDPOINT ? environment.WS_ENDPOINT : "", 
  options: { 
    transports: ['websocket'], 
    reconnection: true 
  }  
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicRingComponent,
    StatsTableComponent,
    SettingsComponent,
    NavigationComponent,
    DesignComponent,
    WatcherComponent,
    RofCircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    VisModule,
    NgChartsModule,
    DragulaModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
