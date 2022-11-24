import * as React from 'react';

// @ts-ignore
function FunctionComponent({
  // @ts-ignore
  onPress,
  // @ts-ignore
  onLongPress,
}) {
  return null;
}

export class MarkupView extends React.PureComponent {
  /**
   * @override
   */
  state = {
    fooState: false,
  };

  /**
   * @override
   */
  componentDidMount() {}

  /**
   * @override
   * @param {any} _previousProps
   * @param {any} _previousState
   */
  componentDidUpdate(_previousProps, _previousState) {}

  handlePress = () => null;

  /**
   * @override
   */
  render() {
    return this.state.fooState ? <FunctionComponent onLongPress={() => null} onPress={this.handlePress} /> : null;
  }
}
