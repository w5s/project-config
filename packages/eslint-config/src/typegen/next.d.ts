/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce font-display behavior with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-display
   */
  'next/google-font-display'?: Linter.RuleEntry<[]>
  /**
   * Ensure `preconnect` is used with Google Fonts.
   * @see https://nextjs.org/docs/messages/google-font-preconnect
   */
  'next/google-font-preconnect'?: Linter.RuleEntry<[]>
  /**
   * Enforce `id` attribute on `next/script` components with inline content.
   * @see https://nextjs.org/docs/messages/inline-script-id
   */
  'next/inline-script-id'?: Linter.RuleEntry<[]>
  /**
   * Prefer `@next/third-parties/google` when using the inline script for Google Analytics and Tag Manager.
   * @see https://nextjs.org/docs/messages/next-script-for-ga
   */
  'next/next-script-for-ga'?: Linter.RuleEntry<[]>
  /**
   * Prevent assignment to the `module` variable.
   * @see https://nextjs.org/docs/messages/no-assign-module-variable
   */
  'next/no-assign-module-variable'?: Linter.RuleEntry<[]>
  /**
   * Prevent Client Components from being async functions.
   * @see https://nextjs.org/docs/messages/no-async-client-component
   */
  'next/no-async-client-component'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
   */
  'next/no-before-interactive-script-outside-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent manual stylesheet tags.
   * @see https://nextjs.org/docs/messages/no-css-tags
   */
  'next/no-css-tags'?: Linter.RuleEntry<[]>
  /**
   * Prevent importing `next/document` outside of `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-document-import-in-page
   */
  'next/no-document-import-in-page'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate usage of `<Head>` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-duplicate-head
   */
  'next/no-duplicate-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<head>` element.
   * @see https://nextjs.org/docs/messages/no-head-element
   */
  'next/no-head-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/head` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-head-import-in-document
   */
  'next/no-head-import-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<a>` elements to navigate to internal Next.js pages.
   * @see https://nextjs.org/docs/messages/no-html-link-for-pages
   */
  'next/no-html-link-for-pages'?: Linter.RuleEntry<NextNoHtmlLinkForPages>
  /**
   * Prevent usage of `<img>` element due to slower LCP and higher bandwidth.
   * @see https://nextjs.org/docs/messages/no-img-element
   */
  'next/no-img-element'?: Linter.RuleEntry<[]>
  /**
   * Prevent page-only custom fonts.
   * @see https://nextjs.org/docs/messages/no-page-custom-font
   */
  'next/no-page-custom-font'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `next/script` in `next/head` component.
   * @see https://nextjs.org/docs/messages/no-script-component-in-head
   */
  'next/no-script-component-in-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `styled-jsx` in `pages/_document.js`.
   * @see https://nextjs.org/docs/messages/no-styled-jsx-in-document
   */
  'next/no-styled-jsx-in-document'?: Linter.RuleEntry<[]>
  /**
   * Prevent synchronous scripts.
   * @see https://nextjs.org/docs/messages/no-sync-scripts
   */
  'next/no-sync-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `<title>` with `Head` component from `next/document`.
   * @see https://nextjs.org/docs/messages/no-title-in-document-head
   */
  'next/no-title-in-document-head'?: Linter.RuleEntry<[]>
  /**
   * Prevent common typos in Next.js data fetching functions.
   */
  'next/no-typos'?: Linter.RuleEntry<[]>
  /**
   * Prevent duplicate polyfills from Polyfill.io.
   * @see https://nextjs.org/docs/messages/no-unwanted-polyfillio
   */
  'next/no-unwanted-polyfillio'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- next/no-html-link-for-pages -----
type NextNoHtmlLinkForPages = []|[(string | string[])]