(function (cont) {
  try {
    throw new Error('my error');
  } catch (err) {
    setTimeout(function () {
      console.log(err);
      cont();
    }, 1000);
    return;
  }
  cont();
}(function () {
  console.log('Done');
}));