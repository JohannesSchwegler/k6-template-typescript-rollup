# K6 Load Tests

Contains a setup to run load tests against a local or remote machine.

## Requirements

Make sure to pull the latest k6-image

```sh
docker pull grafana/k6
```

See https://k6.io/docs/get-started/installation/



## Running the test


To run the load tests, we first have to transpile the TypeScript code into JavaScript and bundle the project.

By running the already setup script "loadtest", the provided loadTest.ts file will be transpiled to js and executed with k6.

When the script is done running, the dist folder and the .js file is deleted.

```bash
$ npm run loadtest
```
