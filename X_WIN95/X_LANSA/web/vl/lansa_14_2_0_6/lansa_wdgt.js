window.LANSA.addSrc("wdgt",function(e,c,a,b,p){var r={};c.m0b=function(a){m.w.call(this);this.QDa=a;this.$Ua=function(){};this.eW=this.Yub=!1;this.tvb=[];this.svb=[];this.ovb=[];this.nvb=[];this.qvb=[]};var m=c.u(c.m0b,c.se);m.$P=function(){return this.Yub};m.ah=function(){return this.QDa.nm};m.XBc=function(){return this.QDa.js||[]};m.HCc=function(){return this.QDa.st||[]};m.Exc=function(){return this.QDa.fn};m.xyc=function(){return this.QDa.fe};m.HX=function(){return this.$Ua};m.ySc=function(){function a(){if(n<
m.length){var c=m[n],e=document.createElement("script");e.type="text/javascript";e.onload=function(){e.onload=null;e.onerror=null;n++;a()};e.onerror=function(){e.onload=null;e.onerror=null;throw"Error defining Widget "+d+", failed to load script: "+c;};document.body.appendChild(e);e.src=c}else b()}function b(){function a(){if(!c.Yub){for(c.Yub=!0;0<c.nvb.length;){var b=c.nvb.shift();c.E$a(b)}for(;0<c.svb.length;)b=c.svb.shift(),c.G$a(b.urb,b.Ved,b.value);for(;0<c.qvb.length;)b=c.qvb.shift(),c.pOb(b.urb,
b.parent);for(;0<c.tvb.length;)b=c.tvb.shift(),c.H$a(b);for(;0<c.ovb.length;)b=c.ovb.shift(),c.F$a(b)}}var d=c.Exc(),g=c.$Ua.prototype;e&&e(g);var f={Loading:{},Completed:{},Finalize:function(){a()}};d(g,f)!==f.Loading&&a()}var c=this,d=c.ah(),e=c.xyc();r[d]=c;for(var g=c.HCc(),f=0;f<g.length;f++){var k=g[f],h=document.createElement("link");h.type="text/css";h.rel="stylesheet";h.href=k;document.body.appendChild(h)}var n=0,m=c.XBc();a()};m.G$a=function(a,b,c){if(this.$P()){var d=a["set"+b];if(!d)throw e.oTc("set"+
b);d&&d.call(a,c)}else this.svb.push({urb:a,Ved:b,value:c})};m.F$a=function(a){this.$P()?a.CIa():this.ovb.push(a)};m.E$a=function(a){if(this.$P()){var b=a.onCreateInstance;b&&b.call(a)}else this.nvb.push(a)};m.pOb=function(a,b){if(this.$P()){var c=a.onRealizeControl;if(!c)throw e.nTc();c.call(a,b)}else this.qvb.push({urb:a,parent:b})};m.H$a=function(a){if(this.$P()){var b=a.onSizeChanged;b&&b.call(a)}else this.tvb.push(a)};c.afb=function(){s.w.call(this)};var s=c.u(c.afb,c.pm);s.Dx=function(){return this.Oa()&&
this.Oa().aFc()?this:null};s[a.$.Yx]=function(b){var c=!1;this.Oa()&&(c=b.Mc!==p?b.Mc:a.Z.$I,c=c==a.Z.$I||c==a.Z.Pw||c==a.Z.nC?this.Oa().bIb(null):this.Oa().cIb(null));c||s.j.lT.call(this,b)};s[a.$.sxa]=function(b){var c=!1;this.Oa()&&(c=(b.Mc!==p?b.Mc:a.Z.$I)==a.Z.$I?this.Oa().bIb(document.activeElement):this.Oa().cIb(document.activeElement));c||s.j.K2a.call(this,b)};c.g_b=function(){f.w.call(this)};var f=c.u(c.g_b,c.td);e.hd(c.g_b,"PRIM_WDGT",{});c.i_b=function(){h.w.call(this);var a=this.eJa(),
a=this.ES=r[a],b=this.oH=new (a.HX());b.LANSA_Component=this;b.LANSA_Class=a;a.E$a(b)};var h=c.u(c.i_b,c.td);h.D$a=function(a,b){if(this.ES.$P()){var c=this.oH[a];if(!c)throw e.k4b(a);return c.apply(this.oH,b)}throw e.yPa();};h.Fva=function(a){if(this.ES.$P()){var b=this.oH["get"+a];if(!b)throw e.j4b("get"+a);return b.call(this.oH)}throw e.yPa();};h.wAa=function(a,b){this.ES.G$a(this.oH,a,b)};h.W3=function(){k.j.W3.call();var a=this;setTimeout(function(){a.ES.F$a(a)},5)};h.CIa=function(){this.Ha(a.J.AY)};
e.kb(c.i_b,"PRIM_WDGT","Object",{});var n=h;n.get=n.Fva;n.set=n.wAa;n.invoke=n.D$a;c.h_b=function(){k.w.call(this);var b=this.eJa(),b=this.ES=r[b],c=this.oH=new (b.HX());c.LANSA_Component=this;c.LANSA_Class=b;b.E$a(c);this.ig&=~a.Jg.dQ;this.ig&=~a.Jg.JY};var k=c.u(c.h_b,c.afb);k.Sg=function(){return c.l0b};k.Id=function(a,c,d){k.j.Id.call(this,a,c,d);a=this.Oa().gb();b.Ld[a].pMc(this.oH)};k.D$a=function(a,b){if(this.ES.$P()){var c=this.oH[a];if(!c)throw e.k4b(a);return c.apply(this.oH,b)}throw e.yPa();
};k.Fva=function(a){if(this.ES.$P()){var b=this.oH["get"+a];if(!b)throw e.j4b("get"+a);return b.call(this.oH)}throw e.yPa();};k.wAa=function(a,b){this.ES.G$a(this.oH,a,b)};k.YDd=function(){this.CIa()};k[a.$.$aa]=function(){this.ES.F$a(this)};k[a.$.lG]=function(){this.Pb()&&this.ES.H$a(this.oH)};k.lca=function(){k.j.lca.call(this);this.Pb()&&this.ES.H$a(this.oH)};e.kb(c.h_b,"PRIM_WDGT","Control",{});n=k;n.get=n.Fva;n.set=n.wAa;n.invoke=n.D$a;c.b_b=function(){d.w.call(this);this.qd=b.Dd(0,0,100,100);
this.sDa=this.UDa=""};var d=c.u(c.b_b,c.afb);d.Sg=function(){return c.M_b};d.fzc=function(){return this.UDa};d.i_c=function(b){this.UDa!=b&&(this.UDa=b,this.ea(a.f.i),this.Hd())};d.yT=function(){return this.sDa};d.Yjb=function(a){this.sDa=a};d.kC=function(a){var d=this.Ho(),e=this.Jq();if(d||e){var g=new c.ha,f=[];f[0]=d;f[1]=e;f[2]=a;f[3]=0;f[4]=0;var k=this.gb();f[3]=0;f[4]=0;null!=k&&b.Ld[k].ubd(f);g.Ra(f[3]);g.Ga(f[4]);d&&a.Ra(a.R()+this.ca.Xi()+g.aa()+this.ca.ek());e&&a.Ga(a.O()+this.ca.fk()+
g.ba()+this.ca.Jl())}};e.kb(c.b_b,"PRIM_WEB","HtmlContainer",{Qa:{Html:{a:d.fzc,g:function(a){this.i_c(e.na(a))}},Description:{a:d.yT,g:function(a){this.Yjb(e.na(a))}}},Zf:{Tf:"Html"}});c.pfb=function(a){g.w.call(this,a)};var g=c.u(c.pfb,c.qm);g.YKa=function(){return!1};g.aLa=function(){return this.pa.Cr()||this.pa.lK?!1:!0};g.aFc=function(){return 0<this.G0a().length};g.eM=function(a){g.j.eM.call(this,a);return!1};g.bIb=function(a){var b=this.G0a();for(a=a?b.indexOf(a)+1:0;0<=a&&a<b.length;){var c=
b[a];if(c&&(c.focus(),c==document.activeElement))return!0;a++}return!1};g.cIb=function(a){var b=this.G0a();for(a=a?b.indexOf(a)-1:b.length-1;0<=a;){var c=b[a];if(c&&(c.focus(),c==document.activeElement))return!0;a--}return!1};g.G0a=function(){var a=[],b=[];this.v2b(this.G,b);for(var c=1;c<b.length;c++)a=a.concat(b[c]||[]);return a=a.concat(b[0]||[])};g.v2b=function(a,b){var c=a.tabIndex;0<=c&&(b[c]===p&&(b[c]=[]),b[c].push(a));for(var c=a.childNodes,d=0;d<c.length;d++)a=c[d],this.v2b(a,b)};g.N2=g[a.La.VM]=
function(b){b.Me=a.La.iia|a.La.cHa};c.l0b=function(a){y.w.call(this,a);this.cb=null};var y=c.u(c.l0b,c.pfb);y.df=function(a,b){this.G=document.createElement("div");this.G.setAttribute("id",a+this.fc);this.G.setAttribute("LANSAHandle",this.fc);return y.j.df.call(this,a,b)};y.pMc=function(a){null==this.cb&&(this.cb=document.createElement("div"),this.cb.style.left="0px",this.cb.style.top="0px",this.cb.style.width="100%",this.cb.style.height="100%",a.LANSA_Class.pOb(a,this.cb),this.G.appendChild(this.cb))};
c.M_b=function(a){z.w.call(this,a);this.cb=null};var z=c.u(c.M_b,c.pfb);z.Qy=function(){z.j.Qy.call(this);this.G.style.whiteSpace="normal"};z.df=function(a,b){this.G=document.createElement("div");this.G.setAttribute("id",a+this.fc);this.G.setAttribute("LANSAHandle",this.fc);this.cb=document.createElement("div");this.cb.style.left="0px";this.cb.style.top="0px";this.cb.style.width="100%";this.cb.style.height="100%";this.cb.innerHTML=this.pa.UDa;this.G.appendChild(this.cb);return z.j.df.call(this,a,
b)};z.hbd=function(){var a=this.pa.Ho(),b=this.pa.Jq();this.cb.style.width=a?"":"100%";this.cb.style.height=b?"":"100%";this.cb.innerHTML=this.pa.UDa};z.Id=function(){z.j.Id.call(this);this.hbd()};z.ubd=function(a){var b=a[0],c=a[2],d=this.cb.style.width;a[1]&&!b&&(this.cb.style.width=c.aa()+"px");a[3]=this.cb.clientWidth;a[4]=this.cb.clientHeight;this.cb.style.width=d}});
