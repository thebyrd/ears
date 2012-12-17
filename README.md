# Ears
A backbone like events listener built on [Klass](http://github.com/ded/klass).

## Usage
extend Ears with a klass that contains an events object.
```javascript
var App = Ears.extend()
  .statics({
    events: {
      'click .some .selector': 'someMethod'
    }
  })
  .methods({
    someMethod: function (e) {
      console.log('you clicked somewhere!');
      console.log(e);
    }
  });

  var app = new App(); //events are listening

```
