/**
 * @fileOverview EditView
 * @author 莫争 <gaoli.gl@taobao.com>
 * @version 1.0
 */

KISSY.add('demo/EditView', function(S, MVC, XTemplate) {

  var $ = S.all;

  var TPL_INFO = new XTemplate([
    '{{#demo}}',
      '<div class="info-hd">',
        '<h2>{{module}}</h2>',
      '</div>',
      '<div class="info-bd">',
        '<ul>',
          '<li>',
          '<input id="J_Author" class="txt" value="{{author}}" placeholder="作者">',
            '<label class="icon-user" for="J_Author"></label>',
          '</li>',
          '<li>',
          '<input id="J_Intro" class="txt" value="{{intro}}" placeholder="描述">',
            '<label class="icon-edit" for="J_Intro"></label>',
          '</li>',
        '</ul>',
      '</div>',
    '{{/demo}}'
  ].join(''));

  /**
   * EditView
   */
  var EditView = function() {
    var self = this;

    EditView.superclass.constructor.apply(this, arguments);

    self.$el   = self.get('el');
    self.model = self.get('model');
    self.$info = $('#J_Info');

    self.createEditor();

    self.model.on('*Change', function() {
      self.render();
    });
  };

  S.extend(EditView, MVC.View, {
    render: function() {
      var self = this,
          demo = self.model.toJSON();

      self.$info.html(TPL_INFO.render({demo: demo}));
      self.setEditorVal(demo);
    },

    /**
     * 创建编辑器
     */
    createEditor: function() {
      var self = this;

      /**
       * 创建 ace 编辑器
       * @param {Object} editor
       * @param {String} mode
       */
      var aceEditor = function(editor, mode) {
        var editor = ace.edit(editor[0]);
        editor.setTheme("ace/theme/dreamweaver");
        editor.getSession().setMode("ace/mode/" + mode);
        return editor;
      };

      self.Html = aceEditor($('#J_Html'), 'html');
      self.Css  = aceEditor($('#J_Css'), 'css');
      self.Js   = aceEditor($('#J_Js'), 'javascript');
    },

    /**
     * 编辑器设值
     * @param {Object} demo
     */
    setEditorVal: function(demo) {
      var self = this;

      /**
       * 设置默认值
       */
      if (!demo) {
        var demo = {};
        demo.html = '<!-- HTML -->\r\n<!-- 所填内容直接添入 BODY 标签 -->\r\n';
        demo.css  = '/* CSS */\r\n';
        demo.js   = '/* JavaScript */\r\n/* Kissy 1.3 已默认加载 */\r\n';
      }

      self.Html.setValue(demo.html);
      self.Html.focus();
      self.Html.clearSelection();

      self.Css.setValue(demo.css);
      self.Css.focus();
      self.Css.clearSelection();

      self.Js.setValue(demo.js);
      self.Js.focus();
      self.Js.clearSelection();
    },

    /**
     * 编辑器取值
     * @return {Object}
     */
    getEditorVal: function() {
      var self = this;

      return {
        html: self.Html.getValue(),
        css : self.Css.getValue(),
        js  : self.Js.getValue()
      };
    }

  }, {
    ATTRS: {
      el: {
        value: '<ul></ul>'
      }
    }
  });

  return EditView;

}, {

  requires: ['mvc', 'xtemplate']

});