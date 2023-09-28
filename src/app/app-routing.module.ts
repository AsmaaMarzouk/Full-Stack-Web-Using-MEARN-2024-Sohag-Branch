import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserAuthenComponent } from './Components/user-authen/user-authen.component';
import { UserTemplateDrivenFormComponent } from './Components/Users/user-template-driven-form/user-template-driven-form.component';
import { UserReactiveFormComponent } from './Components/Users/user-reactive-form/user-reactive-form.component';
import { userGuard } from './Guards/user.guard';

// first match wins

const routes: Routes = [
  // {path:'', component:MainComponent},// default path
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default path
  { path: 'Home', component: MainComponent, title: 'Home Page' },
  {
    path: 'Products',
    component: ProductsListComponent,
    title: 'Products List Page',
  },
  {
    path: 'ProductsParent',
    component: ProductsParentComponent,
    title: 'Products Parent Page',
    canActivate:[userGuard]
  },
  { path: 'AboutUs', component: AboutUsComponent, title: 'About Us Page' },
  {path:'ProductDetails/:prodID',component: ProductDetailsComponent, title: 'Product Details Page'},
  {
    path: 'Order',
    loadChildren: () => import('src/app/Components/orders/orders.module').then(m => m.OrdersModule)
  },

  {path:"UserLogin",component:UserAuthenComponent,title: "User Login Page"},
  {path:"UserLogOut",component:UserAuthenComponent,title: "User Logout Page"},
  {path:"UserTemplateForm",component:UserTemplateDrivenFormComponent,title: "User Template Form"},
  {path:"UserReactiveForm",component:UserReactiveFormComponent,title: "User Reactive Form"},
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, //not found page //wildcard path
];


// const routes: Routes = [
//   {path:'main',component:GroupOfRoutesComponent,children:[
//     { path: 'Home', component: MainComponent, title: 'Home Page' },
//     {
//       path: 'Products',
//       component: ProductsListComponent,
//       title: 'Products List Page',
//     },
//     {
//       path: 'ProductsParent',
//       component: ProductsParentComponent,
//       title: 'Products Parent Page',
//     },
//     { path: 'AboutUs', component: AboutUsComponent, title: 'About Us Page' },
//   ]},
//   { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' }, //not found page //wildcard path
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
