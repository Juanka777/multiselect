import{toRefs as e,ref as l,computed as t,watch as n,nextTick as a,openBlock as u,createBlock as r,withKeys as o,withModifiers as i,createVNode as c,createCommentVNode as s,renderSlot as d,toDisplayString as v,withDirectives as p,vModelText as f,Fragment as h,renderList as m,createTextVNode as b,Transition as g,withCtx as y,vShow as S}from"vue";function w(e){return-1!==[null,void 0,!1].indexOf(e)}function O(e){return String(e).toLowerCase().trim()}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function q(a,u,r){var o=e(a),i=o.options,c=o.mode,s=o.trackBy,d=o.limit,v=o.hideSelected,p=o.createTag,f=o.label,h=o.appendNewTag,m=o.multipleLabel,b=o.object,g=o.loading,y=o.delay,S=o.resolveOnLoad,q=o.minChars,x=o.filterResults,V=o.clearOnSearch,B=o.clearOnSelect,T=o.valueProp,D=o.canDeselect,I=o.max,j=r.internalValue,M=r.externalValue,A=r.search,C=r.blurSearch,E=r.clearSearch,$=r.update,N=r.blurInput,R=r.pointer,H=l([]),L=l([]),K=l(!1),F=t((function(){var e,l=L.value||[];return e=l,"[object Object]"===Object.prototype.toString.call(e)&&(l=Object.keys(l).map((function(e){var t,n=l[e];return P(t={},T.value,e),P(t,s.value,n),P(t,f.value,n),t}))),l=l.map((function(e,l){var t;return"object"===k(e)?e:(P(t={},T.value,l),P(t,s.value,e),P(t,f.value,e),t)})),H.value.length&&(l=l.concat(H.value)),l})),_=t((function(){var e=F.value;return J.value.length&&(e=J.value.concat(e)),A.value&&x.value&&(e=e.filter((function(e){return-1!==O(e[s.value]).indexOf(O(A.value))}))),v.value&&(e=e.filter((function(e){return!ie(e)}))),d.value>0&&(e=e.slice(0,d.value)),e})),U=t((function(){switch(c.value){case"single":return!w(j.value[T.value]);case"multiple":case"tags":return!w(j.value)&&j.value.length>0}})),W=t((function(){return void 0!==m&&void 0!==m.value?m.value(j.value):j.value&&j.value.length>1?"".concat(j.value.length," options selected"):"1 option selected"})),z=t((function(){return!F.value.length&&!K.value})),G=t((function(){return F.value.length>0&&0==_.value.length})),J=t((function(){var e;return!1!==p.value&&A.value?-1!==oe(A.value)?[]:[(e={},P(e,T.value,A.value),P(e,f.value,A.value),P(e,s.value,A.value),e)]:[]})),Q=t((function(){switch(c.value){case"single":return null;case"multiple":case"tags":return[]}})),X=t((function(){return g.value||K.value})),Y=function(e){switch("object"!==k(e)&&(e=re(e)),c.value){case"single":$(e);break;case"multiple":case"tags":$(j.value.concat(e))}u.emit("select",ee(e))},Z=function(e){switch("object"!==k(e)&&(e=re(e)),c.value){case"single":te();break;case"tags":case"multiple":$(j.value.filter((function(l){return l[T.value]!=e[T.value]})))}u.emit("deselect",ee(e))},ee=function(e){return b.value?e:e[T.value]},le=function(e){Z(e)},te=function(){$(Q.value)},ne=function(e){switch(c.value){case"single":return!w(j.value)&&j.value[T.value]==e[T.value];case"tags":case"multiple":return!w(j.value)&&-1!==j.value.map((function(e){return e[T.value]})).indexOf(e[T.value])}},ae=function(e){return!0===e.disabled},ue=function(){return!(void 0===I||-1===I.value||!U.value&&I.value>0)&&j.value.length>=I.value},re=function(e){return F.value[F.value.map((function(e){return String(e[T.value])})).indexOf(String(e))]},oe=function(e){return F.value.map((function(e){return O(e[s.value])})).indexOf(O(e))},ie=function(e){return"tags"===c.value&&v.value&&ne(e)},ce=function(e){H.value.push(e)},se=function(){w(M.value)||(j.value=ve(M.value))},de=function(e){K.value=!0,i.value(A.value).then((function(l){L.value=l,"function"==typeof e&&e(l),K.value=!1}))},ve=function(e){return w(e)?"single"===c.value?{}:[]:b.value?e:"single"===c.value?re(e)||{}:e.filter((function(e){return!!re(e)})).map((function(e){return re(e)}))};if("single"!==c.value&&!w(M.value)&&!Array.isArray(M.value))throw new Error('v-model must be an array when using "'.concat(c.value,'" mode'));return i&&"function"==typeof i.value?S.value?de(se):1==b.value&&se():(L.value=i&&i.value?i.value:[],se()),y.value>-1&&n(A,(function(e){e.length<q.value||(K.value=!0,V.value&&(L.value=[]),setTimeout((function(){e==A.value&&i.value(A.value).then((function(l){e==A.value&&(L.value=l,R.value=_.value.filter((function(e){return!0!==e.disabled}))[0]||null,K.value=!1)}))}),y.value))}),{flush:"sync"}),n(M,(function(e){var l,t,n;if(w(e))j.value=ve(e);else switch(c.value){case"single":(b.value?e[T.value]!=j.value[T.value]:e!=j.value[T.value])&&(j.value=ve(e));break;case"multiple":case"tags":l=b.value?e.map((function(e){return e[T.value]})):e,t=j.value.map((function(e){return e[T.value]})),n=t.slice().sort(),l.length===t.length&&l.slice().sort().every((function(e,l){return e===n[l]}))||(j.value=ve(e))}}),{deep:!0}),n((function(){return a.options}),(function(e){"function"!=typeof a.options&&(L.value=a.options)}),{flush:"sync"}),{filteredOptions:_,hasSelected:U,multipleLabelText:W,extendedOptions:F,noOptions:z,noResults:G,resolving:K,busy:X,select:Y,deselect:Z,remove:le,clear:te,isSelected:ne,isDisabled:ae,isMax:ue,getOption:re,handleOptionClick:function(e){if(!ae(e))switch(c.value){case"single":if(ne(e))return void(D.value&&Z(e));Y(e),C(),N();break;case"multiple":if(ne(e))return void Z(e);if(ue())return;Y(e),B.value&&E();break;case"tags":if(ne(e))return void Z(e);if(ue())return;void 0===re(e[T.value])&&p.value&&(u.emit("tag",e[T.value]),h.value&&ce(e),E()),B.value&&E(),Y(e)}},handleTagRemove:function(e,l){0===l.button?le(e):l.preventDefault()},refreshOptions:function(e){de(e)},resolveOptions:de}}function x(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,l){if(!e)return;if("string"==typeof e)return V(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,l)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}var B={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1}},setup(u,r){const o=function(t,n){var a=e(t),u=a.value,r=a.modelValue,o=a.mode;return{internalValue:l("single"!==o.value?[]:{}),externalValue:void 0!==n.expose?r:u}}(u,r),i=function(n,a,u){var r=e(n),o=r.searchable,i=(r.id,l(null)),c=t((function(){return o.value?-1:0}));return{multiselect:i,tabindex:c,focusInput:function(){i.value.querySelector(".multiselect-input").focus()},blurInput:function(){i.value.querySelector(".multiselect-input").blur()}}}(u),c={pointer:l(null)},s=function(l,t,n){var a=e(l),u=a.object,r=a.valueProp,o=a.mode,i=n.internalValue,c=function(e){return u.value||w(e)?e:Array.isArray(e)?e.map((function(e){return e[r.value]})):e[r.value]},s=function(e){return w(e)?"single"===o.value?{}:[]:e};return{update:function(e){i.value=s(e);var l=c(e);t.emit("change",l),t.emit("input",l),t.emit("update:modelValue",l)}}}(u,r,{internalValue:o.internalValue}),d=function(a,u,r){var o=e(a),i=o.searchable,c=o.mode,s=r.internalValue,d=l(null),v=l(null),p=t((function(){return d.value?"".concat(d.value.length,"ch"):"tags"===c.value&&-1===[null,void 0].indexOf(s.value)&&s.value.length?"1ch":"100%"}));return n(d,(function(e){u.emit("search-change",e)})),{search:d,input:v,tagsSearchWidth:p,clearSearch:function(){d.value=""},focusSearch:function(){v.value.focus()},blurSearch:function(){i.value&&v.value.blur()}}}(u,r,{internalValue:o.internalValue}),v=function(n,a,u){var r=e(n),o=r.maxHeight,i=r.disabled,c=r.searchable,s=u.multiselect,d=u.blurInput,v=u.blurSearch,p=u.focusInput,f=u.focusSearch,h=l(!1),m=t((function(){return"".concat(o.value,"px")}));return{isOpen:h,contentMaxHeight:m,openDropdown:function(){i.value||(h.value=!0,a.emit("open"))},closeDropdown:function(){h.value=!1,a.emit("close")},open:function(){c&&c.value?f():p()},close:function(){c&&c.value?v():d()},handleInputMousedown:function(e){h.value&&!c.value&&(s.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),s.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(u,r,{multiselect:i.multiselect,blurInput:i.blurInput,blurSearch:d.blurSearch,focusInput:i.focusInput,focusSearch:d.focusSearch}),p=q(u,r,{externalValue:o.externalValue,internalValue:o.internalValue,search:d.search,blurSearch:d.blurSearch,clearSearch:d.clearSearch,update:s.update,blurInput:i.blurInput,pointer:c.pointer}),f=function(l,u,r){var o=e(l),i=o.id,c=o.valueProp,s=r.filteredOptions,d=r.handleOptionClick,v=r.search,p=r.pointer,f=t((function(){return s.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){p.value=e},m=function(){p.value=f.value[0]||null},b=function(){p.value=null},g=function(){var e=document.getElementById(i.value).querySelector(".is-pointed");if(e){var l=e.parentElement;e.offsetTop+e.offsetHeight>l.clientHeight+l.scrollTop&&(l.scrollTop=e.offsetTop+e.offsetHeight-l.clientHeight),e.offsetTop<l.scrollTop&&(l.scrollTop=e.offsetTop)}};return n(v,(function(e){m()})),{pointer:p,isPointed:function(e){return!!p.value&&p.value[c.value]==e[c.value]},setPointer:h,setPointerFirst:m,clearPointer:b,selectPointer:function(){p.value&&!0!==p.value.disabled?(d(p.value),b()):b()},forwardPointer:function(){if(null===p.value)h(f.value[0]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])+1;f.value.length<=e&&(e=0),h(f.value[e]||null)}a((function(){g()}))},backwardPointer:function(){if(null===p.value)h(f.value[f.value.length-1]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])-1;e<0&&(e=f.value.length-1),h(f.value[e]||null)}a((function(){g()}))}}}(u,0,{filteredOptions:p.filteredOptions,handleOptionClick:p.handleOptionClick,search:d.search,pointer:c.pointer}),h=function(l,t,n){var a=e(l).mode,u=n.internalValue,r=n.update,o=n.closeDropdown,i=n.clearPointer,c=n.search;return{handleBackspace:function(e){"single"!==a.value&&r(x(u.value).slice(0,-1))},handleEsc:function(e){o(),i(),e.target.blur()},handleSearchBackspace:function(e){""!==c.value&&e.stopPropagation()}}}(u,0,{internalValue:o.internalValue,update:s.update,closeDropdown:v.closeDropdown,clearPointer:f.clearPointer,search:d.search});return{...o,...v,...i,...c,...s,...d,...p,...f,...h}}};const T={class:"multiselect-single-label"},D={class:"multiselect-multiple-label"},I={key:2,class:"multiselect-search"},j={key:3,class:"multiselect-tags"},M={class:"multiselect-tag"},A={class:"multiselect-placeholder"},C={class:"multiselect-spinner"},E={class:"multiselect-no-options"},$={class:"multiselect-no-results"};B.render=function(e,l,t,n,a,w){return u(),r("div",{class:["multiselect",[`is-${t.mode}`,{"is-open":e.isOpen,"is-searchable":t.searchable,"is-disabled":t.disabled,"no-caret":!t.caret}]],id:t.id,onKeydown:l[28]||(l[28]=o(i((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[c("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:l[19]||(l[19]=(...l)=>e.handleInputMousedown&&e.handleInputMousedown(...l)),onFocus:l[20]||(l[20]=(...l)=>e.openDropdown&&e.openDropdown(...l)),onBlur:l[21]||(l[21]=(...l)=>e.closeDropdown&&e.closeDropdown(...l)),onKeyup:[l[22]||(l[22]=o(((...l)=>e.handleEsc&&e.handleEsc(...l)),["esc"])),l[23]||(l[23]=o(((...l)=>e.selectPointer&&e.selectPointer(...l)),["enter"]))],onKeydown:[l[24]||(l[24]=o(i(((...l)=>e.handleBackspace&&e.handleBackspace(...l)),["prevent"]),["delete"])),l[25]||(l[25]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["prevent"]),["up"])),l[26]||(l[26]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["prevent"]),["down"]))]},[s(" Single label "),"single"==t.mode&&e.hasSelected&&!e.search&&e.internalValue?d(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[c("div",T,v(e.internalValue[t.label]),1)])):s("v-if",!0),s(" Multiple label "),"multiple"==t.mode&&e.hasSelected&&!e.search?d(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[c("div",D,v(e.multipleLabelText),1)])):s("v-if",!0),s(" Search "),"tags"!==t.mode&&t.searchable&&!t.disabled?(u(),r("div",I,[p(c("input",{"onUpdate:modelValue":l[1]||(l[1]=l=>e.search=l),onFocus:l[2]||(l[2]=i(((...l)=>e.openDropdown&&e.openDropdown(...l)),["stop"])),onBlur:l[3]||(l[3]=i(((...l)=>e.closeDropdown&&e.closeDropdown(...l)),["stop"])),onKeyup:[l[4]||(l[4]=o(i(((...l)=>e.handleEsc&&e.handleEsc(...l)),["stop"]),["esc"])),l[5]||(l[5]=o(i(((...l)=>e.selectPointer&&e.selectPointer(...l)),["stop"]),["enter"]))],onKeydown:[l[6]||(l[6]=o(((...l)=>e.handleSearchBackspace&&e.handleSearchBackspace(...l)),["delete"])),l[7]||(l[7]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["stop"]),["up"])),l[8]||(l[8]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["stop"]),["down"]))],ref:"input"},null,544),[[f,e.search]])])):s("v-if",!0),s(" Tags (with search) "),"tags"==t.mode?(u(),r("div",j,[(u(!0),r(h,null,m(e.internalValue,((n,a,o)=>(u(),r("span",{key:o},[d(e.$slots,"tag",{option:n,handleTagRemove:e.handleTagRemove,disabled:t.disabled},(()=>[c("div",M,[b(v(n[t.label])+" ",1),t.disabled?s("v-if",!0):(u(),r("i",{key:0,onClick:l[9]||(l[9]=i((()=>{}),["prevent"])),onMousedown:i((l=>e.handleTagRemove(n,l)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),t.searchable&&!t.disabled?(u(),r("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[p(c("input",{"onUpdate:modelValue":l[10]||(l[10]=l=>e.search=l),onFocus:l[11]||(l[11]=i(((...l)=>e.openDropdown&&e.openDropdown(...l)),["stop"])),onBlur:l[12]||(l[12]=i(((...l)=>e.closeDropdown&&e.closeDropdown(...l)),["stop"])),onKeyup:[l[13]||(l[13]=o(i(((...l)=>e.handleEsc&&e.handleEsc(...l)),["stop"]),["esc"])),l[14]||(l[14]=o(i(((...l)=>e.selectPointer&&e.selectPointer(...l)),["stop"]),["enter"]))],onKeydown:[l[15]||(l[15]=o(((...l)=>e.handleSearchBackspace&&e.handleSearchBackspace(...l)),["delete"])),l[16]||(l[16]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["stop"]),["up"])),l[17]||(l[17]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["stop"]),["down"]))],style:{width:e.tagsSearchWidth},ref:"input"},null,36),[[f,e.search]])],4)):s("v-if",!0)])):s("v-if",!0),s(" Placeholder "),!t.placeholder||e.hasSelected||e.search?s("v-if",!0):d(e.$slots,"placeholder",{key:4},(()=>[c("div",A,v(t.placeholder),1)])),c(g,{name:"multiselect-loading"},{default:y((()=>[p(c("div",C,null,512),[[S,e.busy]])])),_:1}),"single"!==t.mode&&e.hasSelected&&!t.disabled?(u(),r("a",{key:5,class:"multiselect-clear",onClick:l[18]||(l[18]=i(((...l)=>e.clear&&e.clear(...l)),["prevent"]))})):s("v-if",!0)],40,["tabindex"]),s(" Options "),e.resolving&&t.clearOnSearch?s("v-if",!0):(u(),r(g,{key:0,name:"multiselect",onAfterLeave:e.clearSearch},{default:y((()=>[p(c("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[d(e.$slots,"beforelist"),(u(!0),r(h,null,m(e.filteredOptions,((n,a,o)=>(u(),r("a",{tabindex:-1,href:"",class:["multiselect-option",{"is-pointed":e.isPointed(n),"is-selected":e.isSelected(n),"is-disabled":e.isDisabled(n)}],key:o,onMousedown:l[27]||(l[27]=i((()=>{}),["prevent"])),onMouseenter:l=>e.setPointer(n),onClick:i((l=>e.handleOptionClick(n)),["stop","prevent"])},[d(e.$slots,"option",{option:n,search:e.search},(()=>[c("span",null,v(n[t.label]),1)]))],42,["onMouseenter","onClick"])))),128)),p(c("span",null,[d(e.$slots,"nooptions",{},(()=>[c("div",E,v(t.noOptionsText),1)]))],512),[[S,e.noOptions]]),p(c("span",null,[d(e.$slots,"noresults",{},(()=>[c("div",$,v(t.noResultsText),1)]))],512),[[S,e.noResults]]),d(e.$slots,"afterlist")],4),[[S,e.isOpen]])])),_:3},8,["onAfterLeave"]))],42,["id"])},B.__file="src/Multiselect.vue";export default B;
