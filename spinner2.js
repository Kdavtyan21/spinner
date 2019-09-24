let spinner = ['|','/','-','\\','|']
for (let i = 0; i < spinner.length; i++) {
    setTimeout(() => {
      process.stdout.write('\r' + spinner[i])
    }, i * 200 - 100)
  }
  setTimeout(() => {
    process.stdout.write('\n')
     }, spinner.length * 200 - 100);
