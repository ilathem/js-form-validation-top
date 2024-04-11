(()=>{"use strict";var e={455:(e,n,a)=>{var o=a(509),d={},t={};o.forEach((function(e){d[e.name.toLowerCase()]=e.code,t[e.code.toLowerCase()]=e.name})),n.QC=function(e){return d[e.toLowerCase()]},n.mG=function(e){return t[e.toLowerCase()]}},523:(e,n,a)=>{a.d(n,{A:()=>c});var o=a(601),d=a.n(o),t=a(314),r=a.n(t)()(d());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Delius&display=swap);"]),r.push([e.id,"* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Delius', cursive;\n  font-size: 1.5rem;\n  color: white;\n}\n\nbody {\n  font-family: 'Delius', cursive;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: normal;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 1em;\n}\n\nform {\n  border: 2px solid white;\n  border-radius: 10px;\n  padding: 2em;\n  display: flex;\n  flex-direction: column;\n}\n\ninput,\nbutton {\n  border: 1px solid white;\n  background: none;\n  border-radius: 5px;\n  color: white;\n  padding: 0.5em;\n  transition: border 500ms;\n  outline: none;\n}\n\nbutton {\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.75);\n  transition: color 500ms;\n}\n\nbutton:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\ninput {\n  margin-bottom: 20px;\n}\n\ninput:valid {\n  border: 1px solid green;\n}\n\ninput:invalid {\n  border: 1px solid red;\n}\n\ninput:focus {\n  outline: 1px solid white;\n  outline-offset: 5px;\n}\n\ninput::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n  transition: color 500ms;\n}\n\ninput:focus::placeholder {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.highFiveModal {\n  z-index: 1;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* backdrop-filter: blur(10px); */\n  text-align: center;\n  position: absolute;\n  user-select: none;\n  scale: 0;\n  opacity: 0;\n}\n\n.highFiveModalBackdrop {\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  backdrop-filter: blur(10px);\n  opacity: 0;\n}\n\n.triggerShowModal {\n  animation-name: showModal;\n  animation-duration: 500ms;\n  animation-fill-mode: forwards;\n}\n\n.triggerHideModal {\n  animation-name: hideModal;\n  animation-duration: 500ms;\n  animation-fill-mode: forwards;\n}\n\n.triggerShowModalBackdrop {\n  animation-name: showModalBackdrop;\n  animation-duration: 500ms;\n  animation-fill-mode: forwards;\n}\n\n.triggerHideModalBackdrop {\n  animation-name: hideModalBackdrop;\n  animation-duration: 500ms;\n  animation-fill-mode: forwards;\n}\n\n@keyframes showModal {\n  from {\n    opacity: 0;\n    scale: 0;\n  }\n  to {\n    opacity: 1;\n    scale: 100%;\n  }\n}\n\n@keyframes hideModal {\n  from {\n    opacity: 1;\n    scale: 100%;\n  }\n  to {\n    opacity: 0;\n    scale: 0;\n  }\n}\n\n@keyframes showModalBackdrop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes hideModalBackdrop {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.highFiveText {\n  z-index: 1;\n}\n\n.highFiveImg {\n  z-index: 1;\n}\n\n.highFiveSmallText {\n  z-index: 1;\n  font-size: 0.75rem;\n  color: white;\n}\n",""]);const c=r},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var a="",o=void 0!==n[5];return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),o&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=e(n),o&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a})).join("")},n.i=function(e,a,o,d,t){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(r[i]=!0)}for(var m=0;m<e.length;m++){var s=[].concat(e[m]);o&&r[s[0]]||(void 0!==t&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=t),a&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=a):s[2]=a),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),n.push(s))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function a(e){for(var a=-1,o=0;o<n.length;o++)if(n[o].identifier===e){a=o;break}return a}function o(e,o){for(var t={},r=[],c=0;c<e.length;c++){var i=e[c],m=o.base?i[0]+o.base:i[0],s=t[m]||0,l="".concat(m," ").concat(s);t[m]=s+1;var u=a(l),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var S=d(p,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:S,references:1})}r.push(l)}return r}function d(e,n){var a=n.domAPI(n);return a.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;a.update(e=n)}else a.remove()}}e.exports=function(e,d){var t=o(e=e||[],d=d||{});return function(e){e=e||[];for(var r=0;r<t.length;r++){var c=a(t[r]);n[c].references--}for(var i=o(e,d),m=0;m<t.length;m++){var s=a(t[m]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}t=i}}},659:e=>{var n={};e.exports=function(e,a){var o=function(e){if(void 0===n[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}n[e]=a}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,a)=>{e.exports=function(e){var n=a.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(a){!function(e,n,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var d=void 0!==a.layer;d&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,d&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var t=a.sourceMap;t&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},509:e=>{e.exports=JSON.parse('[{"code":"AD","name":"Andorra"},{"code":"AE","name":"United Arab Emirates"},{"code":"AF","name":"Afghanistan"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AI","name":"Anguilla"},{"code":"AL","name":"Albania"},{"code":"AM","name":"Armenia"},{"code":"AO","name":"Angola"},{"code":"AQ","name":"Antarctica"},{"code":"AR","name":"Argentina"},{"code":"AS","name":"American Samoa"},{"code":"AT","name":"Austria"},{"code":"AU","name":"Australia"},{"code":"AW","name":"Aruba"},{"code":"AX","name":"Åland Islands"},{"code":"AZ","name":"Azerbaijan"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BB","name":"Barbados"},{"code":"BD","name":"Bangladesh"},{"code":"BE","name":"Belgium"},{"code":"BF","name":"Burkina Faso"},{"code":"BG","name":"Bulgaria"},{"code":"BH","name":"Bahrain"},{"code":"BI","name":"Burundi"},{"code":"BJ","name":"Benin"},{"code":"BL","name":"Saint Barthélemy"},{"code":"BM","name":"Bermuda"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BR","name":"Brazil"},{"code":"BS","name":"Bahamas"},{"code":"BT","name":"Bhutan"},{"code":"BV","name":"Bouvet Island"},{"code":"BW","name":"Botswana"},{"code":"BY","name":"Belarus"},{"code":"BZ","name":"Belize"},{"code":"CA","name":"Canada"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CD","name":"Congo, Democratic Republic of the"},{"code":"CF","name":"Central African Republic"},{"code":"CG","name":"Congo"},{"code":"CH","name":"Switzerland"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"CK","name":"Cook Islands"},{"code":"CL","name":"Chile"},{"code":"CM","name":"Cameroon"},{"code":"CN","name":"China"},{"code":"CO","name":"Colombia"},{"code":"CR","name":"Costa Rica"},{"code":"CU","name":"Cuba"},{"code":"CV","name":"Cabo Verde"},{"code":"CW","name":"Curaçao"},{"code":"CX","name":"Christmas Island"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czechia"},{"code":"DE","name":"Germany"},{"code":"DJ","name":"Djibouti"},{"code":"DK","name":"Denmark"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"DZ","name":"Algeria"},{"code":"EC","name":"Ecuador"},{"code":"EE","name":"Estonia"},{"code":"EG","name":"Egypt"},{"code":"EH","name":"Western Sahara"},{"code":"ER","name":"Eritrea"},{"code":"ES","name":"Spain"},{"code":"ET","name":"Ethiopia"},{"code":"FI","name":"Finland"},{"code":"FJ","name":"Fiji"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"FO","name":"Faroe Islands"},{"code":"FR","name":"France"},{"code":"GA","name":"Gabon"},{"code":"GB","name":"United Kingdom of Great Britain and Northern Ireland"},{"code":"GD","name":"Grenada"},{"code":"GE","name":"Georgia"},{"code":"GF","name":"French Guiana"},{"code":"GG","name":"Guernsey"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GL","name":"Greenland"},{"code":"GM","name":"Gambia"},{"code":"GN","name":"Guinea"},{"code":"GP","name":"Guadeloupe"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"GR","name":"Greece"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"GT","name":"Guatemala"},{"code":"GU","name":"Guam"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HK","name":"Hong Kong"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"HN","name":"Honduras"},{"code":"HR","name":"Croatia"},{"code":"HT","name":"Haiti"},{"code":"HU","name":"Hungary"},{"code":"ID","name":"Indonesia"},{"code":"IE","name":"Ireland"},{"code":"IL","name":"Israel"},{"code":"IM","name":"Isle of Man"},{"code":"IN","name":"India"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"IQ","name":"Iraq"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IS","name":"Iceland"},{"code":"IT","name":"Italy"},{"code":"JE","name":"Jersey"},{"code":"JM","name":"Jamaica"},{"code":"JO","name":"Jordan"},{"code":"JP","name":"Japan"},{"code":"KE","name":"Kenya"},{"code":"KG","name":"Kyrgyzstan"},{"code":"KH","name":"Cambodia"},{"code":"KI","name":"Kiribati"},{"code":"KM","name":"Comoros"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KY","name":"Cayman Islands"},{"code":"KZ","name":"Kazakhstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LB","name":"Lebanon"},{"code":"LC","name":"Saint Lucia"},{"code":"LI","name":"Liechtenstein"},{"code":"LK","name":"Sri Lanka"},{"code":"LR","name":"Liberia"},{"code":"LS","name":"Lesotho"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"LV","name":"Latvia"},{"code":"LY","name":"Libya"},{"code":"MA","name":"Morocco"},{"code":"MC","name":"Monaco"},{"code":"MD","name":"Moldova, Republic of"},{"code":"ME","name":"Montenegro"},{"code":"MF","name":"Saint Martin, (French part)"},{"code":"MG","name":"Madagascar"},{"code":"MH","name":"Marshall Islands"},{"code":"MK","name":"North Macedonia"},{"code":"ML","name":"Mali"},{"code":"MM","name":"Myanmar"},{"code":"MN","name":"Mongolia"},{"code":"MO","name":"Macao"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MS","name":"Montserrat"},{"code":"MT","name":"Malta"},{"code":"MU","name":"Mauritius"},{"code":"MV","name":"Maldives"},{"code":"MW","name":"Malawi"},{"code":"MX","name":"Mexico"},{"code":"MY","name":"Malaysia"},{"code":"MZ","name":"Mozambique"},{"code":"NA","name":"Namibia"},{"code":"NC","name":"New Caledonia"},{"code":"NE","name":"Niger"},{"code":"NF","name":"Norfolk Island"},{"code":"NG","name":"Nigeria"},{"code":"NI","name":"Nicaragua"},{"code":"NL","name":"Netherlands"},{"code":"NO","name":"Norway"},{"code":"NP","name":"Nepal"},{"code":"NR","name":"Nauru"},{"code":"NU","name":"Niue"},{"code":"NZ","name":"New Zealand"},{"code":"OM","name":"Oman"},{"code":"PA","name":"Panama"},{"code":"PE","name":"Peru"},{"code":"PF","name":"French Polynesia"},{"code":"PG","name":"Papua New Guinea"},{"code":"PH","name":"Philippines"},{"code":"PK","name":"Pakistan"},{"code":"PL","name":"Poland"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"PN","name":"Pitcairn"},{"code":"PR","name":"Puerto Rico"},{"code":"PS","name":"Palestine, State of"},{"code":"PT","name":"Portugal"},{"code":"PW","name":"Palau"},{"code":"PY","name":"Paraguay"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RS","name":"Serbia"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"SA","name":"Saudi Arabia"},{"code":"SB","name":"Solomon Islands"},{"code":"SC","name":"Seychelles"},{"code":"SD","name":"Sudan"},{"code":"SE","name":"Sweden"},{"code":"SG","name":"Singapore"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"SI","name":"Slovenia"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SK","name":"Slovakia"},{"code":"SL","name":"Sierra Leone"},{"code":"SM","name":"San Marino"},{"code":"SN","name":"Senegal"},{"code":"SO","name":"Somalia"},{"code":"SR","name":"Suriname"},{"code":"SS","name":"South Sudan"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SV","name":"El Salvador"},{"code":"SX","name":"Sint Maarten, (Dutch part)"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"SZ","name":"Eswatini"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TD","name":"Chad"},{"code":"TF","name":"French Southern Territories"},{"code":"TG","name":"Togo"},{"code":"TH","name":"Thailand"},{"code":"TJ","name":"Tajikistan"},{"code":"TK","name":"Tokelau"},{"code":"TL","name":"Timor-Leste"},{"code":"TM","name":"Turkmenistan"},{"code":"TN","name":"Tunisia"},{"code":"TO","name":"Tonga"},{"code":"TR","name":"Türkiye"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TV","name":"Tuvalu"},{"code":"TW","name":"Taiwan, Province of China"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"UA","name":"Ukraine"},{"code":"UG","name":"Uganda"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"US","name":"United States of America"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VA","name":"Holy See"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"VN","name":"Viet Nam"},{"code":"VU","name":"Vanuatu"},{"code":"WF","name":"Wallis and Futuna"},{"code":"WS","name":"Samoa"},{"code":"YE","name":"Yemen"},{"code":"YT","name":"Mayotte"},{"code":"ZA","name":"South Africa"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]')}},n={};function a(o){var d=n[o];if(void 0!==d)return d.exports;var t=n[o]={id:o,exports:{}};return e[o](t,t.exports,a),t.exports}a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var o in n)a.o(n,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var n=a.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var d=o.length-1;d>-1&&(!e||!/^http(s?):/.test(e));)e=o[d--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.nc=void 0,(()=>{var e=a(72),n=a.n(e),o=a(825),d=a.n(o),t=a(659),r=a.n(t),c=a(56),i=a.n(c),m=a(540),s=a.n(m),l=a(113),u=a.n(l),p=a(523),S={};S.styleTagTransform=u(),S.setAttributes=i(),S.insert=r().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=s(),n()(p.A,S),p.A&&p.A.locals&&p.A.locals;var M,y=a(455);!function(e){e.UK="UK",e.GB="GB",e.JE="JE",e.GG="GG",e.IM="IM",e.US="US",e.CA="CA",e.IE="IE",e.DE="DE",e.JP="JP",e.FR="FR",e.AU="AU",e.IT="IT",e.CH="CH",e.AT="AT",e.ES="ES",e.NL="NL",e.BE="BE",e.DK="DK",e.SE="SE",e.NO="NO",e.BR="BR",e.PT="PT",e.FI="FI",e.AX="AX",e.KR="KR",e.CN="CN",e.TW="TW",e.SG="SG",e.DZ="DZ",e.AD="AD",e.AR="AR",e.AM="AM",e.AZ="AZ",e.BH="BH",e.BD="BD",e.BB="BB",e.BY="BY",e.BM="BM",e.BA="BA",e.IO="IO",e.BN="BN",e.BG="BG",e.KH="KH",e.CV="CV",e.CL="CL",e.CR="CR",e.HR="HR",e.CY="CY",e.CZ="CZ",e.DO="DO",e.EC="EC",e.EG="EG",e.EE="EE",e.FO="FO",e.GE="GE",e.GR="GR",e.GL="GL",e.GT="GT",e.HT="HT",e.HN="HN",e.HU="HU",e.IS="IS",e.IN="IN",e.ID="ID",e.IL="IL",e.JO="JO",e.KZ="KZ",e.KE="KE",e.KW="KW",e.KY="KY",e.LA="LA",e.LV="LV",e.LB="LB",e.LI="LI",e.LT="LT",e.LU="LU",e.MK="MK",e.MY="MY",e.MV="MV",e.MT="MT",e.MU="MU",e.MX="MX",e.MD="MD",e.MC="MC",e.MA="MA",e.NP="NP",e.NZ="NZ",e.NI="NI",e.NG="NG",e.OM="OM",e.PA="PA",e.PK="PK",e.PY="PY",e.PH="PH",e.PL="PL",e.PR="PR",e.RO="RO",e.RU="RU",e.SM="SM",e.SA="SA",e.SN="SN",e.SK="SK",e.SI="SI",e.ZA="ZA",e.LK="LK",e.TJ="TJ",e.TH="TH",e.TN="TN",e.TR="TR",e.TM="TM",e.UA="UA",e.UY="UY",e.UZ="UZ",e.VA="VA",e.VE="VE",e.ZM="ZM",e.AS="AS",e.CC="CC",e.CK="CK",e.RS="RS",e.ME="ME",e.CS="CS",e.YU="YU",e.CX="CX",e.ET="ET",e.FK="FK",e.NF="NF",e.FM="FM",e.GF="GF",e.GN="GN",e.GP="GP",e.GS="GS",e.GU="GU",e.GW="GW",e.HM="HM",e.IQ="IQ",e.KG="KG",e.LR="LR",e.LS="LS",e.MG="MG",e.MH="MH",e.MN="MN",e.MP="MP",e.MQ="MQ",e.NC="NC",e.NE="NE",e.VI="VI",e.VN="VN",e.PF="PF",e.PG="PG",e.PM="PM",e.PN="PN",e.PW="PW",e.RE="RE",e.SH="SH",e.SJ="SJ",e.SO="SO",e.SZ="SZ",e.TC="TC",e.WF="WF",e.XK="XK",e.YT="YT",e.PE="PE",e.INTL="INTL"}(M||(M={}));const $=new Map([[M.UK,/^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],[M.GB,/^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i],[M.JE,/^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[M.GG,/^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[M.IM,/^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],[M.US,/^([0-9]{5})(?:-([0-9]{4}))?$/],[M.CA,/^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],[M.IE,/^([AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/],[M.DE,/^\d{5}$/],[M.JP,/^\d{3}-\d{4}$/],[M.FR,/^\d{2}[ ]?\d{3}$/],[M.AU,/^\d{4}$/],[M.IT,/^\d{5}$/],[M.CH,/^\d{4}$/],[M.AT,/^(?!0)\d{4}$/],[M.ES,/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],[M.NL,/^\d{4}[ ]?[A-Z]{2}$/],[M.BE,/^\d{4}$/],[M.DK,/^\d{4}$/],[M.SE,/^(SE-)?\d{3}[ ]?\d{2}$/],[M.NO,/^\d{4}$/],[M.BR,/^\d{5}[\-]?\d{3}$/],[M.PT,/^\d{4}([\-]\d{3})?$/],[M.FI,/^(FI-|AX-)?\d{5}$/],[M.AX,/^22\d{3}$/],[M.KR,/^\d{5}$/],[M.CN,/^\d{6}$/],[M.TW,/^\d{3}(\d{2,3})?$/],[M.SG,/^\d{6}$/],[M.DZ,/^\d{5}$/],[M.AD,/^AD\d{3}$/],[M.AR,/^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],[M.AM,/^(37)?\d{4}$/],[M.AZ,/^\d{4}$/],[M.BH,/^((1[0-2]|[2-9])\d{2})?$/],[M.BD,/^\d{4}$/],[M.BB,/^(BB\d{5})?$/],[M.BY,/^\d{6}$/],[M.BM,/^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],[M.BA,/^\d{5}$/],[M.IO,/^BBND 1ZZ$/],[M.BN,/^[A-Z]{2}[ ]?\d{4}$/],[M.BG,/^\d{4}$/],[M.KH,/^\d{5}$/],[M.CV,/^\d{4}$/],[M.CL,/^\d{7}$/],[M.CR,/^(\d{4,5}|\d{3}-\d{4})$/],[M.HR,/^(HR-)?\d{5}$/],[M.CY,/^\d{4}$/],[M.CZ,/^\d{3}[ ]?\d{2}$/],[M.DO,/^\d{5}$/],[M.EC,/^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],[M.EG,/^\d{5}$/],[M.EE,/^\d{5}$/],[M.FO,/^\d{3}$/],[M.GE,/^\d{4}$/],[M.GR,/^\d{3}[ ]?\d{2}$/],[M.GL,/^39\d{2}$/],[M.GT,/^\d{5}$/],[M.HT,/^\d{4}$/],[M.HN,/^(?:\d{5})?$/],[M.HU,/^\d{4}$/],[M.IS,/^\d{3}$/],[M.IN,/^\d{6}$/],[M.ID,/^\d{5}$/],[M.IL,/^\d{5,7}$/],[M.JO,/^\d{5}$/],[M.KZ,/^\d{6}$/],[M.KE,/^\d{5}$/],[M.KW,/^\d{5}$/],[M.KY,/^KY[123]-\d{4}$/],[M.LA,/^\d{5}$/],[M.LV,/^(LV-)?\d{4}$/],[M.LB,/^(\d{4}([ ]?\d{4})?)?$/],[M.LI,/^(948[5-9])|(949[0-7])$/],[M.LT,/^(LT-)?\d{5}$/],[M.LU,/^(L-)?\d{4}$/],[M.MK,/^\d{4}$/],[M.MY,/^\d{5}$/],[M.MV,/^\d{5}$/],[M.MT,/^[A-Z]{3}[ ]?\d{2,4}$/],[M.MU,/^((\d|[A-Z])\d{4})?$/],[M.MX,/^\d{5}$/],[M.MD,/^\d{4}$/],[M.MC,/^980\d{2}$/],[M.MA,/^\d{5}$/],[M.NP,/^\d{5}$/],[M.NZ,/^\d{4}$/],[M.NI,/^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],[M.NG,/^(\d{6})?$/],[M.OM,/^(PC )?\d{3}$/],[M.PA,/^\d{4}$/],[M.PK,/^\d{5}$/],[M.PY,/^\d{4}$/],[M.PH,/^\d{4}$/],[M.PL,/^\d{2}-\d{3}$/],[M.PR,/^00[679]\d{2}([ \-]\d{4})?$/],[M.RO,/^\d{6}$/],[M.RU,/^\d{6}$/],[M.SM,/^4789\d$/],[M.SA,/^\d{5}$/],[M.SN,/^\d{5}$/],[M.SK,/^\d{3}[ ]?\d{2}$/],[M.SI,/^(SI-)?\d{4}$/],[M.ZA,/^\d{4}$/],[M.LK,/^\d{5}$/],[M.TJ,/^\d{6}$/],[M.TH,/^\d{5}$/],[M.TN,/^\d{4}$/],[M.TR,/^\d{5}$/],[M.TM,/^\d{6}$/],[M.UA,/^\d{5}$/],[M.UY,/^\d{5}$/],[M.UZ,/^\d{6}$/],[M.VA,/^00120$/],[M.VE,/^\d{4}$/],[M.ZM,/^\d{5}$/],[M.AS,/^96799$/],[M.CC,/^6799$/],[M.CK,/^\d{4}$/],[M.RS,/^\d{5,6}$/],[M.ME,/^8\d{4}$/],[M.CS,/^\d{5}$/],[M.YU,/^\d{5}$/],[M.CX,/^6798$/],[M.ET,/^\d{4}$/],[M.FK,/^FIQQ 1ZZ$/],[M.NF,/^2899$/],[M.FM,/^(9694[1-4])([ \-]\d{4})?$/],[M.GF,/^9[78]3\d{2}$/],[M.GN,/^\d{3}$/],[M.GP,/^9[78][01]\d{2}$/],[M.GS,/^SIQQ 1ZZ$/],[M.GU,/^969[123]\d([ \-]\d{4})?$/],[M.GW,/^\d{4}$/],[M.HM,/^\d{4}$/],[M.IQ,/^\d{5}$/],[M.KG,/^\d{6}$/],[M.LR,/^\d{4}$/],[M.LS,/^\d{3}$/],[M.MG,/^\d{3}$/],[M.MH,/^969[67]\d([ \-]\d{4})?$/],[M.MN,/^\d{6}$/],[M.MP,/^9695[012]([ \-]\d{4})?$/],[M.MQ,/^9[78]2\d{2}$/],[M.NC,/^988\d{2}$/],[M.NE,/^\d{4}$/],[M.VI,/^008(([0-4]\d)|(5[01]))([ \-]\d{4})?$/],[M.VN,/^\d{6}$/],[M.PF,/^987\d{2}$/],[M.PG,/^\d{3}$/],[M.PM,/^9[78]5\d{2}$/],[M.PN,/^PCRN 1ZZ$/],[M.PW,/^96940$/],[M.RE,/^9[78]4\d{2}$/],[M.SH,/^(ASCN|STHL) 1ZZ$/],[M.SJ,/^\d{4}$/],[M.SO,/^\d{5}$/],[M.SZ,/^[HLMS]\d{3}$/],[M.TC,/^TKCA 1ZZ$/],[M.WF,/^986\d{2}$/],[M.XK,/^\d{5}$/],[M.YT,/^976\d{2}$/],[M.PE,/^\d{5}$/],[M.INTL,/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i]]),h=a.p+"34674660d3cfd02bde89.gif";document.querySelector("form").style.zIndex="2",document.querySelector(".highFiveImg").src=h,document.querySelector("#highFiveModal").addEventListener("click",(()=>{document.querySelector("#highFiveModalBackdrop").classList.remove("triggerShowModalBackdrop"),document.querySelector("#highFiveModalBackdrop").classList.add("triggerHideModalBackdrop"),document.querySelector("#highFiveModal").classList.remove("triggerShowModal"),document.querySelector("#highFiveModal").classList.add("triggerHideModal"),document.querySelector("form").style.zIndex="2"}));let A={email:"",country:"",countryCode:"",zip:"",password:"",confirmPassword:""};const f=(e,n)=>{e===n&&""!==e?(document.body.querySelector(".password").setCustomValidity(""),document.body.querySelector(".confirmPassword").setCustomValidity(""),A.password=e,A.confirmPassword=n):(document.body.querySelector(".password").setCustomValidity("Passwords don't match"),document.body.querySelector(".confirmPassword").setCustomValidity("Passwords don't match"))};document.body.querySelector(".email").addEventListener("input",(e=>{((e="")=>{/\S+@\S+\.\S+/.test(e)?(document.body.querySelector(".email").setCustomValidity(""),A.email=e):document.body.querySelector(".email").setCustomValidity("Incorrect email format")})(e.target.value),e.target.reportValidity()})),document.body.querySelector(".country").addEventListener("input",(e=>{((e="")=>{const n=(0,y.QC)(e),a=(0,y.mG)(e);n||a?(document.body.querySelector(".country").setCustomValidity(""),n?(A.countryCode=n,A.country=e):a&&(A.countryCode=e,A.country=a)):document.body.querySelector(".country").setCustomValidity("Incorrect country name")})(e.target.value),e.target.reportValidity()})),document.body.querySelector(".zipCode").addEventListener("input",(e=>{((e="")=>{let n=!1,a="Incorrect zip code";try{n=((e,n)=>{if(!$.has(n))throw Error(`Invalid country code: ${n}`);return $.get(n).test(e)})(e,A.countryCode)}catch(e){a=e.toString()}console.log(e),n?(document.body.querySelector(".zipCode").setCustomValidity(""),A.zip=e):document.body.querySelector(".zipCode").setCustomValidity(a)})(e.target.value,document.body.querySelector(".country").value),e.target.reportValidity()})),document.body.querySelector(".password").addEventListener("input",(e=>{f(e.target.value||"",document.body.querySelector(".confirmPassword").value||""),e.target.reportValidity()})),document.body.querySelector(".confirmPassword").addEventListener("input",(e=>{f(document.body.querySelector(".password").value||"",e.target.value||""),e.target.reportValidity()})),document.body.querySelector("button").addEventListener("click",(e=>{e.preventDefault();let n=0;const a=document.querySelectorAll("input");for(let e=a.length-1;e>=0;e--)a[e].reportValidity()&&n++;5===n&&(document.querySelector("#highFiveModal").classList.remove("triggerHideModal"),document.querySelector("#highFiveModal").classList.add("triggerShowModal"),document.querySelector("#highFiveModalBackdrop").classList.remove("triggerHideModalBackdrop"),document.querySelector("#highFiveModalBackdrop").classList.add("triggerShowModalBackdrop"),document.querySelector("form").style.zIndex="-1"),console.log(n),console.log(A)}))})()})();