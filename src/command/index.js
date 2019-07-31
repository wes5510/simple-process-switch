exports.parseCmdToArgsOfSpawn = cmd => {
  if (!cmd || typeof cmd !== 'string') {
    throw new Error('Invalid cmd type');
  }

  const [first, ...rest] = cmd.split(' ');

  return {cmd: first, args: [...rest]};
};
