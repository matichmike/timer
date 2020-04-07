let seconds = process.argv.slice(2);
for (const seco of seconds) {
  const sec = parseFloat(seco);
  if (sec < 0  || Number.isNaN(sec)) {
    break;
  }
  setTimeout(() => {
  process.stdout.write('\x07');
  }, (sec * 1000));
}
