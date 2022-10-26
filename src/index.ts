import { LoadContext } from '@docusaurus/types';
import { KrokiOptions, transform } from './transform';

const plugin = (context: LoadContext, options: KrokiOptions) => {
  return transform(context, options);
};

export = plugin;
