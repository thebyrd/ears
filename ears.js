var Application = klass()
  .methods({
    initialize: function () {
      var app = this;
      var events = this.constructor.events;
      
      !events ?
        console.log("no events to initialize")
      : v(events).each(function (key) {
        
          var e = key.split(/\s+/);
          var type = e[0];
          var selector = e.slice(1).join(' ');
          var fn = events[key];

          $(selector).bind(type, function (e) { app[fn](e); });
        });
    }
  });