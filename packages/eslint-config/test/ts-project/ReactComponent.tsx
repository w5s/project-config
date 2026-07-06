import * as React from 'react';

const ignore = (anyValue: unknown) => anyValue;
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

  override componentDidUpdate(_previousProps: ReactComponentProps, _previousState: ReactComponentState): void {}

  handlePress = () => null;

  override render(): React.ReactNode {
    return this.state.fooState
      ? (
          <FunctionComponent onLongPress={() => null} onPress={this.handlePress}>
            {this.props.foo}
          </FunctionComponent>
        )
      : null;
  }
}

function FunctionComponent(props: { children?: React.ReactNode; onLongPress: () => void; onPress: () => void }) {
  ignore(props.onLongPress);
  ignore(props.onPress);
  ignore(props.children);
  return null;
}
