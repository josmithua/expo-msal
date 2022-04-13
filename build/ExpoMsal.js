import { NativeModulesProxy } from 'expo-modules-core';
import ExpoMsalView from './ExpoMsalView';
const { ExpoMsal } = NativeModulesProxy;
export async function helloAsync(options) {
    return await ExpoMsal.helloAsync(options);
}
export { ExpoMsalView };
//# sourceMappingURL=ExpoMsal.js.map