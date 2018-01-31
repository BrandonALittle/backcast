var SearchView = Backbone.View.extend({

  events: {
    'click button': 'performSearch',
    'keyup input': 'handleKeyUp'
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.performSearch();
    }
  },

  performSearch: function() {
    var searchQuery = this.$('input').val().trim();
    if (searchQuery) {
      this.collection.search(searchQuery);
    }
    this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
