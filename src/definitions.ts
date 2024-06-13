export interface JailbrakeRootDetectionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
