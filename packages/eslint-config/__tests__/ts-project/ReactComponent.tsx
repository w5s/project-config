import * as React from 'react';

function FunctionComponent(props: { onPress: () => void; onLongPress: () => void }) {
  return null;
}

type ReactComponentProps = {
  foo: boolean;
};

type ReactComponentState = {
  fooState: boolean;
};

export class MarkupView extends React.PureComponent<ReactComponentProps, ReactComponentState> {
  override state: ReactComponentState = {
    fooState: false,
  };

  override componentDidMount(): void {}

  override componentDidUpdate(previousProps: ReactComponentProps, previousState: ReactComponentState): void {}

  handlePress = () => null;

  override render(): React.ReactNode {
    return this.state.fooState ? <FunctionComponent onLongPress={() => null} onPress={this.handlePress} /> : null;
  }
}
