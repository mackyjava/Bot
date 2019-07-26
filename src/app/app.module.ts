import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatButtonToggleModule, MatDividerModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBotComponent } from './components/bot/bot-footer/footer-bot.component';
import { BubblesComponent } from './components/bot/bubbles/bubbles-component';
import { SafeResourcePipe } from './shared/pipes/safe-resource.pipe';
import { MainComponent } from './views/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { FormCustomComponent } from './components/form-custom/form-custom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotContainerComponent } from './components/bot/bot-container/bot-container.component';
import { NavBotComponent } from './components/bot/nav-bot/nav-bot.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterBotComponent,
    NavBotComponent,
    BotContainerComponent,
    BubblesComponent,
    SafeResourcePipe,
    MainComponent,
    FormCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    DragDropModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
