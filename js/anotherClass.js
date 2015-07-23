var app  = app || {};
(function(){
  var anotherClass = function(){
    this.hello = function(){
      return 'Hello';
    }
  }
  app.object = new anotherClass();
})();