window.LANSA.addSrc("atlm",function(e,c,a,b,p){e.Gb("PRIM_CPST");a.T8={nic:0,pyb:1,mic:2,oyb:4,oic:8,Ofd:15};a.rQ={Uhb:0,G3b:1,F3b:2,ORc:3};a.rQ.v={VERTICAL:a.rQ.Uhb,HORIZONTAL:a.rQ.G3b,DISPLAYPOSITION:a.rQ.F3b,EO:a.rQ.ORc};a.Cxa={Bdd:0,xrb:1,ydd:2,Ddd:3,zdd:4,Cdd:5,wPd:6};a.PBd={JNa:0,KNa:1};a.h0a={Fbb:32};c.BWb=function(b,c,e){r.w.call(this);this.Mb=[];this.Mb=c;this.$h=this.ti=e;this.$qa=this.tsa=0;this.gR=a.T8.nic};var r=c.u(c.BWb,c.se);r.W=function(){r.j.W.call(this)};c.Uxa=function(){m.w.call(this);
this.REa=a.rQ.Uhb};e.Gb("PRIM_TBLO");var m=c.u(c.Uxa,c.eya);m.W=function(){m.j.W.call(this)};m.tud=function(){return this.REa};m.u0c=function(b){this.REa!=b&&(this.REa=b,this.m(a.f.i))};m.o5=function(a,b){var c=this.nma(a);c.o5(b);return c};m.uP=function(a){return this.Ge(a).uP()};m.Umd=function(a){return this.Ge(a)};m.K6a=function(){return a.Cxa.xrb};m.Ho=function(b,c){var e=m.j.Ho.call(this,b,c);if(e){var n=this.Ge(b);!n||n.uP()!=a.Eh.U8&&n.uP()!=a.Eh.R8||(e=!1)}return e};m.Jq=function(b,c){var e=
m.j.Jq.call(this,b,c);if(e){var n=this.Ge(b);!n||n.uP()!=a.Eh.i2&&n.uP()!=a.Eh.S8||(e=!1)}return e};m.zvc=function(a){return this.Ge(a)};m.RO=function(a,b,c,m){m===p&&(m=!0);a=new e.ed("PRIM_ATLI");a.Pi(b);m&&a.Na(this);return a};m.RNc=function(a,b){return b=this.Ue(a,void 0)};m.Emc=function(a){var b=new c.XMa;b.Pi(a);return b};m.Ue=function(b,e){for(var h=this.pB(b,!0);;){var m=new c.BWb(0,h,e);m.$h.Va(m.$h.oe()+this.hh);m.$h.Ua(m.$h.Qd()+this.gh);m.$h.Ra(m.$h.qt()-this.xj);m.$h.Ga(m.$h.XH()-this.wj);
switch(this.REa){case a.rQ.Uhb:this.ZO(m,a.Eh.U8);this.ZO(m,a.Eh.R8);this.ZO(m,a.Eh.i2);this.ZO(m,a.Eh.S8);this.ZO(m,a.Eh.IF);break;case a.rQ.G3b:this.ZO(m,a.Eh.i2);this.ZO(m,a.Eh.S8);this.ZO(m,a.Eh.U8);this.ZO(m,a.Eh.R8);this.ZO(m,a.Eh.IF);break;case a.rQ.F3b:for(var k=null,d=h,g=0;g<d.length&&null!=(k=d[g]);g++){var p=k;p.B6!=a.Eh.IF&&0==(k.ga().eb&a.h0a.Fbb)&&this.v_a(m,p)}this.ZO(m,a.Eh.IF)}if(0==m.tsa&&0==m.$qa)break;e.o_(m.tsa,m.$qa)}return new c.HI(e.aa(),e.ba())};m.ZO=function(b,c){var e=
null,m=b.Mb;switch(c){case a.Eh.U8:case a.Eh.i2:case a.Eh.IF:for(var k=0;k<m.length&&null!=(e=m[k]);k++){var d=e;if(d.B6==c){var g=e.ga();0==(g.eb&a.h0a.Fbb)&&this.v_a(b,d)}}break;case a.Eh.R8:case a.Eh.S8:for(k=m.length-1;0<=k&&null!=(e=m[k]);k--)d=e,d.B6==c&&(g=e.ga(),0==(g.eb&a.h0a.Fbb)&&this.v_a(b,d))}};m.v_a=function(b,c){var e=c.fJb(),m,k;switch(c.B6){case a.Eh.U8:k=0;b.gR|=a.T8.pyb;0!=c.gS&&e.ph(e.aa(),b.ti.ba()*c.gS/100);e.Ab(b.$h.R()+c.Ye(),b.$h.O()+c.Te());b.$h.UPa(b.$h.R(),b.$h.O()+e.ba()+
c.Te()+c.eg());m=b.$h.aa()-(c.Ye()+c.Mf());e.ph(Math.max(m,0),e.ba());this.Jha(c,e);0<k&&(k>b.$h.ba()&&(e=k-b.$h.ba(),e>b.$qa&&(b.$qa=e)),b.$h.t5b(0,k));break;case a.Eh.R8:k=0;b.gR|=a.T8.mic;0!=c.gS&&e.ph(e.aa(),b.ti.ba()*c.gS/100);m=b.$h.ba()-(e.ba()+c.Te()+c.eg());0!=(b.gR&a.T8.pyb)&&(m=Math.max(m,0));b.$h.ph(b.$h.aa(),m);e.Ab(b.$h.R()+c.Ye(),b.$h.ua+c.Te());m=b.$h.aa()-(c.Ye()+c.Mf());e.ph(Math.max(m,0),e.ba());this.Jha(c,e);0<k&&(k>b.$h.ba()&&(e=k-b.$h.ba(),e>b.$qa&&(b.$qa=e)),b.$h.o_(0,-k));
break;case a.Eh.i2:k=0;b.gR|=a.T8.oyb;0!=c.gS&&e.ph(b.ti.aa()*c.gS/100,e.ba());e.Ab(b.$h.R()+c.Ye(),b.$h.O()+c.Te());m=b.$h.R()+e.aa()+c.Ye()+c.Mf();b.$h.UPa(Math.max(m,b.ti.R()),b.$h.O());m=b.$h.ba()-(c.Te()+c.eg());e.ph(e.aa(),Math.max(m,0));this.Jha(c,e);0<k&&(k>b.$h.aa()&&(e=k-b.$h.aa(),e>b.tsa&&(b.tsa=e)),b.$h.t5b(k,0));break;case a.Eh.S8:k=0;b.gR|=a.T8.oic;0!=c.gS&&e.ph(b.ti.aa()*c.gS/100,e.ba());m=b.$h.aa()-(e.aa()+c.Ye()+c.Mf());0!=(b.gR&a.T8.oyb)&&(m=Math.max(m,0));b.$h.ph(m,b.$h.ba());e.Ab(b.$h.va+
c.Ye(),b.$h.O()+c.Te());m=b.$h.ba()-(c.Te()+c.eg());e.ph(e.aa(),Math.max(m,0));this.Jha(c,e);0<k&&(k>b.$h.aa()&&(e=k-b.$h.aa(),e>b.tsa&&(b.tsa=e)),b.$h.o_(-k,0));break;case a.Eh.IF:e.Ab(b.$h.R()+c.Ye(),b.$h.O()+c.Te()),m=b.$h.aa()-(c.Ye()+c.Mf()),k=b.$h.ba()-(c.Te()+c.eg()),e.ph(Math.max(m,0),Math.max(k,0)),this.Jha(c,e)}};m.jib=function(b,c){var e=this.zvc(b);if(e){if(e.uP()==a.Eh.U8||e.uP()==a.Eh.R8)c[0]=!0;if(e.uP()==a.Eh.i2||e.uP()==a.Eh.S8)c[1]=!0}};e.hd(c.Uxa,"PRIM_ATLM",{Qa:{MarginTop:{a:m.Te,
g:function(a){this.Ae(e.L(a))}},MarginBottom:{a:m.eg,g:function(a){this.sf(e.L(a))}},MarginLeft:{a:m.Ye,g:function(a){this.Je(e.L(a))}},MarginRight:{a:m.Mf,g:function(a){this.te(e.L(a))}},MaxHeight:{a:m.NJa,g:function(a){this.Ena(e.L(a))}},MaxWidth:{a:m.OJa,g:function(a){this.y5(e.L(a))}},MinHeight:{a:m.QJa,g:function(a){this.Fna(e.L(a))}},MinWidth:{a:m.RJa,g:function(a){this.A5(e.L(a))}},ProcessingOrder:{a:function(){return e.ta(this.REa,a.rQ.v)},g:function(b){this.u0c(e.qa(b,a.rQ.v))}}}})});window.LANSA.addSrc("atli",function(e,c,a,b){a.Eh={yyb:0,U8:1,R8:2,i2:3,S8:4,IF:5,Wjc:6};a.Eh.v={NONE:a.Eh.yyb,TOP:a.Eh.U8,BOTTOM:a.Eh.R8,LEFT:a.Eh.i2,RIGHT:a.Eh.S8,CENTER:a.Eh.IF,EO:a.Eh.Wjc};a.Yjc={Iha:0};c.XMa=function(){p.w.call(this);this.gS=0;this.B6=a.Eh.yyb;this.gR=a.Yjc.Iha};var p=c.u(c.XMa,c.fya);b.YMa=function(a,b,e){var f=new c.XMa;f.Na(a);f.Pi(b);f.o5(e);return f};p.W=function(){p.j.W.call(this)};p.K6a=function(){return a.Cxa.xrb};p.uP=function(){return this.B6};p.o5=function(b){this.B6!=
b&&(this.B6=b,this.m(a.f.i))};p.Ztd=function(){return this.gS};p.rKd=function(b){0>b?b=0:100<b&&(b=100);this.gS!=b&&(this.gS=b,this.m(a.f.i))};p.J$a=function(b){var c=!1;if(null!=this.cb&&this.cb.M()===b)if(this.cb.Ad()){if(this.cb.mn()||this.B6==a.Eh.IF)c=!0}else this.cb.mn()&&(c=!0);return c};p.fOb=function(a,b,c){this.Na(a);this.Pi(b);this.o5(c)};e.hd(c.XMa,"PRIM_ATLI",{Qa:{MarginTop:{a:p.Te,g:function(a){this.Ae(e.L(a))}},MarginBottom:{a:p.eg,g:function(a){this.sf(e.L(a))}},MarginLeft:{a:p.Ye,
g:function(a){this.Je(e.L(a))}},MarginRight:{a:p.Mf,g:function(a){this.te(e.L(a))}},MaxHeight:{a:p.NJa,g:function(a){this.Ena(e.L(a))}},MaxWidth:{a:p.OJa,g:function(a){this.y5(e.L(a))}},MinHeight:{a:p.QJa,g:function(a){this.Fna(e.L(a))}},MinWidth:{a:p.RJa,g:function(a){this.A5(e.L(a))}},Manage:{a:p.ga,g:p.Pi},Parent:{a:p.M,g:p.Na},Attachment:{a:function(){return e.ta(this.uP(),a.Eh.v)},g:function(b){this.o5(e.qa(b,a.Eh.v))}}}})});