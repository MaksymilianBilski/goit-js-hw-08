var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var r=i[e];delete i[e];var a={id:e,exports:{}};return s[e]=a,r.call(a.exports,a,a.exports),a.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,s){i[e]=s},e.parcelRequire4c75=r),r.register("gZhiv",(function(e,s){e.exports=function(e){e.plural(/$/,"s"),e.plural(/s$/i,"s"),e.plural(/(ax|test)is$/i,"$1es"),e.plural(/(octop|vir)us$/i,"$1i"),e.plural(/(octop|vir)i$/i,"$1i"),e.plural(/(alias|status)$/i,"$1es"),e.plural(/(bu)s$/i,"$1ses"),e.plural(/(buffal|tomat)o$/i,"$1oes"),e.plural(/([ti])um$/i,"$1a"),e.plural(/([ti])a$/i,"$1a"),e.plural(/sis$/i,"ses"),e.plural(/(?:([^fa])fe|(?:(oa)f)|([lr])f)$/i,"$1ves"),e.plural(/(hive)$/i,"$1s"),e.plural(/([^aeiouy]|qu)y$/i,"$1ies"),e.plural(/(x|ch|ss|sh)$/i,"$1es"),e.plural(/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"),e.plural(/([m|l])ouse$/i,"$1ice"),e.plural(/([m|l])ice$/i,"$1ice"),e.plural(/^(ox)$/i,"$1en"),e.plural(/^(oxen)$/i,"$1"),e.plural(/(quiz)$/i,"$1zes"),e.singular(/s$/i,""),e.singular(/(n)ews$/i,"$1ews"),e.singular(/([ti])a$/i,"$1um"),e.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1sis"),e.singular(/(^analy)ses$/i,"$1sis"),e.singular(/([^f])ves$/i,"$1fe"),e.singular(/(hive)s$/i,"$1"),e.singular(/(tive)s$/i,"$1"),e.singular(/(oave)s$/i,"oaf"),e.singular(/([lr])ves$/i,"$1f"),e.singular(/([^aeiouy]|qu)ies$/i,"$1y"),e.singular(/(s)eries$/i,"$1eries"),e.singular(/(m)ovies$/i,"$1ovie"),e.singular(/(x|ch|ss|sh)es$/i,"$1"),e.singular(/([m|l])ice$/i,"$1ouse"),e.singular(/(bus)es$/i,"$1"),e.singular(/(o)es$/i,"$1"),e.singular(/(shoe)s$/i,"$1"),e.singular(/(cris|ax|test)es$/i,"$1is"),e.singular(/(octop|vir)i$/i,"$1us"),e.singular(/(alias|status)es$/i,"$1"),e.singular(/^(ox)en/i,"$1"),e.singular(/(vert|ind)ices$/i,"$1ex"),e.singular(/(matr)ices$/i,"$1ix"),e.singular(/(quiz)zes$/i,"$1"),e.singular(/(database)s$/i,"$1"),e.irregular("child","children"),e.irregular("person","people"),e.irregular("man","men"),e.irregular("child","children"),e.irregular("sex","sexes"),e.irregular("move","moves"),e.irregular("cow","kine"),e.irregular("zombie","zombies"),e.irregular("oaf","oafs",!0),e.irregular("jefe","jefes"),e.irregular("save","saves"),e.irregular("safe","safes"),e.irregular("fife","fifes"),e.uncountable(["equipment","information","rice","money","species","series","fish","sheep","jeans","sushi"])}}));var a,t=a={array:{del:function(e,s){var i=e.indexOf(s);return-1!=i?0==i?e.slice(1):e.slice(0,i).concat(e.slice(i+1)):e},first:function(e){return e[0]},last:function(e){return e[e.length-1]}},string:{gsub:function(e,s,i){var r,a,l,n,u,o,c;if(null==s||null==i)return t.string.value(e);for(o="",c=e;c.length>0;)if(a=c.match(s)){if(o+=c.slice(0,a.index),"function"==typeof i)a[1]=a[1]||a[0],o+=i(a);else if(i.match(/\$[1-9]/)){for(n=a,l=t.array.del(a,void 0);l!==n;)n=l,l=t.array.del(l,void 0);for(a[1]=a[1]||a[0],u=i,r=1;r<=9;r++)l[r]&&(u=t.string.gsub(u,new RegExp("\\$"+r),l[r]));o+=u}else o+=i;c=c.slice(a.index+a[0].length)}else o+=c,c="";return o},upcase:function(e){var s=t.string.gsub(e,/_([a-z])/,(function(e){return"_"+e[1].toUpperCase()}));return(s=t.string.gsub(s,/\/([a-z])/,(function(e){return"/"+e[1].toUpperCase()})))[0].toUpperCase()+s.substr(1)},capitalize:function(e,s){if(!e.length)return e;var i=e.toLowerCase();return s||(i=t.string.gsub(i,/\s([a-z])/,(function(e){return" "+e[1].toUpperCase()}))),i[0].toUpperCase()+i.substr(1)},downcase:function(e){var s=t.string.gsub(e,/_([A-Z])/,(function(e){return"_"+e[1].toLowerCase()}));return(s=t.string.gsub(s,/\/([A-Z])/,(function(e){return"/"+e[1].toLowerCase()})))[0].toLowerCase()+s.substr(1)},value:function(e){return e.substr(0)}}},l=function(){return this.plurals=[],this.singulars=[],this.uncountables=[],this.humans=[],r("gZhiv")(this),this};l.prototype.plural=function(e,s){"string"==typeof e&&(this.uncountables=a.array.del(this.uncountables,e)),this.uncountables=a.array.del(this.uncountables,s),this.plurals.unshift([e,s])},l.prototype.singular=function(e,s){"string"==typeof e&&(this.uncountables=a.array.del(this.uncountables,e)),this.uncountables=a.array.del(this.uncountables,s),this.singulars.unshift([e,s])},l.prototype.irregular=function(e,s,i){this.uncountables=a.array.del(this.uncountables,e),this.uncountables=a.array.del(this.uncountables,s);var r="";i&&(r="^"),e[0].toUpperCase()==s[0].toUpperCase()?(this.plural(new RegExp("("+r+e[0]+")"+e.slice(1)+"$","i"),"$1"+s.slice(1)),this.plural(new RegExp("("+r+s[0]+")"+s.slice(1)+"$","i"),"$1"+s.slice(1)),this.singular(new RegExp("("+r+s[0]+")"+s.slice(1)+"$","i"),"$1"+e.slice(1))):(this.plural(new RegExp(r+e[0].toUpperCase()+e.slice(1)+"$"),s[0].toUpperCase()+s.slice(1)),this.plural(new RegExp(r+e[0].toLowerCase()+e.slice(1)+"$"),s[0].toLowerCase()+s.slice(1)),this.plural(new RegExp(r+s[0].toUpperCase()+s.slice(1)+"$"),s[0].toUpperCase()+s.slice(1)),this.plural(new RegExp(r+s[0].toLowerCase()+s.slice(1)+"$"),s[0].toLowerCase()+s.slice(1)),this.singular(new RegExp(r+s[0].toUpperCase()+s.slice(1)+"$"),e[0].toUpperCase()+e.slice(1)),this.singular(new RegExp(r+s[0].toLowerCase()+s.slice(1)+"$"),e[0].toLowerCase()+e.slice(1)))},l.prototype.human=function(e,s){this.humans.unshift([e,s])},l.prototype.uncountable=function(e){this.uncountables=this.uncountables.concat(e)},l.prototype.clear=function(e){null==e&&(e="all"),"all"===e&&(this.plurals=[],this.singulars=[],this.uncountables=[],this.humans=[]),this[e]=[]},l.prototype.default=function(){return this.plurals=[],this.singulars=[],this.uncountables=[],this.humans=[],r("gZhiv")(this),this};(new l).clear;const n=document.querySelector('input[type="email"]'),u=document.querySelector('textarea[name="message"]'),o=document.querySelector('button[type="submit"]'),c=(document.querySelector("feedback-form"),{email:"",textarea:""}),p=localStorage.getItem("feedback-form-state"),g=JSON.parse(p);n.addEventListener("input",(()=>{c.email=n.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))})),u.addEventListener("input",(()=>{c.textarea=u.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))}));o.addEventListener("click",(e=>{if(e.preventDefault(),""===n.value||""===u.value)return alert("please fill all the fields!");0!==localStorage.length&&""!==g&&(c.email=n.value,c.textarea=u.value,console.log(c),console.log(localStorage),localStorage.clear())}));window.addEventListener("load",(()=>{null!==localStorage&&null!==localStorage.getItem("feedback-form-state")&&(null===g.email&&null===g.textarea||(n.value=g.email,u.value=g.textarea))}));
//# sourceMappingURL=03-feedback.5379688b.js.map
