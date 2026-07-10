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
   * Disallows DOM elements from using 'dangerouslySetInnerHTML'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml
   */
  'react/dom-no-dangerously-set-innerhtml'?: Linter.RuleEntry<[]>
  /**
   * Disallows DOM elements from using 'dangerouslySetInnerHTML' and 'children' at the same time.
   * @see https://eslint-react.xyz/docs/rules/dom-no-dangerously-set-innerhtml-with-children
   */
  'react/dom-no-dangerously-set-innerhtml-with-children'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'findDOMNode'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-find-dom-node
   */
  'react/dom-no-find-dom-node'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'flushSync'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-flush-sync
   */
  'react/dom-no-flush-sync'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.hydrate()' with 'hydrateRoot()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-hydrate
   */
  'react/dom-no-hydrate'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'type' attribute for 'button' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-button-type
   */
  'react/dom-no-missing-button-type'?: Linter.RuleEntry<[]>
  /**
   * Enforces an explicit 'sandbox' attribute for 'iframe' elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-missing-iframe-sandbox
   */
  'react/dom-no-missing-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'ReactDOM.render()' with 'createRoot(node).render()'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render
   */
  'react/dom-no-render'?: Linter.RuleEntry<[]>
  /**
   * Disallows the return value of 'ReactDOM.render'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-render-return-value
   */
  'react/dom-no-render-return-value'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'javascript:' URLs as attribute values.
   * @see https://eslint-react.xyz/docs/rules/dom-no-script-url
   */
  'react/dom-no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of string style prop in JSX. Use an object instead.
   * @see https://eslint-react.xyz/docs/rules/dom-no-string-style-prop
   */
  'react/dom-no-string-style-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows unknown 'DOM' properties.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unknown-property
   */
  'react/dom-no-unknown-property'?: Linter.RuleEntry<ReactDomNoUnknownProperty>
  /**
   * Enforces that the 'sandbox' attribute for 'iframe' elements is not set to unsafe combinations.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-iframe-sandbox
   */
  'react/dom-no-unsafe-iframe-sandbox'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'target="_blank"' without 'rel="noreferrer noopener"'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-unsafe-target-blank
   */
  'react/dom-no-unsafe-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useFormState' with 'useActionState'.
   * @see https://eslint-react.xyz/docs/rules/dom-no-use-form-state
   */
  'react/dom-no-use-form-state'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'children' in void DOM elements.
   * @see https://eslint-react.xyz/docs/rules/dom-no-void-elements-with-children
   */
  'react/dom-no-void-elements-with-children'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/exhaustive-deps'?: Linter.RuleEntry<ReactExhaustiveDeps>
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that side effects must run outside of render.
   * @see https://eslint-react.xyz/docs/rules/globals
   */
  'react/globals'?: Linter.RuleEntry<[]>
  /**
   * Validates against passing functions that mutate captured local variables into frozen contexts such as JSX props, hook arguments, and hook return values.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-children-prop
   */
  'react/jsx-no-children-prop'?: Linter.RuleEntry<[]>
  /**
   * Disallows passing 'children' as a prop when children are also passed as nested content.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-children-prop-with-children
   */
  'react/jsx-no-children-prop-with-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents comment strings from being accidentally inserted into a JSX element's text nodes.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-comment-textnodes
   */
  'react/jsx-no-comment-textnodes'?: Linter.RuleEntry<[]>
  /**
   * Prevent patterns that cause deoptimization when using the automatic JSX runtime.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-key-after-spread
   */
  'react/jsx-no-key-after-spread'?: Linter.RuleEntry<[]>
  /**
   * Catches `$` before `{expr}` in JSX — typically from template literal `${expr}` being copy-pasted into JSX without removing the `$`. The `$` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-leaked-dollar
   */
  'react/jsx-no-leaked-dollar'?: Linter.RuleEntry<[]>
  /**
   * Catches `;` at the start of JSX text nodes — typically from accidentally placing a statement-ending `;` inside JSX. The `;` "leaks" into the rendered output.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-leaked-semicolon
   */
  'react/jsx-no-leaked-semicolon'?: Linter.RuleEntry<[]>
  /**
   * Disallow JSX namespace syntax, as React does not support them.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-namespace
   */
  'react/jsx-no-namespace'?: Linter.RuleEntry<[]>
  /**
   * Disallows useless fragment elements.
   * @see https://eslint-react.xyz/docs/rules/jsx-no-useless-fragment
   */
  'react/jsx-no-useless-fragment'?: Linter.RuleEntry<ReactJsxNoUselessFragment>
  /**
   * Enforces identifier names assigned from `createContext` calls to be a valid component name with the suffix `Context`.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-context-name
   */
  'react/naming-convention-context-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useId' calls to be either 'id' or end with 'Id'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-id-name
   */
  'react/naming-convention-id-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces identifier names assigned from 'useRef' calls to be either 'ref' or end with 'Ref'.
   * @see https://eslint-react.xyz/docs/rules/naming-convention-ref-name
   */
  'react/naming-convention-ref-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components and Hooks.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/no-unstable-default-props'?: Linter.RuleEntry<ReactNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about state variables that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/refs'?: Linter.RuleEntry<[]>
  /**
   * Validates and transforms React Client/Server Function definitions.
   * @see https://eslint-react.xyz/docs/rules/rsc-function-definition
   */
  'react/rsc-function-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/rules-of-hooks'?: Linter.RuleEntry<ReactRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates that components are static, not recreated every render.
   * @see https://eslint-react.xyz/docs/rules/static-components
   */
  'react/static-components'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/use-state'?: Linter.RuleEntry<ReactUseState>
  /**
   * Enforces that every 'addEventListener' in a component or custom hook has a corresponding 'removeEventListener'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-event-listener
   */
  'react/web-api-no-leaked-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'fetch' in a component or custom hook has a corresponding 'AbortController' abort in the cleanup function.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-fetch
   */
  'react/web-api-no-leaked-fetch'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'IntersectionObserver' created in a component or custom hook has a corresponding 'IntersectionObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-intersection-observer
   */
  'react/web-api-no-leaked-intersection-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setInterval' in a component or custom hook has a corresponding 'clearInterval'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-interval
   */
  'react/web-api-no-leaked-interval'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'ResizeObserver' created in a component or custom hook has a corresponding 'ResizeObserver.disconnect()'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-resize-observer
   */
  'react/web-api-no-leaked-resize-observer'?: Linter.RuleEntry<[]>
  /**
   * Enforces that every 'setTimeout' in a component or custom hook has a corresponding 'clearTimeout'.
   * @see https://eslint-react.xyz/docs/rules/web-api-no-leaked-timeout
   */
  'react/web-api-no-leaked-timeout'?: Linter.RuleEntry<[]>
  /**
   * Validates usage of Error Boundaries instead of try/catch for errors in child components.
   * @see https://eslint-react.xyz/docs/rules/error-boundaries
   */
  'react/x-error-boundaries'?: Linter.RuleEntry<[]>
  /**
   * Verifies the list of dependencies for Hooks like 'useEffect' and similar.
   * @see https://github.com/facebook/react/issues/14920
   */
  'react/x-exhaustive-deps'?: Linter.RuleEntry<ReactXExhaustiveDeps>
  /**
   * Validates against assignment/mutation of globals during render, part of ensuring that side effects must run outside of render.
   * @see https://eslint-react.xyz/docs/rules/globals
   */
  'react/x-globals'?: Linter.RuleEntry<[]>
  /**
   * Validates against passing functions that mutate captured local variables into frozen contexts such as JSX props, hook arguments, and hook return values.
   * @see https://eslint-react.xyz/docs/rules/immutability
   */
  'react/x-immutability'?: Linter.RuleEntry<[]>
  /**
   * Disallows accessing 'this.state' inside 'setState' calls.
   * @see https://eslint-react.xyz/docs/rules/no-access-state-in-setstate
   */
  'react/x-no-access-state-in-setstate'?: Linter.RuleEntry<[]>
  /**
   * Disallows using an item's index in the array as its key.
   * @see https://eslint-react.xyz/docs/rules/no-array-index-key
   */
  'react/x-no-array-index-key'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.count' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-count
   */
  'react/x-no-children-count'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.forEach' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-for-each
   */
  'react/x-no-children-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.map' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-map
   */
  'react/x-no-children-map'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.only' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-only
   */
  'react/x-no-children-only'?: Linter.RuleEntry<[]>
  /**
   * Disallows the use of 'Children.toArray' from the 'react' package.
   * @see https://eslint-react.xyz/docs/rules/no-children-to-array
   */
  'react/x-no-children-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallows class components except for error boundaries.
   * @see https://eslint-react.xyz/docs/rules/no-class-component
   */
  'react/x-no-class-component'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'cloneElement'.
   * @see https://eslint-react.xyz/docs/rules/no-clone-element
   */
  'react/x-no-clone-element'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillMount' with 'UNSAFE_componentWillMount'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-mount
   */
  'react/x-no-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillReceiveProps' with 'UNSAFE_componentWillReceiveProps'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-receive-props
   */
  'react/x-no-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'componentWillUpdate' with 'UNSAFE_componentWillUpdate'.
   * @see https://eslint-react.xyz/docs/rules/no-component-will-update
   */
  'react/x-no-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of '<Context.Provider>' with '<Context>'.
   * @see https://eslint-react.xyz/docs/rules/no-context-provider
   */
  'react/x-no-context-provider'?: Linter.RuleEntry<[]>
  /**
   * Disallows 'createRef' in function components and Hooks.
   * @see https://eslint-react.xyz/docs/rules/no-create-ref
   */
  'react/x-no-create-ref'?: Linter.RuleEntry<[]>
  /**
   * Disallows direct mutation of 'this.state'.
   * @see https://eslint-react.xyz/docs/rules/no-direct-mutation-state
   */
  'react/x-no-direct-mutation-state'?: Linter.RuleEntry<[]>
  /**
   * Prevents duplicate 'key' props on sibling elements when rendering lists.
   * @see https://eslint-react.xyz/docs/rules/no-duplicate-key
   */
  'react/x-no-duplicate-key'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'forwardRef' with passing 'ref' as a prop.
   * @see https://eslint-react.xyz/docs/rules/no-forward-ref
   */
  'react/x-no-forward-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'children' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-children
   */
  'react/x-no-implicit-children'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'key' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-key
   */
  'react/x-no-implicit-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents implicitly passing the 'ref' prop to components.
   * @see https://eslint-react.xyz/docs/rules/no-implicit-ref
   */
  'react/x-no-implicit-ref'?: Linter.RuleEntry<[]>
  /**
   * Prevents problematic leaked values from being rendered.
   * @see https://eslint-react.xyz/docs/rules/no-leaked-conditional-rendering
   */
  'react/x-no-leaked-conditional-rendering'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all components have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-component-display-name
   */
  'react/x-no-missing-component-display-name'?: Linter.RuleEntry<[]>
  /**
   * Enforces that all contexts have a 'displayName' that can be used in DevTools.
   * @see https://eslint-react.xyz/docs/rules/no-missing-context-display-name
   */
  'react/x-no-missing-context-display-name'?: Linter.RuleEntry<[]>
  /**
   * Disallows missing 'key' on items in list rendering.
   * @see https://eslint-react.xyz/docs/rules/no-missing-key
   */
  'react/x-no-missing-key'?: Linter.RuleEntry<[]>
  /**
   * Prevents incorrect usage of 'captureOwnerStack'.
   * @see https://eslint-react.xyz/docs/rules/no-misused-capture-owner-stack
   */
  'react/x-no-misused-capture-owner-stack'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting component definitions inside other components.
   * @see https://eslint-react.xyz/docs/rules/no-nested-component-definitions
   */
  'react/x-no-nested-component-definitions'?: Linter.RuleEntry<[]>
  /**
   * Disallows nesting lazy component declarations inside other components or hooks.
   * @see https://eslint-react.xyz/docs/rules/no-nested-lazy-component-declarations
   */
  'react/x-no-nested-lazy-component-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidMount' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-mount
   */
  'react/x-no-set-state-in-component-did-mount'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentDidUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-did-update
   */
  'react/x-no-set-state-in-component-did-update'?: Linter.RuleEntry<[]>
  /**
   * Disallows calling 'this.setState' in 'componentWillUpdate' outside functions such as callbacks.
   * @see https://eslint-react.xyz/docs/rules/no-set-state-in-component-will-update
   */
  'react/x-no-set-state-in-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Enforces that a function with the 'use' prefix uses at least one Hook inside it.
   * @see https://eslint-react.xyz/docs/rules/no-unnecessary-use-prefix
   */
  'react/x-no-unnecessary-use-prefix'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillMount' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-mount
   */
  'react/x-no-unsafe-component-will-mount'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillReceiveProps' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-receive-props
   */
  'react/x-no-unsafe-component-will-receive-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about the use of 'UNSAFE_componentWillUpdate' in class components.
   * @see https://eslint-react.xyz/docs/rules/no-unsafe-component-will-update
   */
  'react/x-no-unsafe-component-will-update'?: Linter.RuleEntry<[]>
  /**
   * Prevents non-stable values (i.e., object literals) from being used as a value for 'Context.Provider'.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-context-value
   */
  'react/x-no-unstable-context-value'?: Linter.RuleEntry<[]>
  /**
   * Prevents using referential-type values as default props in object destructuring.
   * @see https://eslint-react.xyz/docs/rules/no-unstable-default-props
   */
  'react/x-no-unstable-default-props'?: Linter.RuleEntry<ReactXNoUnstableDefaultProps>
  /**
   * Warns about unused class component methods and properties.
   * @see https://eslint-react.xyz/docs/rules/no-unused-class-component-members
   */
  'react/x-no-unused-class-component-members'?: Linter.RuleEntry<[]>
  /**
   * Warns about component props that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-props
   */
  'react/x-no-unused-props'?: Linter.RuleEntry<[]>
  /**
   * Warns about state variables that are defined but never used.
   * @see https://eslint-react.xyz/docs/rules/no-unused-state
   */
  'react/x-no-unused-state'?: Linter.RuleEntry<[]>
  /**
   * Replaces usage of 'useContext' with 'use'.
   * @see https://eslint-react.xyz/docs/rules/no-use-context
   */
  'react/x-no-use-context'?: Linter.RuleEntry<[]>
  /**
   * Validates that components and hooks are pure by checking that they do not call known-impure functions during render.
   * @see https://eslint-react.xyz/docs/rules/purity
   */
  'react/x-purity'?: Linter.RuleEntry<[]>
  /**
   * Validates correct usage of refs by checking that 'ref.current' is not read or written during render.
   * @see https://eslint-react.xyz/docs/rules/refs
   */
  'react/x-refs'?: Linter.RuleEntry<[]>
  /**
   * Enforces the Rules of Hooks.
   * @see https://react.dev/reference/rules/rules-of-hooks
   */
  'react/x-rules-of-hooks'?: Linter.RuleEntry<ReactXRulesOfHooks>
  /**
   * Validates against setting state synchronously in an effect, which can lead to re-renders that degrade performance.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-effect
   */
  'react/x-set-state-in-effect'?: Linter.RuleEntry<[]>
  /**
   * Validates against unconditionally setting state during render, which can trigger additional renders and potential infinite render loops.
   * @see https://eslint-react.xyz/docs/rules/set-state-in-render
   */
  'react/x-set-state-in-render'?: Linter.RuleEntry<[]>
  /**
   * Validates that components are static, not recreated every render.
   * @see https://eslint-react.xyz/docs/rules/static-components
   */
  'react/x-static-components'?: Linter.RuleEntry<[]>
  /**
   * Validates against syntax that React Compiler does not support.
   * @see https://eslint-react.xyz/docs/rules/unsupported-syntax
   */
  'react/x-unsupported-syntax'?: Linter.RuleEntry<[]>
  /**
   * Validates that 'useMemo' is called with a callback that returns a value.
   * @see https://eslint-react.xyz/docs/rules/use-memo
   */
  'react/x-use-memo'?: Linter.RuleEntry<[]>
  /**
   * Enforces correct usage of 'useState', including destructuring, symmetric naming of the value and setter, and wrapping expensive initializers in a lazy initializer function.
   * @see https://eslint-react.xyz/docs/rules/use-state
   */
  'react/x-use-state'?: Linter.RuleEntry<ReactXUseState>
}

/* ======= Declarations ======= */
// ----- react/dom-no-unknown-property -----
type ReactDomNoUnknownProperty = []|[{
  ignore?: string[]
  requireDataLowercase?: boolean
}]
// ----- react/exhaustive-deps -----
type ReactExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/jsx-no-useless-fragment -----
type ReactJsxNoUselessFragment = []|[{
  
  allowEmptyFragment?: boolean
  
  allowExpressions?: boolean
}]
// ----- react/no-unstable-default-props -----
type ReactNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/rules-of-hooks -----
type ReactRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/use-state -----
type ReactUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]
// ----- react/x-exhaustive-deps -----
type ReactXExhaustiveDeps = []|[{
  additionalHooks?: string
  enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean
  experimental_autoDependenciesHooks?: string[]
  requireExplicitEffectDeps?: boolean
}]
// ----- react/x-no-unstable-default-props -----
type ReactXNoUnstableDefaultProps = []|[{
  safeDefaultProps?: string[]
}]
// ----- react/x-rules-of-hooks -----
type ReactXRulesOfHooks = []|[{
  additionalHooks?: string
}]
// ----- react/x-use-state -----
type ReactXUseState = []|[{
  enforceAssignment?: boolean
  enforceLazyInitialization?: boolean
  enforceSetterName?: boolean
}]