export enum Environment {
  LOCAL,
}

// TODO: Set the environment as a global constant and remove the argument
export function getEndpointUrl(env: Environment): string {
  switch (env) {
    case Environment.LOCAL:
      return 'http://localhost:3005';
    default:
      throw new Error(`No endpoint specified for environment ${env}`);
  }
}