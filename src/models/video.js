var Video = Backbone.Model.extend({
  // set attributes for each video??

  initialize: function(video) {
    // override youtube's complex id field
    // this.on('click:title', this.select);
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
  }

});
