/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { Prompter } from './components/prompt/prompt';
export namespace Components {
  interface StellarPrompt {
    prompter: Prompter;
  }
  interface StellarWallet {}
}
declare global {
  interface HTMLStellarPromptElement extends Components.StellarPrompt, HTMLStencilElement {}
  var HTMLStellarPromptElement: {
    prototype: HTMLStellarPromptElement;
    new (): HTMLStellarPromptElement;
  };
  interface HTMLStellarWalletElement extends Components.StellarWallet, HTMLStencilElement {}
  var HTMLStellarWalletElement: {
    prototype: HTMLStellarWalletElement;
    new (): HTMLStellarWalletElement;
  };
  interface HTMLElementTagNameMap {
    'stellar-prompt': HTMLStellarPromptElement;
    'stellar-wallet': HTMLStellarWalletElement;
  }
}
declare namespace LocalJSX {
  interface StellarPrompt {
    prompter?: Prompter;
  }
  interface StellarWallet {}
  interface IntrinsicElements {
    'stellar-prompt': StellarPrompt;
    'stellar-wallet': StellarWallet;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'stellar-prompt': LocalJSX.StellarPrompt & JSXBase.HTMLAttributes<HTMLStellarPromptElement>;
      'stellar-wallet': LocalJSX.StellarWallet & JSXBase.HTMLAttributes<HTMLStellarWalletElement>;
    }
  }
}
