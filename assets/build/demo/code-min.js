KISSY.add("demo/code",function(e,t,i,s,o){var r=e.all,n=new i,a=function(){this.el=r("#J_Code"),this.commitEl=r("#J_Commit"),this.updateEl=r("#J_Update"),this.events={"click #J_Back":"goBack","click #J_Commit":"commit","click #J_Update":"update","click #J_Debug":"debug","mouseenter .J_EditorWrap":"toggleEditorWrap","mouseleave .J_EditorWrap":"toggleEditorWrap","click .J_EditorLabel":"editorResize"},this.iframe=r("#J_PreviewIframe")[0].contentWindow.document,this.init()};return e.extend(a,t),a.prototype.init=function(){this.createEditor(),a.superclass.constructor.call(this)},a.prototype.render=function(e){var t=this;e?(t.commitEl.hide(),t.updateEl.show()):(t.commitEl.show(),t.updateEl.hide()),n.render(e),t.setEditorVal(e)},a.prototype.goBack=function(){var e=this;e._render("list")},a.prototype.update=function(e){var t=this;t._ajax(e,"./act/edit.php",t.makeDemoInfo("update"))},a.prototype.commit=function(e){var t=this;t._ajax(e,"./act/add.php",t.makeDemoInfo("commit"))},a.prototype.debug=function(e){var t=this,i=r(e.currentTarget),s=i.one("i"),o="icon-check",n="icon-check-empty";t._get("debug")?(s.removeClass(o).addClass(n),t._set("debug",!1)):(s.removeClass(n).addClass(o),t._set("debug",!0),t.debugCode())},a.prototype.debugCode=function(){var e=this,t=e.getDebugCode(e.getEditorVal());e.iframe.open(),e.iframe.write(t),e.iframe.close()},a.prototype.createEditor=function(){var e=this,t=function(t,i){var t=ace.edit(t[0]);return t.setTheme("ace/theme/dreamweaver"),t.getSession().setMode("ace/mode/"+i),t.on("change",function(){e._get("debug")&&e.debugCode()}),t};e.Html=t(r("#J_Html"),"html"),e.Css=t(r("#J_Css"),"css"),e.Js=t(r("#J_Js"),"javascript"),e._set("debug",!0)},a.prototype.setEditorVal=function(e){var t=this;if(!e){var e={};e.html="<!-- HTML -->\r\n<!-- 所填内容直接添入 BODY 标签 -->\r\n",e.css="/* CSS */\r\n",e.js="/* JavaScript */\r\n/* Kissy 1.3 已默认加载 */\r\n"}t.Html.setValue(e.html),t.Html.focus(),t.Html.clearSelection(),t.Css.setValue(e.css),t.Css.focus(),t.Css.clearSelection(),t.Js.setValue(e.js),t.Js.focus(),t.Js.clearSelection()},a.prototype.getEditorVal=function(){var e=this;return{html:e.Html.getValue(),css:e.Css.getValue(),js:e.Js.getValue()}},a.prototype.getDebugCode=function(e){var t=["<!DOCTYPE html>\r\n","<html>\r\n","<head>\r\n",'<meta charset="utf-8" />\r\n',"<title>{{module}}</title>\r\n","<style>\r\n","{{{css}}}\r\n","</style>\r\n","</head>\r\n","<body>\r\n","{{{html}}}\r\n",'<script src="http://a.tbcdn.cn/s/kissy/1.3.0/seed-min.js" data-config="{combine:true}"></script>\r\n',"<script>\r\n","try {\r\n","{{{js}}}\r\n","} catch(e) {\r\n","}\r\n","</script>\r\n","</body>\r\n","</html>"].join("");return new o(t).render(e)},a.prototype.makeDemoInfo=function(t){var i=this,s=i.getEditorVal(),o=n.getDemoConfig();switch(t){case"update":return e.merge(s,o,{id:i._get("id")});default:return e.merge(s,o)}},a.prototype.toggleEditorWrap=function(e){var t=r(e.currentTarget),i=r(".J_EditorLabel",t);i.toggle()},a.prototype.editorResize=function(e){var t=this,i=r(e.currentTarget),s=i.one("i"),o=s.attr("data-editor"),n=s.attr("data-screen"),a=r("#J_"+o),d=a.parent(),c=d.parent(),l="icon-fullscreen",u="icon-resize-small";"small"===n?(s.attr("data-screen","full").removeClass(l).addClass(u),c.css("width","100%").siblings().hide(),d.css("height","100%").siblings().hide()):(s.attr("data-screen","small").removeClass(u).addClass(l),c.css("width","50%").siblings().show(),d.css("height","50%").siblings().show()),t[o]&&t[o].resize()},a},{requires:["demo/base","demo/config","node","xtemplate"]});