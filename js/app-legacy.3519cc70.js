(function(){"use strict";var t={7364:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var s=n(9567),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("button",{staticClass:"cartBtn",attrs:{disabled:t.cartItemCount<1},on:{click:function(e){return t.switchView()}}},[t._v(" "+t._s(t.cartItemCount)+" Checkout "),n("span",{staticClass:"fas fa-cart-plus"})]),t.showLessons?n("div",{attrs:{id:"shopping"}},[n("display-lessons",{attrs:{lessons:t.lessons},on:{addLesson:t.addToCart,updateResults:t.updateResults}})],1):n("div",[n("cart-form",{attrs:{listOfCartQuantitiesForIds:t.listOfCartQuantitiesForIds,lessons:t.lessons},on:{emptyCart:t.emptyCart,removeFromCart:t.removeFromCart}})],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("After School Club")])])}],i=(n(4553),n(561),n(1539),n(7327),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h2",[t._v("Lessons")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"search",attrs:{type:"text",placeholder:"Search lessons"},domProps:{value:t.searchInput},on:{keyup:function(e){return t.updateResults()},input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("div",{staticClass:"sortedBy"},[t._v(" sorted by "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"sortingFont",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?n:n[0]},function(e){return t.updateResults()}]}},[n("option",{attrs:{value:"topic"}},[t._v("Topic")]),n("option",{attrs:{value:"location"}},[t._v("Location")]),n("option",{attrs:{value:"price"}},[t._v("Price")]),n("option",{attrs:{value:"available_space"}},[t._v("Space")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sortDirection,expression:"sortDirection"}],attrs:{type:"radio",id:"asc",value:"asc"},domProps:{checked:t._q(t.sortDirection,"asc")},on:{change:[function(e){t.sortDirection="asc"},function(e){return t.updateResults()}]}}),n("label",{attrs:{for:"ascending"}},[t._v("Ascending")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.sortDirection,expression:"sortDirection"}],attrs:{type:"radio",id:"desc",value:"desc"},domProps:{checked:t._q(t.sortDirection,"desc")},on:{change:[function(e){t.sortDirection="desc"},function(e){return t.updateResults()}]}}),n("label",{attrs:{for:"descending"}},[t._v("Descending")])]),n("br"),n("br"),t._l(t.lessons,(function(e){return n("div",{key:e.id,staticClass:"lesson"},[n("br"),n("img",{attrs:{src:t.getImage(e.image),height:"150"}}),n("h2",[t._v(" "+t._s(e.topic)+" "),n("span",{class:t.getFontAwesomeIcon(e)})]),n("p",[t._v("Location: "+t._s(e.location))]),n("p",[t._v("Price: £"+t._s(e.price))]),n("p",[t._v("Spaces: "+t._s(e.available_space))]),n("button",{staticClass:"cartBtn",attrs:{disabled:!t.canAddToCart(e)},on:{click:function(n){return t.addToCart(e.id)}}},[t._v("Add to cart")]),n("br"),n("br")])}))],2)}),a=[],c={name:"displayLessons",props:["lessons"],data:function(){return{filter:"price",sortDirection:"asc",order:{name:"",phoneNumber:""},searchInput:""}},methods:{addToCart:function(t){this.$emit("addLesson",t)},canAddToCart:function(t){var e=t.available_space;return e>0},updateResults:function(){this.$emit("updateResults",this.searchInput,this.filter,this.sortDirection)},getImage:function(t){return"https://cst3145-booking-system.herokuapp.com/"+t},getFontAwesomeIcon:function(t){return t.font_awesome_icon}}},u=c,l=n(1001),p=(0,l.Z)(u,i,a,!1,null,null,null),d=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h2",[t._v("Cart")]),t._l(t.listOfCartQuantitiesForIds,(function(e){return n("div",{key:e.id},t._l(t.lessons,(function(s){return n("div",{key:s.id},[e.id===s.id&&e.amountInCart>=1?n("span",[n("div",{staticClass:"lesson"},[n("img",{attrs:{src:t.getImage(s.image),height:"150"}}),n("h2",[t._v(" "+t._s(s.topic)+" "),n("span",{class:t.getFontAwesomeIcon(s)})]),n("p",[t._v("Location: "+t._s(s.location))]),n("p",[t._v("Price: £"+t._s(s.price))]),n("p",[t._v("Quantity: "+t._s(e.amountInCart))]),n("button",{staticClass:"cartBtn",on:{click:function(e){return t.removeFromCart(s.id)}}},[t._v("Remove from cart")])])]):t._e()])})),0)})),n("br"),n("br"),n("div",{staticClass:"checkoutForm"},[n("h2",[t._v("Checkout")]),n("a",[t._v("Full Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.order.name,expression:"order.name"}],attrs:{type:"text"},domProps:{value:t.order.name},on:{input:function(e){e.target.composing||t.$set(t.order,"name",e.target.value)}}}),n("a",{staticClass:"phone"},[t._v("Phone Number:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.order.phoneNumber,expression:"order.phoneNumber"}],domProps:{value:t.order.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.order,"phoneNumber",e.target.value)}}}),n("br"),n("br"),n("button",{staticClass:"cartBtn",attrs:{disabled:!this.canCheckout},on:{click:function(e){return t.completeCheckout()}}},[t._v("Checkout")])])],2)},f=[],m=(n(8862),n(8309),n(4916),n(7601),{name:"displayLessons",props:["listOfCartQuantitiesForIds","lessons","cart"],data:function(){return{order:{name:"",phoneNumber:""}}},methods:{createNewOrder:function(t){fetch("https://cst3145-booking-system.herokuapp.com/collection/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){console.log("Success:",t)}))},createLessonOrder:function(t,e){var n={name:this.order.name,phone_number:this.order.phoneNumber,lesson_id:t,space:e};this.createNewOrder(n)},updateLessonSpaces:function(t,e){fetch("https://cst3145-booking-system.herokuapp.com/collection/lesson/"+t,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({available_space:e})}).then((function(t){return t.json()})).then((function(t){console.log("Success:",t)}))},updateSpecificLessonSpaces:function(t){var e=this.lessons.findIndex((function(e){return e.id==t}));this.updateLessonSpaces(t,this.lessons[e].available_space)},orderAndUpdate:function(){for(var t=0;t<this.listOfCartQuantitiesForIds.length;t++){var e=this.listOfCartQuantitiesForIds[t].id,n=this.listOfCartQuantitiesForIds[t].amountInCart;n>0&&(this.createLessonOrder(e,n),this.updateSpecificLessonSpaces(e))}this.$emit("emptyCart"),this.showLessons=!0},completeCheckout:function(){this.orderAndUpdate(),alert("Checkout Complete")},getImage:function(t){return"https://cst3145-booking-system.herokuapp.com/"+t},removeFromCart:function(t){this.$emit("removeFromCart",t)},getFontAwesomeIcon:function(t){return t.font_awesome_icon}},computed:{canCheckout:function(){return!(!/^[a-zA-Z]+$/.test(this.order.name)||!/^\d+$/.test(this.order.phoneNumber))}}}),v=m,_=(0,l.Z)(v,h,f,!1,null,null,null),g=_.exports,b={name:"App",data:function(){return{showLessons:!0,lessons:[],cart:[],filter:"price",sortDirection:"asc",order:{name:"",phoneNumber:""},searchInput:""}},methods:{switchView:function(){this.showLessons=!this.showLessons},addToCart:function(t){this.cart.push(t);var e=this.lessons.findIndex((function(e){return e.id==t}));this.lessons[e].available_space=this.lessons[e].available_space-1},removeFromCart:function(t){var e=this.cart.indexOf(t),n=this.lessons.findIndex((function(e){return e.id==t}));e>-1&&(this.cart.splice(e,1),this.lessons[n].available_space=this.lessons[n].available_space+1),0===this.cart.length&&this.switchView()},populateResultArray:function(){var t=this;fetch(this.fetchString()).then((function(e){e.json().then((function(e){t.lessons=e}))}))},fetchString:function(){return""==this.searchInput?"https://cst3145-booking-system.herokuapp.com/collection/lesson/"+this.filter+"/"+this.sortDirection:"https://cst3145-booking-system.herokuapp.com/collection/lesson/"+this.searchInput+"/"+this.filter+"/"+this.sortDirection},emptyCart:function(){this.cart=[],this.switchView()},updateResults:function(t,e,n){this.searchInput=t,this.filter=e,this.sortDirection=n,this.populateResultArray()}},computed:{cartItemCount:function(){return this.cart.length},allItemIds:function(){for(var t=[],e=0;e<this.lessons.length;e++)t.push(this.lessons[e].id);return t},listOfCartQuantitiesForIds:function(){for(var t=this.allItemIds,e=[],n=0;n<t.length;n++){for(var s=0,o=0;o<this.cart.length;o++)t[n]===this.cart[o]&&s++;e.push({id:t[n],amountInCart:s})}return e}},created:function(){this.populateResultArray()},components:{displayLessons:d,cartForm:g}},C=b,y=(0,l.Z)(C,o,r,!1,null,null,null),I=y.exports;s.Z.config.productionTip=!1,new s.Z({render:function(t){return t(I)}}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],r=t[l][2];for(var a=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(a=!1,r<i&&(i=r));if(a){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[s,o,r]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],c=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(e&&e(s);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},s=self["webpackChunkafterschoolclub"]=self["webpackChunkafterschoolclub"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7364)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.3519cc70.js.map