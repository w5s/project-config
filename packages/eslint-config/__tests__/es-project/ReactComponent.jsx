import * as React from 'react';

function FunctionComponent({
  // @ts-ignore
  onPress,
  // @ts-ignore
  onLongPress,
}) {
  return null;
}

export class MarkupView extends React.PureComponent {
  state = {
    fooState: false,
  };

  componentDidMount() {}

  /**
   * @param {any} _previousProps
   * @param {any} _previousState
   */
  componentDidUpdate(_previousProps, _previousState) {}

  handlePress = () => {
    return null;
  };

  render() {
    return this.state.fooState ? (
      <FunctionComponent
        onLongPress={() => {
          return null;
        }}
        onPress={this.handlePress}
      />
    ) : null;
  }
}
