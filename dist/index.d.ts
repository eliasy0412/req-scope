/// <reference types="node" />

declare module './core/services/client-inspector.service';

declare function clientUse(): void;

declare function clientInspector(req: any): Promise<any>;

export default {
  clientUse,
  clientInspector
};
