# Good morning.
Wake up, do some algos.

## Global dependencies;
NodeJS (reasonable version).
NodeJS installation instructions at https://nodejs.org

*Note: local latest nodejs version will be used for npm scripts*

## Init
`npm install`

## For Codewars toy problems;
1) `$ npm run create KYU_LEVEL PROBLEM_NAME FUNCTION_NAME` makes `./KYU_LEVEL'Kyu'-PROBLEM_NAME/index.ts` with `FUNCTION_NAME` in a boilerplate, Solve using RxJS, and Rambda
Example;
```bash
npm run create 8 RemoveFirstAndLastCharacter removeChar
```
2) `$ npm run build` makes `./PROBLEM_NAME/build.js`, paste contents to answer pane of your choice such as Codewars.

## For Classic Computer Science algorithms (`0-classic`);
1) Create and move to folder of an algorithm and create `index.ts`. (manually for classic problems)

## Quick run
1) `npm start` will run `index.ts` in current folder(cwd). (using ts-node)

## For testing;
1) create `spec.ts` next to `index.ts`
Example;
```
0-classic
  |- BinarySearch
    |- index.ts      ## Where solution is written
    |- spec.ts       ## Where test is writtern for ./index.ts
```
Inside `spec.ts`
```ts
import binarySearch from './index';
test(desc, () => {
  expect(binarySearch(input.sorted, input.targetNum)).toEqual(result.index)
});
```

2) `npm run test:watch` to automatically rerun rests for changed(uncommitted files) files.

3) `npm t` or `npm run test` to run test for changed(uncommitted) files only. 

4) `npm run test:all` to run test for all files.

## npm version house keeping.
1) `npm run check` to check available package.json updates.

2) `npm run update` to upgrade all packages and package.json to latest versions. 






