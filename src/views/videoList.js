var VideoListView = Backbone.View.extend({
  // initialize: function() {
  //   //this.collection.on('change', this.render());
  //   console.log(this.collection);
  //   this.render();
  // },
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  // addVideo: function(video) {
  //   var videoListEntry = new VideoListEntryView({model: video});
  //   var renderedListEntry = videoListEntry.render().el;
  //   this.$el.append(renderedListEntry);
  // },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    var mappedVideos = this.collection.map(function(video) {
      return new VideoListEntryView({
        model: video
      }).render().el;
    });
    this.$('.video-list').append(mappedVideos);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
