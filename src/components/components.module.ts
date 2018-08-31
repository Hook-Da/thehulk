import { NgModule } from '@angular/core';
import { FcompComponent } from './fcomp/fcomp';
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	declarations: [FcompComponent,
    ProgressBarComponent],
	imports: [],
	exports: [FcompComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
