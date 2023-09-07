import type { Config } from "@jest/types";

const configuration: Config.InitialOptions = {
  transform: {},
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
};

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default configuration;
