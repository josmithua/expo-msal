import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('ExpoMsal');
export default class ExpoMsalView extends React.Component {
    render() {
        return React.createElement(NativeView, { name: this.props.name });
    }
}
//# sourceMappingURL=ExpoMsalView.js.map