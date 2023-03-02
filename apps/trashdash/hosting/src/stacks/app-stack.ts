import * as cdk from '@aws-cdk/core';

export class AppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const envParam = new cdk.CfnParameter(this, 'Environment', {
      type: 'String',
      description: 'The deployment environment',
      default: 'dev',
    });

    const environmentMapping = 'EnvironmentMapping';
    new cdk.CfnMapping(this, environmentMapping, {
      mapping: {
        dev: {
          'configA': 'dev-config-value',
        },
        prod: {
          'configA': 'prod-config-value',
        },
      },
    });
  }
}
