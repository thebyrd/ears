define([
  'lib/klass',
  'lib/qwery',
  'lib/bean'
], function (klass, qwery, bean) {

  var Ears = klass()
    .methods({
      initialize: function () {
        var ear = this,
            events = this.constructor.events;

        for (var key in events) {
          var e = key.split(/\s+/),
              action = e[0],
              selector = qwery(e.slice(1).join(' '))[0],
              fn = events[key];
          if (selector) bean.on(selector, action, ear[fn]);
        }
      }
    });

  return Ears;

});