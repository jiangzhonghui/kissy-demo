KISSY.add("demo/list",function(e,s,a,n,d,t){var m=e.all,c=new a,i=function(){this.el=m("#J_List"),this.elHd=m("#J_ListHd h1"),this.elBd=m("#J_ListBd"),this.events={"click #J_ListHd #J_Add":"addDemo","click #J_ListBd a":"getDemo"},this.init()};return e.extend(i,s),i.prototype.init=function(){i.superclass.constructor.call(this)},i.prototype.render=function(){var e,s=this;e=["<ul>","{{#demo}}","<li>",'<a href="javascript:;" data-id="{{id}}">',"{{intro}}","</a>","</li>","{{/demo}}","</ul>"].join(""),d.post("./act/list.php",{module:s._makeQueryId()},function(a){var n=new t(e).render({demo:a.data});s.elHd.html(s._get("method")+" Demo"),s.elBd.html(n)})},i.prototype.addDemo=function(){var e=this;e._render("code"),c.render()},i.prototype.getDemo=function(e){var s=this,a=m(e.currentTarget),n=a.attr("data-id");d.post("./act/detail.php",{id:n},function(e){s._set("id",n),s._render("code"),c.render(e.data)})},i},{requires:["demo/base","demo/code","node","ajax","xtemplate","sizzle"]});