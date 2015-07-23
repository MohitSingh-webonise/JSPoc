var app  = app || {};
(function(){
  var hellWorld = function(){
    var that = this;

    this.name = 'Palash';
    this.getName = function(){
      return that.name;
    },

    this.displayName = function(element){
      $(element).text(app.object.hello() + '_' + that.getName());
    },

    // Event delegation
    $('a').on('click', function(){
      that.displayName('#name');
    })
  }
  new hellWorld();
})();