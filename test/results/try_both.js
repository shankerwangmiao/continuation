(function (cont) {
  (function (cont) {
    try {
      setTimeout(function () {
        try {
          throw new Error('my error');
          cont();
        } catch (err) {
          cont(err);
        }
      }, 200);
    } catch (err) {
      cont(err);
    }
  }(function (err) {
    if (err !== undefined) {
      console.log('Error caught:');
      setTimeout(function () {
        console.log(err);
        cont();
      }, 1000);
    } else
      cont();
  }));
}(function () {
  console.log('Finally');
  console.log('Done');
}));