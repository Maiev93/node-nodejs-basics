const parseEnv = () => {
  // Write your code here
  const env = process.env;
  const prefix = "RSS_";
  const params = getParams(env, prefix);

  let paramsString = "";

  params.forEach((param) => {
    paramsString += `${param} = ${env[param]}; `;
  });

  console.log(paramsString);
};

function getParams(envObj, prefixStr) {
  const keysArray = Object.keys(envObj);
  const RSSkeys = keysArray.filter((el) => el.toString().includes(prefixStr));
  return RSSkeys;
}

parseEnv();
