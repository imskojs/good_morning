# Practice Rx.js and Ramda to solve toy problems 
I wanted to horn my skills in Rx.js and Ramda (Functional Reactive Programming).
Seriously, there were many cases where it would have been much simpler by not using RxJS, but by coding in RxJS
it becomes async proof.

## How to use
`npm install` then;

1) `$ node create KYU_LEVEL PROBLEM_NAME FUNCTION_NAME` makes `./PROBLEM_NAME/main.ts` with `FUNCTIO_NAME` in a boilerplate, Solve using Rx.js, and Ramda
Example;
```bash
node create 8 RemoveFirstAndLastCharacter removeChar
```
2) `$ rollup -c` makes `./PROBLEM_NAME/build.js`, paste contents to answer pane of your choice such as Codewars

3) `node update FOLDER_NAME` to re do the exercise. Example;
```bash
node update 7Kyu-RecursiveReplication
rollup -c
```


Tested in Codewars environment.






