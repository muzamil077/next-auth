const { spawn } = require('child_process');

const command1 = 'sleep 10';
const command2 = 'ls -l';

const child1 = spawn(command1, { shell: true });
const child2 = spawn(command2, { shell: true });

const child1Finished = new Promise((resolve, reject) => {
  child1.on('close', (code) => {
    if (code !== 0) {
      reject(new Error('Child 1 exited with code: ' + code));
    } else {
      resolve();
    }
  });
});
const child2Finished = new Promise((resolve, reject) => {
  child2.on('close', (code) => {
    if (code !== 0) {
      reject(new Error('Child 2 exited with code: ' + code));
    } else {
      resolve();
    }
  });
});
Promise.race([child1Finished, child2Finished]).then(() => {
  if (child1Finished.done) {
    console.log('Child 1 finished first');
  } else {
    console.log('Child 2 finished first');
  }
});