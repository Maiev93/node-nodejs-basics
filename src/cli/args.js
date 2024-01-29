const args = process.argv;

const parseArgs = () => {
  // Write your code here

  let argsString = "";
  for (let i = 2; i < args.length; i += 2) {
    argsString += args[i].substring(2) + " is " + args[i + 1];
    i < args.length - 2 ? (argsString += ", ") : null;
  }

  console.log(argsString);
};

parseArgs();
