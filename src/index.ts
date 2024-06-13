import { registerPlugin } from '@capacitor/core';

import type { JailbrakeRootDetectionPlugin } from './definitions';

const JailbrakeRootDetection = registerPlugin<JailbrakeRootDetectionPlugin>(
  'JailbrakeRootDetection',
  {
    web: () => import('./web').then(m => new m.JailbrakeRootDetectionWeb()),
  },
);

export * from './definitions';
export { JailbrakeRootDetection };
