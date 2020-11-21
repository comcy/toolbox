import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// feature module route segments
export const storageModuleRouteSegment = 'storages';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: storageModuleRouteSegment,
        pathMatch: 'full'
    },
    {
        path: storageModuleRouteSegment,
        loadChildren: () => import('./modules/storage/storage.module').then(m => m.StorageModule),
        // canActivate: [AuthGuardService]
        // canLoad: [AuthGuardService] // TODO @IVCSI enable when platform provides new package
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        enableTracing: true,
        paramsInheritanceStrategy: 'always',
        // onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
