var i;
i = 0;
function _$loop_0(_$loop_0__$cont) {
  if (i < 5) {
    setTimeout(function () {
      if (i == 3) {
        return i++, _$loop_0(_$loop_0__$cont);
      }
      console.log(i);
      i++;
      _$loop_0(_$loop_0__$cont);
    }, 10);
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
});
/* Generated by Continuation.js v0.1.3 */