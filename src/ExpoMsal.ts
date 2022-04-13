import { NativeModulesProxy } from 'expo-modules-core';

import ExpoMsalView, { ExpoMsalViewProps } from './ExpoMsalView'

const { ExpoMsal } = NativeModulesProxy;

export async function helloAsync(options: Record<string, string>) {
  return await ExpoMsal.helloAsync(options);
}

export {
  ExpoMsalView,
  ExpoMsalViewProps
};
