Typewar.Views.EntityStatusView = Backbone.View.extend({
  tagName: 'div',
  className: 'entity-status',
  _templateId: '#entity-status-template',
  _parentId: '#status-area',
  entity: null,

  // TODO: This should take in backbone models rather than entities
  initialize: function(opts) {
    this.entity = opts.entity;
    // TODO: Figure out how to nicely unbind this to prevent memory leaks
    this.entity.bind('updateStatus', _.bind(this.render, this));
  },

  render: function() {
    var opts, $found_el;
    opts = {
      hp: this.entity.getStatus("hp"),
      name: this.entity.getName(),
      percentHP: this.entity.getPercentHP(),
      statusHP: this.getStatusHP()
    }

    this.$el.html(_.template($(this._templateId).html(), opts));
    return this;
  },

  deallocate: function (){
    this.entity.unbind('updateStatus'); // TODO: check to make sure this works
    this.entity = null;
    this.remove();
  },

  getStatusHP: function() {
    var percentHP = this.entity.getPercentHP();
    var statusHP;

    if(percentHP < 30) {
      statusHP = 'progress-danger';
    } else if (percentHP < 70) {
      statusHP = 'progress-warning';
    } else {
      statusHP = 'progress-success';
    }

    return statusHP;
  }
});
