var o;
this.name = 'outter';
function inner() {
  (function (_$cont) {
    if (true) {
      setTimeout(function (arguments) {
        console.log(this.name);
        _$cont();
      }.bind(this, arguments), 100);
    } else {
      _$cont();
    }
  }.bind(this)(function (_$err) {
    if (_$err !== undefined)
      return _$cont(_$err);
  }));
}
o = {
  name: 'inner',
  inner: inner
};
o.inner();
console.log(this.name);
/* Generated by Continuation.js v0.1.5 */