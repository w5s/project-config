import * as React from 'react';

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
   * @param {unknown} _previousProps
   * @param {unknown} _previousState
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

// @ts-ignore
function FunctionComponent({
  // @ts-ignore
  onLongPress,
  // @ts-ignore
  onPress,
}) {
  return null;
}
