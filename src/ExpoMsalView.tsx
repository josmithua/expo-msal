import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

export type ExpoMsalViewProps = {
  name: number;
};

type ExpoMsalViewState = {}

const NativeView: React.ComponentType<ExpoMsalViewProps> =
  requireNativeViewManager('ExpoMsal');

export default class ExpoMsalView extends React.Component<ExpoMsalViewProps, ExpoMsalViewState> {
  render() {
    return <NativeView name={this.props.name} />;
  }
}
