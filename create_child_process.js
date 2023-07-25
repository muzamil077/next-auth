const { spawn } = require("child_process");
const command = "ls -l";
const child = spawn(command , { shell: true });
child.stdout.on("data", (data) => {
  console.log(data);
});

child.on("close", (code) => {
  if (code !== 0) {
    console.error("Child process exited with code: " + code);
  }
});
