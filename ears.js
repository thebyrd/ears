var Ears = klass()
  .methods({
    initialize: function () {
      var ear = this;
      var events = this.constructor.events;
      
      !events ?
        console.log("no events to initialize")
      : v(events).each(function (key) {
        
          var e = key.split(/\s+/),
              action = e[0],
              selector = e.slice(1).join(' '),
              fn = events[key];

          $(selector).bind(action, function (e) { ear[fn](e); });
        });
    }
  });
