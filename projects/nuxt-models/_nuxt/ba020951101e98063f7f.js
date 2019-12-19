(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{185:function(e,t,n){var content=n(188);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("7ea40947",content,!0,{sourceMap:!1})},186:function(e){e.exports=JSON.parse('{"name":"nuxt-models","version":"0.0.1","description":"JS Model controller for your Nuxt.js project","author":"George Shinkarev <gkshi@ya.ru>","private":true,"scripts":{"lint":"eslint --ext .js,.vue --ignore-path .gitignore .","precommit":"yarn lint","dev":"nuxt","build":"nuxt build --modern","start":"nuxt start --modern","generate":"nuxt generate --modern"},"dependencies":{"@nuxtjs/axios":"^5.9.0","@nuxtjs/dotenv":"^1.4.1","nuxt":"^2.11.0"},"devDependencies":{"@nuxtjs/eslint-config":"^2.0.0","@nuxtjs/eslint-module":"^1.1.0","@nuxtjs/style-resources":"^1.0.0","babel-eslint":"^10.0.3","eslint":"^6.7.2","eslint-plugin-nuxt":">=0.5.0","node-sass":"^4.13.0","nodemon":"^2.0.2","pug":"^2.0.4","pug-plain-loader":"^1.0.0","sass-loader":"^8.0.0"}}')},187:function(e,t,n){"use strict";var o=n(185);n.n(o).a},188:function(e,t,n){(t=n(3)(!1)).push([e.i,".index section[data-v-1521a58d]{margin:80px 0}.index .block[data-v-1521a58d]{margin:40px 0}",""]),e.exports=t},189:function(e,t,n){"use strict";n.r(t);var o=n(186),l={name:"index-page",data(){return{app:o,person:this.$models.create("person"),code:{nuxtConfig:"export default {\n  plugins: [\n    'nuxt-models'\n  ]\n}",modelPerson:"export default {\n  name: String,\n  surname: String,\n  age: {\n    type: Number,\n    validation: value => value > 0\n  },\n  gender: {\n    type: String,\n    validation: value => ['male', 'female', 'other'].includes(value)\n  }\n}",createModel:"const Person = this.$models.get('person', {\n  name: 'Jack',\n  age: 25\n})\n\n// returns an entity\n// {\n//   name: 'Jack',\n//   surname: '',\n//   age: 25,\n//   gender: ''\n// }\n",getModel:"const PersonModel = this.$models.get('person')\n\n// returns a model\n// {\n//   name: {\n//     type: String,\n//     required: true\n//   },\n//   surname: {\n//     type: String\n//   },\n//   age: {\n//     type: Number,\n//     validation: value => value >= 0,\n//     default: 0\n//   },\n//   gender: {\n//     type: String,\n//     validation: value => ['male', 'female', 'other'].includes(value)\n//   }\n// }\n",copyModel:"const Person = this.$models.create('person', { name: 'Jack'} )\nconst AnotherPerson = this.$models.clone(Person)\n\nconsole.log(Person.name) // Jack\nconsole.log(AnotherPerson.name) // Jack\n\nAnotherPerson.name = 'Mary'\n\nconsole.log(Person.name) // Jack\nconsole.log(AnotherPerson.name) // Mary",modelName:"const Person = this.$models.create('person')\n\nconsole.log(Person.modelName) // person",getEntityModel:"const Person = this.$models.create('person')\n\nconsole.log(Person.model)\n\n// returns a model\n// {\n//   name: {\n//     type: String,\n//     required: true\n//   },\n//   surname: {\n//     type: String\n//   },\n//   age: {\n//     type: Number,\n//     validation: value => value >= 0,\n//     default: 0\n//   },\n//   gender: {\n//     type: String,\n//     validation: value => ['male', 'female', 'other'].includes(value)\n//   }\n// }",validation:"const Person = this.$models.create('person')\n\nconsole.log(Person.validation)\n// return false\n// because \"gender\" value hasn't passed validation\n\nPerson.gender = 'male'\n\nconsole.log(Person.validation)\n// return true\n// all values have passed validation",simpleModel:"// Simple person model with name only\nexport default {\n  name: {\n    type: String,\n    default: 'Jack',\n    required: true,\n    hidden: false,\n    validation: value => value.length > 1\n  }\n}\n"}}},mounted(){console.log(this.person)}},r=(n(187),n(2)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page index"},[n("div",{staticClass:"wrapper"},[n("h1",[e._v(e._s(e.app.name))]),n("div",[e._v(e._s(e.app.description))]),n("section",[n("h2",[e._v("Installation")]),n("div",[n("div",[e._v("1. Install plugin via npm or yarn")]),e._m(0),n("div",[e._v("2. Include plugin in nuxt.config.js")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.nuxtConfig))])])])])]),n("section",[n("h2",[e._v("Basic usage")]),n("div",[n("div",[e._v("1. Describe a model. Create /models/person.js")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.modelPerson))])])]),n("div",[e._v("2. Create an entity in Vue-component")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.createModel))])])])])]),n("section",[n("h2",[e._v("Model describing")]),n("div",[n("div",{staticClass:"block"},[n("div",[e._v("Model is an object with described options. There is a simple model example:")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.simpleModel))])])])]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5)])]),n("section",[n("h2",[e._v("Plugin methods")]),n("div",[n("div",{staticClass:"block"},[e._m(6),n("div",[e._v("creates an entity by described model")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.createModel))])])])]),n("div",{staticClass:"block"},[e._m(7),n("div",[e._v("returns a model")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.getModel))])])])]),n("div",{staticClass:"block"},[e._m(8),n("div",[e._v("Creates a copy of existing entity with all values")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.copyModel))])])])])])]),n("section",[n("h2",[e._v("Entity methods")]),n("div",[n("div",{staticClass:"block"},[e._m(9),n("div",[e._v("returns a model name, entity was created by")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.modelName))])])])]),n("div",{staticClass:"block"},[e._m(10),n("div",[e._v("returns a model, entity was created by")]),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.getEntityModel))])])])]),n("div",{staticClass:"block"},[e._m(11),e._m(12),n("div",[n("pre",{staticClass:"code"},[n("code",[e._v(e._s(e.code.validation))])])])]),e._m(13)])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("pre",{staticClass:"code"},[t("code",[this._v("yarn add --dev nuxt-models")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Option.type")])]),t("div",[t("div",[this._v("Defines an option type")]),t("div",[this._v("String, Number, Array, Object, Boolean")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Option.default")])]),t("div",[this._v("Default option value, when entity creates.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Option.required")])]),t("div",[this._v("true/false state. If it's true, Entity.validation will return false if there is no value.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Option.hidden")])]),t("div",[this._v("true/false state. If it's true, Entity.values method won't include this option to return.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Option.validation")])]),t("div",[t("div",[this._v("a function. Describes condition for correct option value.")]),t("div",[this._v("if all validation rules of options return true, Entity.validation returns true.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("this.$models.create")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("this.$models.get")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("this.$models.clone")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("Entity.modelName")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("Entity.model")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"label"},[this._v("Entity.validation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",[this._v("returns true/false state.")]),t("div",[this._v("if it's true, all entity values are correct.")]),t("div",[this._v("if it's false, some of entity values hasn't passed validation.")]),t("div",[this._v("values without validation returns true in any case.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"block"},[t("div",[t("div",{staticClass:"label"},[this._v("Entity.values")])]),t("div",[t("div",[this._v("returns an object with all options and values.")]),t("div",[this._v("Options with hidden property won't be included in object.")])])])}],!1,null,"1521a58d",null);t.default=component.exports}}]);