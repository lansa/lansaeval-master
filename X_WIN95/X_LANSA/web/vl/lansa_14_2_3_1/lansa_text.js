window.LANSA.addSrc("text",function(d,c,a,b){a.nX={dT:2,$tb:1,yga:2,dub:4};c.u3b=function(){r.H.call(this);this.fk=a.nX.dT;this.Lg="";this.Mb=b.Bg(10,10,120,50);this.Vc=this.Vc|a.cc.I_|a.cc.Bfb|a.cc.dda|a.cc.uF};var r=c.q(c.u3b,c.Nt);r.R=function(){r.j.R.call(this)};r.hh=function(){return c.d5b};r.er=function(){return this.Lg};r.CO=function(b){this.Lg!=b&&(this.Lg=b,this.ca(a.g.h))};r.kh=function(b){b=this.fk&~a.nX.$tb|(b?a.nX.$tb:0);this.fk!=b&&(this.fk=b,this.ca(a.g.h))};r.Ue=function(){return 0!=
(this.fk&a.nX.$tb)?!0:!1};r.Se=function(b){b=this.fk&~a.nX.yga|(b?a.nX.yga:0);this.fk!=b&&(this.fk=b,this.ca(a.g.h))};r.Td=function(){return 0!=(this.fk&a.nX.yga)?!0:!1};r.aC=function(b){b=this.fk&~a.nX.dub|(b?a.nX.dub:0);this.fk!=b&&(this.fk=b,this.ca(a.g.h))};r.Fw=function(){return 0!=(this.fk&a.nX.dub)?!0:!1};r.ve=function(b){""==b[0]&&(b[0]=a.Tna);r.j.ve.call(this,b)};r.ag=function(){this.KK();this.nJ(a.cc.I_,!this.lk());b.gb().SC(this)};r.dW=function(){return this.Ks()||this.eM?!1:!0};r.hr=function(c){var d=
!1;switch(b.$r(c)){case a.W.Enb:case a.W.Fnb:case a.W.qTa:case a.W.w0:case a.W.gz:d=!0}this.PW(c,d);return c.nh?!0:d?!1:r.j.hr.call(this,c)};r.Mka=r[a.Z.Y5]=function(a){a.gd[0]=this.lk()};r.qc=function(b){b&&(this.uj(!0),this.od()||(this.Tq(),this.Da(a.w.oh)))};r.G4=r[a.Ma.SO]=function(b){b.hf=a.Ma.uka|a.Ma.kKa};d.wd(c.u3b,"PRIM_TEXT",{Pa:{Text:{a:r.er,f:function(a){this.CO(d.ja(a))}},ReadOnly:{a:r.Ue,f:function(a){this.kh(d.wa(a))}},WordWrap:{a:r.Td,f:function(a){this.Se(d.wa(a))}},SpellCheck:{a:r.Fw,
f:function(a){this.aC(d.wa(a))}}},Cg:{wg:"Text"}});c.d5b=function(a){u.H.call(this,a);this.Aa=null;this.Za="";this.a3=!1};var u=c.q(c.d5b,c.mn);u.f5=function(){return this.Aa};u.hN=function(){return this.Aa};u.Ea=function(){return this.Aa.value};u.Wa=function(a){this.Za==a||this.a3||(this.Za=a,this.Aa.value=a)};u.tOa=function(){return!1};u.vOa=function(){return!this.pa.dW()||this.Aa.readOnly&&this.Aa.selectionStart==this.Aa.selectionEnd?!1:!0};u.Qd=function(){u.j.Qd.call(this);this.Aa.readOnly=this.pa.Ue();
this.Aa.style.whiteSpace=this.pa.Td()?"pre-wrap":"pre";this.Aa.spellcheck=this.pa.Fw();this.a3||(this.Aa.value=this.pa.er())};u.af=function(a,b){this.G=document.createElement("div");this.G.setAttribute("LANSAHandle",this.jc);this.Aa=document.createElement("textarea");this.G.appendChild(this.Aa);var c=this.Aa.style;c.resize="none";c.whiteSpace="pre-wrap";c.background="rgba(0,0,0,0)";c.position="absolute";c.overflowX="hidden";c.overflowY="hidden";c.boxSizing="border-box";c.webkitBoxSizing="border-box";
c.MozBoxSizing="border-box";c.borderStyle="none";c.outline="none";c.borderLeftWidth="0px";c.borderTopWidth="0px";c.borderRightWidth="0px";c.borderBottomWidth="0px";c.left="0px";c.top="0px";c.width="100%";c.height="100%";return u.j.af.call(this,a,b)};u.Uja=function(){var a=this.Aa.style;this.Xz();a.whiteSpace="pre";a.overflowX="auto";a.overflowY="auto";a.boxSizing="border-box";a.webkitBoxSizing="border-box";a.MozBoxSizing="border-box";a.borderColor=this.km();a.borderTopWidth="1px";a.borderBottomWidth=
"1px";a.borderLeftWidth="1px";a.borderRightWidth="1px";a.fontSize="inherit";a.fontFamily="inherit"};u.aZ=function(){var a=this;this.Z3();a.Aa.addEventListener("input",function(b){a.rvb(b)},!1);a.Aa.addEventListener("compositionstart",function(b){a.eaa(b)},!1);a.Aa.addEventListener("compositionend",function(b){a.daa(b)},!1)};u.cO=function(a){u.j.cO.call(this,a);return this.pa.lk()};u.tsa=function(){u.j.tsa.call(this);var a=this.G.style,b=this.Aa.style;b.fontFamily=a.fontFamily;b.fontSize=a.fontSize;
b.fontWeight=a.fontWeight;b.fontStyle=a.fontStyle;b.textDecoration=a.textDecoration};u.oFa=function(a){if(null==this.Vha||this.Vha!=a)u.j.oFa.call(this,a),this.Aa.style.color=a};u.Egc=function(){this.Uic||(this.pa.Lg=this.Aa.value,this.pa.qc(!0))};u.rvb=function(){this.Egc()};u.eaa=function(){this.Uic=!0};u.daa=function(){this.Uic=!1;this.Egc()}});
