KISSY.config({packages:{demo:{base:"./assets/build",tag:+new Date}}}),KISSY.add("demo/index",function(e,i,s){var t=e.all;new s;var d=function(){this.$side=t("#J_Side"),this.$modulesBd=t("#J_ModulesBd"),this.$codeBd=t("#J_CodeBd"),this.init(),this.bind()};return e.extend(d,i),d.prototype.init=function(){this.render(),d.superclass.constructor.call(this)},d.prototype.render=function(){var e=this,i=t(window).height();e.$side.css("height",i-40),e.$modulesBd.css("height",i-140),e.$codeBd.css("height",i-120)},d.prototype.bind=function(){var e=this;t(window).on("resize",function(){e.render()})},d},{requires:["demo/base","demo/sidebar","sizzle"]}),KISSY.use("demo/index",function(e,i){new i});