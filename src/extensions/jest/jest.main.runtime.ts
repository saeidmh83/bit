import { JestAspect } from './jest.aspect';
import { MainRuntime } from '../cli/cli.aspect';
import { JestTester } from './jest.tester';

export class JestMain {
  static id = '@teambit/jest';
  static runtime = MainRuntime;
  static dependencies = [];

  createTester(jestConfig: any) {
    return new JestTester(jestConfig);
  }

  static provider() {
    return new JestMain();
  }
}

JestAspect.addRuntime(JestMain);