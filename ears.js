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
              selector = e.slice(1).join(' '),
              fn = events[key];
          bean.on(qwery(selector), action, ear[fn]);
        }

      }
    });

  return Ears;

});