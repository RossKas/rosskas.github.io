(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],a[r]&&m.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"shop"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("h1",[t._v("Pagination and filter(brands) with checkboxes with vue.js")]),n("div",{staticClass:"shop-content"},[n("div",{staticClass:"head-block"},[n("div",{staticClass:"filter"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.brand=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"disabled",value:""}},[t._v("select a filter")]),t._l(t.brands,function(e){return n("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})],2),n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.clearfilters}},[t._v("Clear Filters")])]),n("div",{staticClass:"quantity"},[n("strong",[t._v("Quantity:")]),t._v("\n                "+t._s(t.quantity_item)+"\n              ")])]),n("div",{staticClass:"shop-items"},t._l(t.jsonPage,function(t){return n("ProductItem",{key:t.artnumber,attrs:{product:t}})}),1),n("div",{staticClass:"pagination"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.prevPage}},[t._v("Prev")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.nextPage}},[t._v("Next")])])])])])])]),n("comment")],1)},i=[],r=n("75fc"),o=(n("ac6a"),n("5df3"),n("4f7f"),n("bc3a")),c=n.n(o),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shop-item"},[t._m(0),n("p",[n("span",[t._v("Artnumber:")]),n("span",[t._v(t._s(t.product.artnumber))])]),n("p",[n("span",[t._v("Name:")]),n("span",[t._v(t._s(t.product.name))])]),n("p",[n("span",[t._v("Brand:")]),n("span",[t._v(t._s(t.product.brand))])]),n("p",[n("span",[t._v("Weight:")]),n("span",[t._v(t._s(t.product.weight))])]),n("p",[n("span",[t._v("Quantity:")]),n("span",[t._v(t._s(t.product.quantity))])]),n("p",[n("span",[t._v("Price:")]),n("span",[t._v("$"+t._s(t.product.price))])]),n("p",[n("span",[t._v("Stock:")]),n("span",[t._v(t._s(t.product.stock))])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("strong",[t._v("Product")])])}],d={name:"ProductItem",props:["product"]},m=d,h=n("2877"),v=Object(h["a"])(m,l,u,!1,null,"51ee3350",null),p=v.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"comments"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("h1",[t._v("Interface to view, add and edit comments on Vue JS.")]),n("div",{staticClass:"item-comment"},[n("div",{staticClass:"title-line"},[n("div",{staticClass:"titile-text"},[n("p",[t._v(t._s(t.user.nameMen))])])]),n("div",{staticClass:"write-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.text,expression:"user.text"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Write a comment"},domProps:{value:t.user.text},on:{click:function(e){t.btn_block=!0},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputNew(e)},input:function(e){e.target.composing||t.$set(t.user,"text",e.target.value)}}}),t.btn_block?n("div",{staticClass:"btn-block"},[n("button",{staticClass:"btn",class:{"btn-info":t.user.text>="1","btn-secondary":!t.user.text>="1"},attrs:{type:"button"},on:{click:t.saveComments}},[t._v("\n\t\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t")]),n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){t.btn_block=!1,t.user.text=""}}},[t._v("\n\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t")])]):t._e()]),n("hr"),n("div",{staticClass:"mens-block"},[n("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.json,function(e){return n("CommentDialog",{key:e.id,attrs:{mens:e},on:{"delete-comment":t.deleteComment,"edit-comment":t.editComment}})}),1)],1)])])])])])},b=[],_=(n("20d6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.edit_comment?n("div",{staticClass:"write-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.mens.text,expression:"mens.text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.mens.text},on:{click:function(e){t.btn_block_2=!0},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emit_event(e)},input:function(e){e.target.composing||t.$set(t.mens,"text",e.target.value)}}}),n("div",{staticClass:"btn-block"},[n("button",{staticClass:"btn",class:{"btn-info":t.mens.text>="1","btn-secondary":!t.mens.text>="1"},attrs:{type:"button"},on:{click:t.emit_event}},[t._v("Save")]),n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){t.edit_comment=!1,t.arrow=!t.arrow}}},[t._v("Cancel")])])]):n("div",{staticClass:"men"},[n("p",[t._v(t._s(t.mens.text))]),n("div",{staticClass:"men-info"},[n("i",{staticClass:"fas fa-user-circle"}),n("span",[n("strong",[t._v(t._s(t.mens.nameMen))])]),t._v(",\n      "),n("span",[t._v(t._s(t.mens.day))]),t._v(",\n      "),n("span",[t._v("id-"+t._s(t.mens.id))]),n("div",{staticClass:"arrow"},[n("i",{staticClass:"fas fa-chevron-down",on:{click:function(e){t.arrow=!t.arrow}}}),t.arrow?n("div",{staticClass:"list-group"},[n("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.edit_comment=!0}}},[t._v("Edit")]),n("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.confirm=!0,t.arrow=!1}}},[t._v("Delete")])]):t._e(),t.confirm?n("div",{staticClass:"card cart-confirm",staticStyle:{width:"18rem"}},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Delete Comment?")]),n("hr"),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("delete-comment",t.mens.id)}}},[t._v("Delete")]),n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){t.confirm=!1,t.arrow=!0}}},[t._v("Cansel")])])]):t._e()])])])])}),g=[],y=void 0,C={data:function(){return{arrow:!1,edit_comment:!1,btn_block_2:!1,write_comment:"",confirm:!1}},props:["mens"],methods:{clickArrow:function(){y.message.length>="1"&&(y.isActive=!0)},emit_event:function(){this.$emit("edit-comment",this.mens.id,this.mens.text),""!=this.mens.text&&(this.edit_comment=!1,this.arrow=!1)}}},j=C,k=Object(h["a"])(j,_,g,!1,null,"588862c9",null),x=k.exports,w=void 0,I={components:{CommentDialog:x},data:function(){return{btn_block:!1,message:"",isActive:!1,json:"",copm_json:"",user:{id:3,nameMen:"New User",day:"",text:""}}},methods:{setSaveActive:function(){w.message.length>="1"&&(w.isActive=!0)},inputNew:function(){this.saveComments(),this.btn_block=!0},saveComments:function(){if(""!=this.user.text){var t={id:this.json.length+1,nameMen:"New User",day:"".concat((new Date).getDate()," ").concat((new Date).toLocaleString("en",{month:"long"})),text:this.user.text};this.json.unshift(t),this.saveLocal(),this.btn_block=!1,this.user.text=""}else alert("Data New Comment is ampty")},editComment:function(t,e){if(""!=e&&""!=t){var n=this.json.findIndex(function(e){return e.id===t});this.json[n].text=e,this.saveLocal()}else alert("Data edit-comment is ampty")},deleteComment:function(t){var e=this.json.findIndex(function(e){return e.id===t});this.json.splice(e,1),this.saveLocal()},saveLocal:function(){var t=JSON.stringify(this.json);localStorage.setItem("json",t)}},created:function(){if(localStorage.getItem("json")){var t=JSON.parse(localStorage.getItem("json"));this.json=t}else{var e=this;fetch("https://rosskass.github.io/json/comments.json").then(function(t){return t.json()}).then(function(t){e.json=t.reverse()}).catch(alert)}}},P=I,D=(n("96d9"),Object(h["a"])(P,f,b,!1,null,null,null)),O=D.exports,S={name:"app",components:{ProductItem:p,comment:O},data:function(){return{json:"",brands:"",brand:"",quantity_item:0,brandData:"",jsonPage:"",startI:0,endI:4}},methods:{clearfilters:function(){""!==this.brand&&(this.jsonPage=this.json.slice(this.startI,this.endI),this.quantity_item=this.json.length,this.brand="")},nextPage:function(){var t=4;""==this.brand?this.endI<=this.json.length-1&&(this.startI=this.endI,this.endI=this.endI+t,this.jsonPage=this.json.slice(this.startI,this.endI)):""!==this.brand&&this.endI<=this.brandData.length-1&&(this.startI=this.endI,this.endI=this.endI+t,this.jsonPage=this.brandData.slice(this.startI,this.endI))},prevPage:function(){var t=4;if(""==this.brand)this.startI>0&&(this.startI=this.startI-t,this.endI=this.endI-t,this.jsonPage=this.json.slice(this.startI,this.endI));else if(""!==this.brand){var e=4;this.startI>0&&(this.startI=this.startI-e,this.endI=this.endI-e,this.jsonPage=this.brandData.slice(this.startI,this.endI))}}},watch:{brand:function(t){""!==t&&(this.startI=0,this.endI=4,this.brandData=this.json.filter(function(e){return e.brand===t}),this.jsonPage=this.brandData.slice(this.startI,this.endI),this.quantity_item=this.brandData.length)}},beforeCreate:function(){var t=this;c.a.get("https://rosskass.github.io/data.json").then(function(e){t.json=e.data,t.quantity_item=e.data.length;for(var n=[],s=0;s<e.data.length;s++)n.push(e.data[s].brand);var a=new Set(n);t.brands=Object(r["a"])(a),t.jsonPage=e.data.slice(0,4)}).catch(function(t){alert(t)})}},N=S,$=(n("034f"),Object(h["a"])(N,a,i,!1,null,null,null)),E=$.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(E)}}).$mount("#app")},"64a9":function(t,e,n){},"896b":function(t,e,n){},"96d9":function(t,e,n){"use strict";var s=n("896b"),a=n.n(s);a.a}});