const getArgvFromIndex2 = () => {
  // console.log('process: ', process);
  const argv = process.argv || []
  // console.log('argv: ', argv);
  let subArgv = []

  if(argv.length >= 3) {
    subArgv = argv.slice(2)
    // console.log('subArgv: ', subArgv);
  }

  return subArgv
}

module.exports = {
  getArgvFromIndex2
}