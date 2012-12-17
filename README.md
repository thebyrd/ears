## Ears
A backbone like events listener built on Klass

### Usage
extend Ears with a klass that contains an events object.
```javascript
var App = Ears.extend(function (variants) {
    this.variants = variants;
  })
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