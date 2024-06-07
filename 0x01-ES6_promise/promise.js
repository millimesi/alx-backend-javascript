const mypromise = new Promise((resolve, reject) => {
  const x = 'X';
  const y = 'k';
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

mypromise
  .then(() => {
    console.log('promise fullfiled');
  })
  .catch(() => {
    console.log('promis Failed');
  });
