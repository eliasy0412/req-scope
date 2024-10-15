/// <reference types="node" />

declare module './core/services/client-inspector.service';

declare function clientUse(): any;

declare function clientInspector(req: any): Promise<any>;

export default Module = {
  clientUse,
  clientInspector
};
