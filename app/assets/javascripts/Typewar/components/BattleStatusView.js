Typewar.Views.EntityStatusView = Backbone.View.extend({
  tagName: 'div',
  className: 'entity-status',
  _templateId: '#entity-status-template',
  _parentId: '#status-area',
  entity: null,

  // TODO: This should take in backbone models rather than entities
  initialize: function(opts) {
    this.entity = opts.entity;
  },

  render: function(input_opts) {
    var opts, $found_el;

    opts = {
      mode_icon: this.getModeIcon(),
      name: "Unnamed",
      percentHP: 100,
      statusHP: this.getStatusHP()
    }
    _.extend(opts, input_opts);

    this.$el.html(_.template($(this._templateId).html(), opts));
    return this;
  },

  deallocate: function (){
    this.entity = null;
    this.remove();
  },

  getModeIcon: function (){
    // Return the appropriate icon for attack or defense etc.
    var curr_mode;

    curr_mode = this.entity.getStance();
    switch(curr_mode){
      case "offense":
        return "assets/Typewar/icons/crossed-swords.svg"
        break;
      case "defense":
        return "assets/Typewar/icons/checked-shield.svg"
        break;
      default:
        return "assets/Typewar/icons/checked-shield.svg"
    };
  },

  getStatusHP: function (){
    var percentHP, statusHP;
    
    percentHP = this.entity.getPercentHP();
    if(percentHP < 30) {
      statusHP = 'progress-bar-danger';
    } else if (percentHP < 70) {
      statusHP = 'progress-bar-warning';
    } else {
      statusHP = 'progress-bar-success';
    }

    return statusHP;
  }
});


// Here is our interface to the view
// It contains a view 
Crafty.c("BattleStatus", {
  init: function(){ this.requires("BattleCharacter"); },
  battleStatus: function (){
    this.status_view = new Typewar.Views.EntityStatusView({entity: this, id: 'entity-status-'+this[0]});
    this._bindRerenderViewOnStatusUpdate();
    return this;
  },

  renderStatus: function (){
    var view_opts;
    view_opts = {
      name: this.getName(),
      hp: this.getStatus("hp"),
      name: this.getName(),
      percentHP: this.getPercentHP()
    };

    this.status_view.render(view_opts);
  },

  // private
  _bindRerenderViewOnStatusUpdate: function (){
    this.bind('UpdateStatus', this.renderStatus.bind(this));
  },

  _unbindRerenderViewOnStatusUpdate: function (){
    this.unbind('UpdateStatus', this.renderStatus.bind(this));
  }
});