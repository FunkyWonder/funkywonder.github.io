(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var l=n(0),o=n(246),r=n(241),c=n(240),a=n(174),s=(n(105),n(5)),i=n(20),u=n(1),f=n(4);function d(e){e.navigation;return Object(f.jsx)(u.default,{style:j.container,children:Object(f.jsx)(i.default,{children:"This is the homescreen 2"})})}var j=s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),g=n(10),h=n.n(g),b={GarantieOpdracht:{},PolisBlad:{},RenteVoorstel:{},Spaargeld:{}},m=n(30),O=function(e){var t=e.size,n=e.children,l=e.uri;return Object(f.jsxs)(u.default,{style:p.container,children:[Object(f.jsx)(m.default,{style:{height:t,width:t},source:{uri:l}}),Object(f.jsx)(i.default,{style:p.container,children:n})]})},p=s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});function x(e){e.navigation;var t=Object(l.useState)([]),n=h()(t,2),o=n[0],r=(n[1],Object(l.useState)([])),c=h()(r,2),a=c[0],s=(c[1],Object(l.useState)([])),i=h()(s,2),d=i[0],j=(i[1],Object(l.useState)([])),g=h()(j,2),m=g[0];g[1];if(null!=b.GarantieOpdracht)try{for(var p=0;null!=b.GarantieOpdracht[p];)o[p]=b.GarantieOpdracht[p],console.log(p),p+=1}catch(x){console.log(x)}if(null!=b.PolisBlad)try{for(p=0;null!=b.PolisBlad[p];)a[p]=b.PolisBlad[p],console.log(p),p+=1}catch(x){console.log(x)}if(null!=b.RenteVoorstel)try{for(p=0;null!=b.RenteVoorstel[p];)d[p]=b.RenteVoorstel[p],console.log(p),p+=1}catch(x){console.log(x)}if(null!=b.Spaargeld)try{for(p=0;null!=b.Spaargeld[p];)m[p]=b.Spaargeld[p],console.log(p),p+=1}catch(x){console.log(x)}return Object(f.jsxs)(u.default,{style:{flexDirection:"column"},children:[Object(f.jsx)(u.default,{style:{flexDirection:"row"},children:null===b.garantieOpdrachtItems?null:o.map((function(e,t){return Object(f.jsxs)(O,{size:150,uri:e,children:["Garantie Opdracht Foto: ",t]})}))}),Object(f.jsx)(u.default,{style:{flexDirection:"row"},children:null===b.polisBladItems?null:a.map((function(e,t){return Object(f.jsxs)(O,{size:150,uri:e,children:["Polis Blad Foto: ",t]})}))}),Object(f.jsx)(u.default,{style:{flexDirection:"row"},children:null===b.renteVoorstelItems?null:d.map((function(e,t){return Object(f.jsxs)(O,{size:150,uri:e,children:["Rente Voorstel Foto: ",t]})}))}),Object(f.jsx)(u.default,{style:{flexDirection:"row"},children:null===b.spaargeldItems?null:m.map((function(e,t){return Object(f.jsxs)(O,{size:150,uri:e,children:["Spaargeld Foto: ",t]})}))})]})}s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});var y=n(22),v=n.n(y),S=n(57),k=n(145),C=n(175);function I(e){e.navigation;var t=Object(l.useState)(),n=h()(t,2),o=(n[0],n[1],Object(l.useState)()),r=h()(o,2),c=r[0],a=r[1],s=[],i=function(){var e=v()((function*(){Object(k.launchImageLibrary)({mediaType:"photo",selectionLimit:5,allowsEditing:!0},(function(e){if(console.log("Response = ",e),e.didCancel)console.log("User cancelled image picker");else if(e.error)console.log("ImagePicker Error: ",e.error);else if(e.customButton)console.log("User tapped custom button",e.customButton);else{var t=0;try{for(;null!=e.assets[t].uri;)s[t]=e.assets[t].uri,console.log(t),t+=1}catch(n){console.log(n)}}}))}));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(u.default,{style:B.container,children:[Object(f.jsx)(C.SelectList,{data:[{key:"1",value:"Garantie Opdracht"},{key:"2",value:"Polis Blad"},{key:"3",value:"Rente Voorstel"},{key:"4",value:"Spaargeld"}],setSelected:a,boxStyles:{backgroundColor:"red"}}),Object(f.jsx)(S.default,{title:"Select Images",onPress:i}),Object(f.jsx)(S.default,{title:"Submit",onPress:function(){var e=0;if(1==c)try{for(;null!=s[e];)b.GarantieOpdracht[e]=s[e],console.log(e),e+=1}catch(t){console.log(t)}else if(2==c)try{for(;null!=s[e];)b.PolisBlad[e]=s[e],console.log(e),e+=1}catch(t){console.log(t)}else if(3==c)try{for(;null!=s[e];)b.RenteVoorstel[e]=s[e],console.log(e),e+=1}catch(t){console.log(t)}else if(4==c)try{for(;null!=s[e];)b.Spaargeld[e]=s[e],console.log(e),e+=1}catch(t){console.log(t)}console.log(b.GarantieOpdracht)}})]})}var B=s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}});s.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),Object(c.default)();var P=Object(r.default)();function R(){return Object(f.jsx)(o.default,{children:Object(f.jsxs)(P.Navigator,{initialRouteName:"Home",screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n,l=e.focused,o=e.color,r=e.size,c=t.name;return"Home"===c?n=l?"home":"home-outline":"Document List"===c?n=l?"list":"list-outline":"Camera"===c&&(n=l?"list":"camera-outline"),Object(f.jsx)(a.default,{name:n,size:r,color:o})}}},children:[Object(f.jsx)(P.Screen,{name:"Home",component:d}),Object(f.jsx)(P.Screen,{name:"Document List",component:x}),Object(f.jsx)(P.Screen,{name:"Camera",component:I})]})})}function w(){return Object(f.jsx)(R,{})}},183:function(e,t,n){e.exports=n(230)}},[[183,1,2]]]);
//# sourceMappingURL=app.bd316a62.chunk.js.map