var f, r, _$err;
f = function (i, next) {
  setTimeout(function () {
    if (i === 20) {
      next(new Error('my exception'));
    } else {
      next(null, i);
    }
  }, i);
};
r = [];
(function (_$cont) {
  try {
    var _$parallel_done_0 = 0;
    var _$errors_0 = [];
    (function (_$cont) {
      try {
        f(50, function (arguments, _$param0, _$param1) {
          try {
            ++_$parallel_done_0;
            _$err = _$param0;
            r[0] = _$param1;
            if (_$err)
              throw _$err;
            _$cont();
          } catch (_$err) {
            _$cont(_$err);
          }
        }.bind(this, arguments));
        f(100, function (arguments, _$param2, _$param3) {
          try {
            ++_$parallel_done_0;
            _$err = _$param2;
            r[1] = _$param3;
            if (_$err)
              throw _$err;
            _$cont();
          } catch (_$err) {
            _$cont(_$err);
          }
        }.bind(this, arguments));
        f(20, function (arguments, _$param4, _$param5) {
          try {
            ++_$parallel_done_0;
            _$err = _$param4;
            r[2] = _$param5;
            if (_$err)
              throw _$err;
            _$cont();
          } catch (_$err) {
            _$cont(_$err);
          }
        }.bind(this, arguments));
        f(10, function (arguments, _$param6, _$param7) {
          try {
            ++_$parallel_done_0;
            _$err = _$param6;
            r[3] = _$param7;
            if (_$err)
              throw _$err;
            _$cont();
          } catch (_$err) {
            _$cont(_$err);
          }
        }.bind(this, arguments));
      } catch (_$err) {
        _$cont(_$err);
      }
    }(function (_$err) {
      try {
        if (_$err)
          _$errors_0.push(_$err);
        if (_$parallel_done_0 !== 4)
          return;
        if (_$errors_0.length > 0)
          throw _$errors_0;
        _$parallel_done_0 = undefined;
        _$err = undefined;
        _$errors_0 = undefined;
        _$cont();
      } catch (_$err) {
        _$cont(_$err);
      }
    }));
  } catch (_$err) {
    _$cont(_$err);
  }
}(function (err) {
  if (err !== undefined) {
    console.log(err);
  }
  console.log('Done');
}));
/* Generated by Continuation.js v0.1.5 */