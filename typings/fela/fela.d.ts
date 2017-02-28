declare module "fela" {
  function createRenderer(config?: DFela.IConfig): DFela.IRenderer;
  function combineRules(...rules: Array<DFela.TRule>): DFela.TRule;
  function enhance(...enhancers: Array<DFela.TEnhancer>): (rendererCreator: DFela.TRendererCreator) => DFela.TRendererCreator;
}

declare module "fela-dom" {
  function render(renderer: DFela.IRenderer, node: HTMLElement);
}

