window.LANSA.addSrc("text",function(e,c,a,b){a.MV={xR:2,pqb:1,afa:2,tqb:4};c.m_b=function(){m.w.call(this);this.Aj=a.MV.xR;this.Mg="";this.nd=b.zd(10,10,120,50);this.Qc=this.Qc|a.ac.lZ|a.ac.fcb|a.ac.Eba|a.ac.uE};var m=c.u(c.m_b,c.Vs);m.U=function(){m.j.U.call(this)};m.eh=function(){return c.V0b};m.Cq=function(){return this.Mg};m.$M=function(b){this.Mg!=b&&(this.Mg=b,this.ca(a.f.h))};m.Sg=function(b){b=this.Aj&~a.MV.pqb|(b?a.MV.pqb:0);this.Aj!=b&&(this.Aj=b,this.ca(a.f.h))};m.He=function(){return 0!=
(this.Aj&a.MV.pqb)?!0:!1};m.Re=function(b){b=this.Aj&~a.MV.afa|(b?a.MV.afa:0);this.Aj!=b&&(this.Aj=b,this.ca(a.f.h))};m.Od=function(){return 0!=(this.Aj&a.MV.afa)?!0:!1};m.$A=function(b){b=this.Aj&~a.MV.tqb|(b?a.MV.tqb:0);this.Aj!=b&&(this.Aj=b,this.ca(a.f.h))};m.Nv=function(){return 0!=(this.Aj&a.MV.tqb)?!0:!1};m.se=function(b){""==b[0]&&(b[0]=a.Pla);m.j.se.call(this,b)};m.zg=function(){this.oJ();this.YH(a.ac.lZ,!this.Ej());b.cb().NB(this)};m.wU=function(){return this.fs()||this.FK?!1:!0};m.Fq=function(c){var e=
!1;switch(b.xr(c)){case a.Z.bkb:case a.Z.ckb:case a.Z.LQa:case a.Z.dda:case a.Z.xy:e=!0}this.lV(c,e);return c.lh?!0:e?!1:m.j.Fq.call(this,c)};m.hja=m[a.$.E4]=function(a){a.dd[0]=this.Ej()};m.kc=function(b){b&&(this.Wi(!0),this.gd()||(this.nq(),this.Ga(a.G.ah)))};m.o3=m[a.Ma.mN]=function(b){b.Ue=a.Ma.Qia|a.Ma.NHa};e.kd(c.m_b,"PRIM_TEXT",{Oa:{Text:{a:m.Cq,g:function(a){this.$M(e.ma(a))}},ReadOnly:{a:m.He,g:function(a){this.Sg(e.za(a))}},WordWrap:{a:m.Od,g:function(a){this.Re(e.za(a))}},SpellCheck:{a:m.Nv,
g:function(a){this.$A(e.za(a))}}},lg:{hg:"Text"}});c.V0b=function(a){p.w.call(this,a);this.Ca=null;this.bb="";this.H1=!1};var p=c.u(c.V0b,c.kn);p.O3=function(){return this.Ca};p.yL=function(){return this.Ca};p.Ja=function(){return this.Ca.value};p.Wa=function(a){this.bb==a||this.H1||(this.bb=a,this.Ca.value=a)};p.PLa=function(){return!1};p.SLa=function(){return!this.pa.wU()||this.Ca.readOnly&&this.Ca.selectionStart==this.Ca.selectionEnd?!1:!0};p.Md=function(){p.j.Md.call(this);this.Ca.readOnly=this.pa.He();
this.Ca.style.whiteSpace=this.pa.Od()?"pre-wrap":"pre";this.Ca.spellcheck=this.pa.Nv();this.H1||(this.Ca.value=this.pa.Cq())};p.lf=function(a,b){this.J=document.createElement("div");this.J.setAttribute("LANSAHandle",this.gc);this.Ca=document.createElement("textarea");this.J.appendChild(this.Ca);var c=this.Ca.style;c.resize="none";c.whiteSpace="pre-wrap";c.background="rgba(0,0,0,0)";c.position="absolute";c.overflowX="hidden";c.overflowY="hidden";c.boxSizing="border-box";c.webkitBoxSizing="border-box";
c.MozBoxSizing="border-box";c.borderStyle="none";c.outline="none";c.borderLeftWidth="0px";c.borderTopWidth="0px";c.borderRightWidth="0px";c.borderBottomWidth="0px";c.left="0px";c.top="0px";c.width="100%";c.height="100%";return p.j.lf.call(this,a,b)};p.oia=function(){var a=this.Ca.style;this.hz();a.whiteSpace="pre";a.overflowX="auto";a.overflowY="auto";a.boxSizing="border-box";a.webkitBoxSizing="border-box";a.MozBoxSizing="border-box";a.borderColor=this.El();a.borderTopWidth="1px";a.borderBottomWidth=
"1px";a.borderLeftWidth="1px";a.borderRightWidth="1px";a.fontSize="inherit";a.fontFamily="inherit"};p.GX=function(){var a=this;this.H2();a.Ca.addEventListener("input",function(b){a.Jrb(b)},!1);a.Ca.addEventListener("compositionstart",function(b){a.J9(b)},!1);a.Ca.addEventListener("compositionend",function(b){a.I9(b)},!1)};p.zM=function(a){p.j.zM.call(this,a);return this.pa.Ej()};p.iqa=function(){p.j.iqa.call(this);var a=this.J.style,b=this.Ca.style;b.fontFamily=a.fontFamily;b.fontSize=a.fontSize;
b.fontWeight=a.fontWeight;b.fontStyle=a.fontStyle;b.textDecoration=a.textDecoration};p.YCa=function(a){if(null==this.xga||this.xga!=a)p.j.YCa.call(this,a),this.Ca.style.color=a};p.Xbc=function(){this.gec||(this.pa.Mg=this.Ca.value,this.pa.kc(!0))};p.Jrb=function(){this.Xbc()};p.J9=function(){this.gec=!0};p.I9=function(){this.gec=!1;this.Xbc()}});