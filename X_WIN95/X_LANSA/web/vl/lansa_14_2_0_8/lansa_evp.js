window.LANSA.addSrc("evp",function(e,c,a,b){var m=a.Hk.lI,p=a.Cl.j$,l=a.fi.uA,s=a.mn.e5,g=null;a.my={ieb:0,vNa:16,seb:32,neb:64,$cb:128};a.my.v={NONE:a.my.ieb,LEFT:a.my.vNa,TOP:a.my.seb,RIGHT:a.my.neb,BOTTOM:a.my.$cb};a.QU={g9a:256,WMb:512,VMb:1024};a.QU.v={LEFT:a.QU.g9a,RIGHT:a.QU.WMb,CENTER:a.QU.VMb};a.RU={Tcc:4096,Scc:8192,Arb:16384};a.RU.v={TOP:a.RU.Tcc,BOTTOM:a.RU.Scc,CENTER:a.RU.Arb};a.V4a={TOd:0,zrb:65536};a.eG={wHb:15,EHb:240,CHb:3840,KHb:61440,Wld:983040,xHb:15728640,AHb:251658240,DHb:4026531840};
a.RG={dRc:0,eib:256,fib:512,sPa:1024,dib:2048};a.gi={O4a:1,J4a:2,ZIa:4,R4a:8,S4a:16,N4a:32,Q4a:64,aJa:128,$Ia:65536,IHb:131072,T4a:262144,M4a:524288,HHb:3840,FHb:61440,rja:4026531840};c.N4=function(c){q.w.call(this);this.Cra=c;this.nd=b.zd(0,0,0,0);this.vh=0;this.uh=150;this.Nj=this.Oj=0;this.az=this.Wr=this.LS=this.gb=null;this.Bs=a.xo.o$;this.te=null;this.gf=this.jm=0;this.ovb=this.pvb=this.pub=this.qub=this.rub=null;this.Nra=this.xra=this.EK="";this.oK=null;this.Qc=this.Qc|a.$b.CMa|a.$b.Lxa|a.$b.OU|
a.$b.Bba|a.$b.Nxa;this.jm=a.Hk.OB|a.my.vNa|a.QU.g9a|a.RU.Arb;this.gf=a.gi.ZIa|a.gi.aJa|a.RG.sPa|a.gi.$Ia;this.et(!1);this.g7b(m);this.Hj(p);this.Gj(l);this.Gm(s);this.hRa(!0)};var q=c.u(c.N4,c.hn);q.U=function(){q.j.U.call(this);this.tBa(null);this.Xca();this.l6(null);b.la(this.LS);this.LS=null;b.la(this.oK);this.oK=null};q.qz=function(){return this.Cra.qz()};q.DKb=function(){return this.jm&a.eG.CHb};q.Baa=function(){return this.jm&a.eG.EHb};q.lU=function(){return this.gf&a.gi.HHb};q.EKb=function(){return this.jm&
a.eG.KHb};q.d6=function(b){this.EK!=b&&(this.EK=b,this.hh(),this.ca(a.f.h))};q.KKa=function(){return this.EK};q.Kja=function(){var a=[""],b=this.cc();b&&b.xQa(a);return a[0]};q.o0c=function(b){b|=this.jm&~a.eG.CHb;this.jm!=b&&(this.jm=b,this.nb(),this.ca(a.f.h),this.Af())};q.P7b=function(b){b|=this.gf&~a.gi.HHb;this.gf!=b&&(this.gf=b,this.nb(),this.ca(a.f.h),this.lrb(),this.Af())};q.p0c=function(b){b|=this.jm&~a.eG.EHb;this.jm!=b&&(this.jm=b,this.nb(),this.ca(a.f.h),this.Af())};q.sVc=function(){var b=
new c.ga(0,0,0,0);if(this.Baa()!=a.my.ieb){for(var b=this.Oe(),d=b.va,e=b.ua,f=0,g=0,l,m=this.Lh,q=0;q<m.length&&null!=(l=m[q]);q++)if(l!=this.Pe())var s=l.bl(),d=Math.min(d,s.Q()),e=Math.min(e,s.O()),f=Math.max(f,s.va),g=Math.max(g,s.ua);switch(this.Baa()){case a.my.ieb:b.Ah(d,b.ba());break;case a.my.vNa:b.Ah(d,b.ba());break;case a.my.seb:b.Ah(b.aa(),e);break;case a.my.neb:b.IQa(f,0);break;case a.my.$cb:b.IQa(0,g)}}return b};q.$6a=function(){return(this.jm&a.eG.DHb)>>28};q.g7b=function(b){b=this.jm&
~a.eG.DHb|b<<28;this.jm!=b&&(this.jm=b,this.nb(),this.ca(a.f.h),this.Af())};q.n7a=function(){return this.jm&a.eG.wHb};q.s0c=function(b){b|=this.jm&~a.eG.wHb;this.jm!=b&&(this.jm=b,this.nb(),this.Kd(),this.ca(a.f.h),this.Af())};q.tKa=function(){var b;switch(this.n7a()){case a.Hk.OB:case a.Hk.MX:case a.Hk.Nta:b=this.hb().E5(this.n7a(),a.ZY.WLa);break;case a.Hk.lI:b=this.ob()}return b};q.t0c=function(b){b|=this.jm&~a.eG.KHb;this.jm!=b&&(this.jm=b,this.nb(),this.Kd(),this.ca(a.f.h),this.Af())};q.dBc=
function(){return this.Nj};q.A0c=function(b){this.Nj!=b&&(this.Nj=b,this.nqa(32767,32767),this.nb(!0),this.Af(),this.ca(a.f.h))};q.eBc=function(){return this.uh};q.y7b=function(b){this.uh!=b&&(this.uh=b,this.nqa(32767,32767),this.nb(!0),this.Af(),this.ca(a.f.h))};q.fBc=function(){return this.Oj};q.D0c=function(b){this.Oj!=b&&(this.Oj=b,this.nqa(32767,32767),this.nb(!0),this.Af(),this.ca(a.f.h))};q.gBc=function(){return this.vh};q.F0c=function(b){this.vh!=b&&(this.vh=b,this.nqa(32767,32767),this.nb(!0),
this.Af(),this.ca(a.f.h))};q.kg=function(){var b=0,b=this.Nj;this.vla()&&this.lU()==a.RG.dib&&(b+=17);return b};q.cf=function(){var b=0,b=this.uh;this.vla()&&this.lU()==a.RG.eib&&(b+=17);return b};q.Sf=function(){var b=0,b=this.Oj;this.vla()&&this.lU()==a.RG.sPa&&(b+=17);return b};q.Xe=function(){var b=0,b=this.vh;this.vla()&&this.lU()==a.RG.fib&&(b+=17);return b};q.He=function(){return 0!=(this.gf&a.gi.O4a)?!0:!1};q.Sg=function(b){b=this.gf&~a.gi.O4a|(b?a.gi.O4a:0);this.gf!=b&&(this.gf=b,this.Dd(a.$.bya),
this.ca(a.f.h))};q.eCc=function(){return 0!=(this.gf&a.gi.N4a)?!0:!1};q.nLd=function(b){b=this.gf&~a.gi.N4a|(b?a.gi.N4a:0);this.gf!=b&&(this.gf=b)};q.bvd=function(){return 17};q.Qaa=function(){return this};q.fCc=function(){var f=null;if(this.vla()){var d=this.Qaa();null==d.YB()&&(null==this.oK&&(e.Gb("PRIM_PPNL"),this.oK=new c.Xw),d.ex(this.oK),d.YB().Aa(this,a.J.Zv,this.Wpc),this.t5b());f=this.LS}else d=this.Qaa(),null!=d.YB()&&(d.YB().Aa(this,a.J.Zv,null),d.ex(null)),b.la(this.LS),this.LS=null;
return f};q.hb=function(){if(null==this.gb){var b=this.Cra;this.JW||0!=(this.gf&a.gi.IHb)?(b.PAa(!1),this.gfa(b),b.jR(this.Mwa()),b.PAa(!this.Mwa())):b.PAa(!0);this.XE(this.gb,b);this.gb=b}return this.gb};q.Ju=function(){return null};q.FL=function(){var a=null;this.Pe()&&(a=this.Pe().ea);return a};q.H3=function(){var a=null;this.Ju()&&(a=this.Ju().rg());return a};q.tda=function(b){this.Ju()&&this.Ju().rg()!=b&&(this.Ju().tb(b),this.l(a.f.h))};q.P3=function(){var a=null;this.FL()&&(a=this.FL().rg());
return a};q.xda=function(b){this.FL()&&this.FL().rg()!=b&&(this.FL().tb(b),this.l(a.f.h))};q.fKa=function(){var a=null;this.Ju()&&(a=this.Ju().Vm());return a};q.gRa=function(b){this.Ju()&&this.Ju().Vm()!=b&&(this.Ju().nn(b),this.l(a.f.h))};q.dKa=function(){var a=null;this.Ju()&&(a=this.Ju().$x());return a};q.fRa=function(b){this.Ju()&&this.Ju().$x()!=b&&(this.Ju().KC(b),this.l(a.f.h))};q.qKa=function(){var a=null;this.FL()&&(a=this.FL().Vm());return a};q.uRa=function(b){this.FL()&&this.FL().Vm()!=
b&&(this.FL().nn(b),this.l(a.f.h))};q.Tja=function(){null==this.rub&&(this.rub=new c.Vt(this.Ju(),a.Wf.eV));return this.rub};q.gKa=function(){null==this.qub&&(this.qub=new c.Vt(this.Ju(),a.Wf.dV));return this.qub};q.eKa=function(){null==this.pub&&(this.pub=new c.Vt(this.Ju(),a.Wf.k5));return this.pub};q.sKa=function(){null==this.pvb&&(this.pvb=new c.Vt(this.FL(),a.Wf.eV));return this.pvb};q.rKa=function(){null==this.ovb&&(this.ovb=new c.Vt(this.FL(),a.Wf.dV));return this.ovb};q.Ryc=function(){return this.xra};
q.H_c=function(b){this.xra!=b&&(this.xra=b,this.NCa(),this.ca(a.f.h))};q.kAc=function(){return this.Nra};q.r0c=function(b){this.Nra!=b&&(this.Nra=b,this.NCa(),this.ca(a.f.h))};q.ls=function(){return this.He()};q.Qzd=function(){return this.Cd()};q.vla=function(){return this.i4()?this.tMa()?!0:this.eCc():!1};q.tMa=function(){return!1};q.Rzd=function(){var b=!1;this.Baa()==a.my.vNa&&this.lU()==a.RG.eib?b=!0:this.Baa()==a.my.neb&&this.lU()==a.RG.sPa&&(b=!0);return b};q.Szd=function(){var b=!1;this.Baa()==
a.my.seb&&this.lU()==a.RG.fib?b=!0:this.Baa()==a.my.$cb&&this.lU()==a.RG.dib&&(b=!0);return b};q.ST=function(){return 0!=(this.gf&a.gi.J4a)?!0:!1};q.P5=function(b){b=this.gf&~a.gi.J4a|(b?a.gi.J4a:0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.um=function(){return 0!=(this.gf&a.gi.ZIa)?!0:!1};q.Bm=function(b){b=this.gf&~a.gi.ZIa|(b?a.gi.ZIa:0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.gj=function(){return 0!=(this.gf&a.gi.R4a)?!0:!1};q.Pl=function(b){b=this.gf&~a.gi.R4a|(b?a.gi.R4a:
0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.Pw=function(){return 0!=(this.gf&a.gi.S4a)?!0:!1};q.gu=function(b){b=this.gf&~a.gi.S4a|(b?a.gi.S4a:0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.Od=function(){return 0!=(this.gf&a.gi.T4a)?!0:!1};q.Re=function(b){b=this.gf&~a.gi.T4a|(b?a.gi.T4a:0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.i4=function(){return 0!=(this.gf&a.gi.Q4a)?!0:!1};q.poa=function(b){b=this.gf&~a.gi.Q4a|(b?a.gi.Q4a:0);this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};
q.jAc=function(){return 0!=(this.gf&a.gi.M4a)?!0:!1};q.q0c=function(b){var c=this.gf&~a.gi.M4a|(b?a.gi.M4a:0);this.gf!=c&&(this.gf=c,this.Pe().c8b(b),this.ca(a.f.h))};q.jwa=function(){return 0!=(this.gf&a.gi.$Ia)?!0:!1};q.Plb=function(b){b=this.gf&~a.gi.$Ia|(b?a.gi.$Ia:0);this.gf!=b&&(this.gf=b,this.Tbd(),this.ca(a.f.h))};q.Mwa=function(){return 0!=(this.gf&a.gi.aJa)?!0:!1};q.W2c=function(b){if(this.Mwa()!=b){var c=null!=this.gb;this.jR(b);this.Xca();c&&this.hb();this.hh();this.ca(a.f.h)}};q.jR=function(b){b=
this.gf&~a.gi.aJa|(b?a.gi.aJa:0);this.gf!=b&&(this.gf=b,this.ca(a.f.h))};q.si=function(){return(this.jm&a.eG.AHb)>>24};q.Hj=function(b){b=this.jm&~a.eG.AHb|b<<24;this.jm!=b&&(this.jm=b,this.hh(),this.ca(a.f.h))};q.Gh=function(){return(this.jm&a.eG.xHb)>>20};q.Gj=function(b){b=this.jm&~a.eG.xHb|b<<20;this.jm!=b&&(this.jm=b,this.hh(),this.ca(a.f.h))};q.Ok=function(){return(this.gf&a.gi.FHb)>>12};q.Gm=function(b){b=this.gf&~a.gi.FHb|b<<12;this.gf!=b&&(this.gf=b,this.hh(),this.ca(a.f.h))};q.YJa=function(){return b.zQ()};
q.PKa=function(){return this.Wr};q.l6=function(b){this.Wr!=b&&(null!=this.Wr&&(this.Wr.xb(),this.Wr.Ca(this)),this.Wr=b,null!=this.Wr&&(this.Wr.Ba(),this.Wr.Ea(this,this.uIa)),this.t5b(),this.Af(),this.ca(a.f.h))};q.tBa=function(b){this.az!=b&&(null!=this.az&&this.az.Ca(this),this.az.Gn(b),null!=this.az&&this.az.Ea(this,this.nsc),this.$j(!0),this.ca(a.f.h))};q.W8a=function(){return this.az};q.Hf=function(b){this.Bs!=b&&(this.Bs=b,this.Pe()&&this.Pe().Hf(b),this.Af(),this.ca(a.f.h))};q.We=function(){return this.Bs};
q.Ja=function(){return this.hb().Ja()};q.Wa=function(a){this.hb().Wa(a)};q.kc=function(){this.Ha(a.J.ah)};q.tmd=function(){};q.t4=function(){this.Ws(this,a.$.Gcb)};q.Wzb=function(){this.Tja().Ys(g)};q.l7b=function(){null==g&&(g=new c.pb,g.Ro(a.m.CE),g.So(2),g.io(2),g.Cm(2),g.Dm(2));this.Tja().oh(g)};q.gT=function(){return this};q.Tbd=function(){this.LS&&this.LS.Ef(this.jwa())};q.t5b=function(){var a=this.Wr;null==a&&(a=b.W().tka());this.LS&&this.LS.$c(a);this.Qaa().ME(a)};q.Ze=function(){var a=this.fCc();
if(a){var b=this.rPc();a.kb(b)}this.Pe()&&(a=this.sVc(),this.PCa(),this.Pe().kb(a))};q.PCa=function(){var b=this.tKa(),c=this.Pe();if(c){c.Ab(b);c.Vf(this.ke());switch(this.DKb()){case a.QU.g9a:c.yb(a.Ng.A2);break;case a.QU.WMb:c.yb(a.Ng.bI);break;case a.QU.VMb:c.yb(a.Ng.qA)}switch(this.EKb()){case a.RU.Tcc:c.Kn(a.Vg.aW);break;case a.RU.Scc:c.Kn(a.Vg.iN);break;case a.RU.Arb:c.Kn(a.Vg.pq)}}};q.Pe=function(){null==this.te&&this.Cd()&&(e.Gb("PRIM_LABL"),this.te=new c.Vs,this.te.Na(this),this.te.Re(!1),
this.te.Ef(!1),this.te.et(!1),this.te.Hf(this.We()),this.te.Ud(5),this.Pb()&&this.te.gh());return this.te};q.Lja=function(){return b.zQ()};q.rPc=function(){var b=this.Lja(),d;switch(this.lU()){case a.RG.dRc:d=new c.ga(b.Q(),b.O(),0,0);break;case a.RG.eib:d=new c.ga(b.Q()-17,b.O(),17,b.ba());break;case a.RG.sPa:d=new c.ga(b.va,b.O(),17,b.ba());break;case a.RG.fib:d=new c.ga(b.Q(),b.O()-17,b.aa(),17);break;case a.RG.dib:d=new c.ga(b.Q(),b.ua,b.aa(),17)}return d};q.Xca=function(){var a=this.gb;this.gb=
null;this.XE(a,null)};q.gfa=function(a){this.Mwa()&&null==a.Wv()&&this.jR(!1)};q.XE=function(){};q.Xl=function(b,c,e,f,g){if(e==a.J.PL||e==a.J.eM||e==a.J.AM||e==a.J.BM||this.Cd()&&e==a.J.Yp)return g;b==this.LS&&e==a.J.Zb&&(this.Pd().VD()!=this.LS||this.jwa()||this.Pd().VA(this),this.k3c(),g=!0);return q.j.Xl.call(this,b,c,e,f,g)};q.Sx=function(){var a=null;this.yz()&&this.WL()&&(a=this);return a};q.nqa=function(a,c){this.uh=b.Pg(this.uh,-a,a);a=0<=this.uh?a-this.uh:a+this.uh;this.Oj=b.Pg(this.Oj,
-a,a);this.vh=b.Pg(this.vh,-c,c);c=0<=this.vh?c-this.vh:c+this.vh;this.Nj=b.Pg(this.Nj,-c,c)};q.Lca=function(){this.PCa();q.j.Lca.call(this)};q.Kca=function(){this.PCa();q.j.Kca.call(this)};q.Eia=function(){e.Gb("PRIM_FLD");var a=this.qz();return a&&(a=a.qt)?new c.Vla(a):null};q.Zc=function(){this.XH(a.$b.aM,this.XL());q.j.Zc.call(this)};q.NCa=function(){};q.Wpc=function(a,b){this.oJa();b.zk("CONTINUE",!1)};q.nsc=function(b,c){c.Ya==a.f.Ob?this.tBa(null):c.Ya==a.f.h&&this.$j(!0)};q.uIa=function(b,
c){switch(c.Ya){case a.f.sb:case a.f.Ob:c.Ii==this.Wr&&this.l6(null);break;case a.f.h:c.Ii==this.Wr&&this.Af()}};q.v3a=q[a.$.bya]=function(){this.hh()};q.zEb=q[a.$.Gcb]=function(){var a=null!=this.gb;this.Xca();a&&this.hb();this.hh()};q.jz=q[a.$.bM]=function(a){this.ym()||this.Wua();q.j.jz.call(this,a)};q.kz=q[a.$.cM]=function(a){var b=a.Oc;this.w$();b.zf()&&q.j.kz.call(this,a)};q.Wqc=q[a.$.BRb]=function(a){this.vla()&&(this.k3c(),a.Ue=!0)};q.cG=q[a.$.Cz]=function(){this.nb();this.Af()};q.oua=q[a.$.eya]=
function(b){var c=!1,e="";switch(this.$6a()){case a.Hk.OB:case a.Hk.MX:case a.Hk.Nta:this.hb().E5(this.$6a(),a.ZY.e$a,e);break;case a.Hk.lI:e=this.yI()}""!=e&&(b.dd.mb=e,c=!0);c||q.j.oua.call(this,b)};e.kd(c.N4,"PRIM_EVP",{vX:"PRIM_CTRL",Oa:{Placeholder:{a:q.KKa,g:function(a){this.d6(e.ma(a))}},UsePicklist:{a:q.Mwa,g:function(a){this.W2c(e.ya(a))}},LabelSelectable:{a:q.jAc,g:function(a){this.q0c(e.ya(a))}},MarginLeft:{a:q.eBc,g:function(a){this.y7b(e.K(a))}},MarginTop:{a:q.gBc,g:function(a){this.F0c(e.K(a))}},
MarginBottom:{a:q.dBc,g:function(a){this.A0c(e.K(a))}},MarginRight:{a:q.fBc,g:function(a){this.D0c(e.K(a))}},Caption:{a:q.ob,g:function(a){this.Ab(e.ma(a))}},HintType:{a:q.$6a,g:q.g7b},LabelType:{a:function(){return e.ta(this.n7a(),a.Hk.v)},g:function(b){this.s0c(e.ra(b,a.Hk.v))}},LabelText:{a:q.tKa},LabelPosition:{a:function(){return e.ta(this.Baa(),a.my.v)},g:function(b){this.p0c(e.ra(b,a.my.v))}},LabelHorAlignment:{a:function(){return e.ta(this.DKb(),a.QU.v)},g:function(b){this.o0c(e.ra(b,a.QU.v))}},
LabelVerAlignment:{a:function(){return e.ta(this.EKb(),a.RU.v)},g:function(b){this.t0c(e.ra(b,a.RU.v))}},ReadOnly:{a:q.He,g:function(a){this.Sg(e.ya(a))}},Ellipses:{a:q.We,g:q.Hf},EditThemeDrawStyle:{a:q.Ryc,g:function(a){this.H_c(e.ma(a))}},LabelThemeDrawStyle:{a:q.kAc,g:function(a){this.r0c(e.ma(a))}}}});var f=q;f.aD=f.applyDefault=function(){this.hb().B_a()}});