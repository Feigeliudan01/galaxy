define("viz/viz_views",["exports","libs/underscore"],function(e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i.default=e,i}(i),n=Backbone.View.extend({className:"track-header",initialize:function(){this.model.config.get("name").on("change:value",this.update_name,this),this.render()},render:function(){this.$el.append($("<div/>").addClass(this.model.drag_handle_class)),this.$el.append($("<div/>").addClass("track-name").text(this.model.config.get_value("name"))),this.action_icons={},this.render_action_icons(),this.$el.dblclick(function(e){e.stopPropagation()}),this.$el.append($("<div style='clear: both'/>"))},update_name:function(){this.$el.find(".track-name").text(this.model.config.get_value("name"))},render_action_icons:function(){var e=this;this.icons_div=$("<div/>").addClass("track-icons").hide().appendTo(this.$el),t.each(this.model.action_icons_def,function(i){e.add_action_icon(i.name,i.title,i.css_class,i.on_click_fn,i.prepend,i.hide)}),this.set_display_modes(this.model.display_modes)},add_action_icon:function(e,i,t,n,o,s){var a=this;this.action_icons[e]=$("<a/>").attr("title",i).addClass("icon-button").addClass(t).tooltip().click(function(){n(a.model)}).appendTo(this.icons_div),s&&this.action_icons[e].hide()},set_display_modes:function(e,i){if(e){this.model.display_modes=e,this.model.mode=i||this.model.config.get_value("mode")||this.model.display_modes[0],this.action_icons.mode_icon.attr("title","Set display mode (now: "+this.mode+")");for(var t=this.model,n={},o=0,s=t.display_modes.length;o<s;o++){var a=t.display_modes[o];n[a]=function(e){return function(){t.change_mode(e)}}(a)}make_popupmenu(this.action_icons.mode_icon,n)}}});e.default={TrackHeaderView:n}});
//# sourceMappingURL=../../maps/viz/viz_views.js.map