import { WebPlugin } from '@capacitor/core';

import type { JailbrakeRootDetectionPlugin } from './definitions';

export class JailbrakeRootDetectionWeb
  extends WebPlugin
  implements JailbrakeRootDetectionPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
