import { StoreDevtoolsModule } from '@ngrx/store-devtools';
export const modules = [
  StoreDevtoolsModule.instrument({
    maxAge: 20,
    logOnly: false,
  }),
];
