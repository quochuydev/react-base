declare type TODO = any;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: TODO;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: TODO;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}

declare interface System {
  import<T = TODO>(module: string): Promise<T>;
}
declare const System: System;

declare const process: TODO;
declare const require: TODO;
