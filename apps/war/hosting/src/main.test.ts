import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { AppStack } from './stacks/app-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AppStack(app, 'war-hostingTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Parameters: {
          Environment: {
            Type: 'String',
            Default: 'dev',
            Description: 'The deployment environment',
          },
        },
        Mappings: {
          EnvironmentMapping: {
            dev: {
              'config-parameter': 'dev-config-value',
            },
            prod: {
              'config-parameter': 'prod-config-value',
            },
          },
        },
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
