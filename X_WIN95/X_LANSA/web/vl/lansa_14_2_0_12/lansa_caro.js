window.LANSA.addSrc("caro",function(e,c,a,b,m){e.Gb("PRIM_UDC");e.Gb("PRIM_IMAG");a.S6={f2b:1,vPc:0,e2b:1};a.S6.v={DEFAULT:a.S6.f2b,NONE:a.S6.vPc,BUTTONS:a.S6.e2b};a.Mz={HD:0,Fnc:0,Nid:1,Mid:2,Lid:3,gL:4};a.Mz.v={PAGE:a.Mz.gL};a.FCa={B2b:0,gQc:0,hQc:1};a.FCa.v={DEFAULT:a.FCa.B2b,HORIZONTAL:a.FCa.gQc,VERTICAL:a.FCa.hQc};a.GCa={d$b:0,Cad:0,Dad:1};a.GCa.v={DEFAULT:a.GCa.d$b,ANTICLOCKWISE:a.GCa.Cad,CLOCKWISE:a.GCa.Dad};c.iTb=function(a){p.w.call(this);this.kF=a;this.R0=new c.ga;this.g1=1};var p=c.u(c.iTb,
c.Vv);p.U=function(){p.j.U.call(this)};p.Ze=function(b,c){p.j.Ze.call(this,b,c);this.kF.gy()==a.Vn.Fv&&this.kF.Pf().gh()};p.gqa=function(b,c){p.j.gqa.call(this,b,c);if(this.kF.gy()==a.Vn.Fv){var e=[];e[0]=this.g1;e[1]=this.R0;this.kF.rna(b,c,e);this.g1=e[0];this.R0=e[1]}};p.LB=function(b,c,e){c=[];this.kF.gy()==a.Vn.Fv&&this.kF.Pf().Ixa()?(this.R0=this.kF.zva(),this.g1=1,c=this.kF.LB(c)):c=p.j.LB.call(this,b,c,e);return c};c.HTb=function(a){l.w.call(this);this.kF=a;this.f_a=!1;this.Xsa=0};var l=c.u(c.HTb,
c.wdb);l.lAd=function(){return this.f_a};l.Yza=function(a,b,c){l.j.Yza.call(this,a,b,c);this.Xsa=this.Vd()};l.Xza=function(a){var b=this.kF.Xa()/this.kF.B8;a.il(this.Xsa!=this.Vd());l.j.Xza.call(this,a);0<b&&this.Xsa!=this.Vd()&&(this.Xsa>this.Vd()?(a=this.Xsa-b*this.kF.A8,a<this.Vd()||(a=this.Vd()-(b+this.Vd()%b))):(a=this.Xsa+b*this.kF.A8,a>this.Vd()||(a=this.Vd()-(b+this.Vd()%b),a+=b)),this.Cb(a,0,500));this.kF.nb()};l.TPa=function(a,c,e,f,g,m,s,q,p){if(0!=a){var P=b.Pg(this.Vd()+a,-(this.Xa()-
this.kF.Xa()),0);this.f_a=!0;this.Ta(P);this.f_a=!1;p[0]=!0}l.j.TPa.call(this,a,c,e,f,g,m,s,q,p)};c.hTb=function(){s.w.call(this);this.nd=b.zd(10,10,400,400);this.Ai=new c.kTb(this);this.jFa=a.S6.f2b;this.xDa=a.Mz.HD;this.MH=a.FCa.B2b;this.n8=this.svb=0;this.qvb=75;this.kub=50;this.jub=20;this.Ph=500;this.ayb=a.GCa.d$b;this.B8=3;this.A8=1;var e=this.FS=this.ES=this.bX=this.cX=this.yv=this.eha=this.fha=this.W1=this.Ul=null,e=e=null;this.Ul=new c.Vv;e=b.Ho(this.Ul);e.Sl(a.Qf.By);e.xc(1);e=b.eo(this.Ul);
e.Sl(a.Qf.By);e.Yb(1);this.W1=new c.iTb(this);this.fha=b.Ho(this.W1);this.fha.Sl(a.Qf.By);this.fha.xc(1);this.eha=b.eo(this.W1);this.eha.Sl(a.Qf.By);this.eha.Yb(1);this.fha.Ip(this.W1);this.eha.Ip(this.W1);this.yv=new c.HTb(this);this.yv.kb(new c.ga);this.yv.lc=this;this.yv.gm(this.W1);this.yv.nR(!1);this.yv.q_(!1);this.yv.Ef(!1);this.yv.et(!1);this.yv.wa(this,a.G.hda,this.n3a);this.yv.wa(this,a.G.E_a,this.Xpc);this.yv.I8b(a.qx.Mpb);this.cX=new c.Yt;this.cX.kb(new c.ga(0,0,20,90));this.cX.vj(a.Vb.Clc);
this.cX.wa(this,a.G.$b,this.$qc);this.bX=new c.Yt;this.bX.kb(new c.ga(0,0,20,90));this.bX.vj(a.Vb.Dlc);this.bX.wa(this,a.G.$b,this.Zqc);this.ES=new c.Yt;this.ES.kb(new c.ga(0,0,20,20));this.ES.vj(a.Vb.Alc);this.ES.tg(0);this.ES.wa(this,a.G.$b,this.Xqc);this.FS=new c.Yt;this.FS.kb(new c.ga(0,0,20,20));this.FS.vj(a.Vb.Blc);this.FS.tg(0);this.FS.wa(this,a.G.$b,this.Yqc);b.W().HGa(this.bX);b.W().IGa(this.bX);b.W().HGa(this.cX);b.W().IGa(this.cX);b.W().HGa(this.ES);b.W().IGa(this.ES);b.W().HGa(this.FS);
b.W().IGa(this.FS);e=b.Ic(this.Ul,this.cX,this.Ul.wc(0),this.Ul.zc(0),1,1);e.yb(a.qa.Ek);e.Qb(a.ja.Xd);e=b.Ic(this.Ul,this.bX,this.Ul.wc(0),this.Ul.zc(0),1,1);e.yb(a.qa.fz);e.Qb(a.ja.Xd);e=b.Ic(this.Ul,this.ES,this.Ul.wc(0),this.Ul.zc(0),1,1);e.yb(a.qa.WO);e.Qb(a.ja.Xd);e=b.Ic(this.Ul,this.FS,this.Ul.wc(0),this.Ul.zc(0),1,1);e.yb(a.qa.bI);e.Qb(a.ja.Xd);this.hoa(a.Vn.Wta);e=new c.pya;e=new c.lTb(this,e);this.gJa(e)};var s=c.u(c.hTb,c.Ula);s.U=function(){b.la(this.W1);this.W1=null;b.la(this.fha);this.fha=
null;b.la(this.eha);this.eha=null;s.j.U.call(this)};s.Bq=function(){return this.W1};s.gy=function(){var b=a.Vn.Wta;switch(this.bQ()){case a.Mz.gL:b=a.Vn.Fv;break;default:b=this.dKa()}return b};s.Pf=function(){var b=null;switch(this.bQ()){case a.Mz.gL:b=this.yv;break;default:b=s.j.Pf.call(this)}return b};s.eka=function(){var b=null;switch(this.bQ()){case a.Mz.gL:b=-this.yv.Vd();break;default:b=s.j.eka.call(this)}return b};s.yY=function(){var b=null;switch(this.bQ()){case a.Mz.gL:b=-this.yv.ve();break;
default:b=s.j.yY.call(this)}return b};s.dCc=function(){return this.B8};s.j1c=function(b){b=Math.max(b,1);this.B8!=b&&(this.B8=b,this.ZE(),this.ca(a.f.h))};s.cCc=function(){return this.A8};s.i1c=function(b){b=Math.max(b,1);this.A8!=b&&(this.A8=b,this.ZE(),this.ca(a.f.h))};s.oud=function(){return this.jFa};s.bQ=function(){var b=this.xDa;b==a.Mz.Fnc&&this.Pb()&&e.ra("LINEAR",a.Mz.v);return b};s.God=function(){return this.xDa};s.Nw=function(){return this.MH};s.dtd=function(){return this.svb};s.$sd=function(){return this.n8};
s.btd=function(){return this.qvb};s.Uqd=function(){return this.kub};s.Tqd=function(){return this.jub};s.G3=function(){return this.Ph};s.uxd=function(){return this.ayb};s.d1c=function(b){this.jFa!=b&&(this.jFa=b,this.ca(a.f.h))};s.CZc=function(b){this.xDa!=b&&(this.xDa=b,this.hh(),this.ca(a.f.h))};s.CV=function(b){this.MH!=b&&(this.MH=b,this.ca(a.f.h))};s.iLd=function(b){this.svb!=b&&(this.svb=b,this.ca(a.f.h))};s.gLd=function(b){this.n8!=b&&(this.n8=b,this.ca(a.f.h))};s.hLd=function(c){c=b.Pg(c,1,
89);this.qvb!=c&&(this.qvb=c,this.ca(a.f.h))};s.EKd=function(b){this.kub!=b&&(this.kub=b,this.ca(a.f.h))};s.DKd=function(b){this.jub!=b&&(this.jub=b,this.ca(a.f.h))};s.WA=function(b){this.Ph!=b&&(this.Ph=b,this.ca(a.f.h))};s.IMd=function(b){this.ayb!=b&&(this.ayb=b,this.ca(a.f.h))};s.BJb=function(){return this.Pt()};s.Uaa=function(){return b.cb()};s.YT=function(){return"PRIM_CARO<"+this.uL()+">"};s.dY=function(b){0==(this.Co()&a.mn.Zt)&&this.Wi(!0);if(this.Cz(a.G.ZI)&&(this.pd(b),!this.gd())){var c=
e.Tb();c.Zb("ITEM",b);this.Ga(a.G.ZI,c);c.sc()}};s.eY=function(b){0==(this.Co()&a.mn.Zt)&&this.Wi(!0);if(this.Cz(a.G.aJ)&&(this.pd(b),!this.gd())){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.aJ,c);c.sc()}};s.u3=function(b){0==(this.Co()&a.mn.Zt)&&this.Wi(!0);if(this.Cz(a.G.$I)&&(this.pd(b),!this.gd())){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.$I,c);c.sc()}};s.EA=function(b,c){this.pd(b);b.EA(c);if(!c&&!this.gd()){var f=e.Tb();f.Zb("ITEM",b);f.rf("CONTINUE",!0);this.Ga(a.G.YI,f);f.og("CONTINUE");f.sc()}};
s.A$=function(b,c){this.pd(b);if(!c&&!this.gd()){var f=e.Tb();f.Zb("ITEM",b);f.rf("CONTINUE",!0);this.Ga(a.G.A4,f);c=!f.og("CONTINUE");f.sc()}return c};s.RD=function(b){var c=this.Cz(a.G.xC);c&&this.pd(b);b.RD();c&&!this.gd()&&(c=e.Tb(),c.Zb("ITEM",b),this.Ga(a.G.xC,c),c.sc())};s.PD=function(b){0==(this.Co()&a.mn.Zt)&&this.Wi(!0);this.pd(b);b.PD();if(!this.gd()){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.DG,c);c.sc()}};s.QD=function(b){0==(this.Co()&a.mn.Zt)&&this.Wi(!0);this.pd(b);b.QD();if(!this.gd()){var c=
e.Tb();c.Zb("ITEM",b);this.Ga(a.G.$L,c);c.sc()}};s.GAa=function(b){null!=b&&null!=b.bc&&this.Pf().ixa(b.bc,a.MI.lla)};s.VZ=function(b){if(this.Bq())switch(this.bQ()){case a.Mz.gL:switch(this.jFa){case a.S6.e2b:this.cX.Na(this),this.cX.Fe(1),this.bX.Na(this),this.bX.Fe(2),this.ES.Na(this),this.ES.Fe(3),this.FS.Na(this),this.FS.Fe(4)}this.yv.Na(this);this.yv.Fe(99);this.yv.k0c(this.Oe().aa()/this.A8);this.Pb()&&this.gh();this.gm(this.Ul);b.Ov().Vi(b.bc);b.Ov().Na(this.Bq());b.Ov().Ge(b.E5());b.Ov().re(b.CQa());
b.Ov().Ud(b.Pjb());b.Ov().Se(0);b.Ov().Qb(a.ja.Xi);b.Ov().Lf(a.xa.Ui);b.Ov().yb(a.qa.YF);b.Ov().Rl(this.fha);b.Ov().ml(this.eha);break;default:this.yv.Na(null),this.cX.Na(null),this.bX.Na(null),this.ES.Na(null),this.FS.Na(null),this.gm(null)}s.j.VZ.call(this,b)};s.fPc=function(a){this.N1b(a)};s.gPc=function(a){this.O1b(a)};s.bPc=function(a){this.hhb(a)};s.ePc=function(a){this.ihb(a)};s.dPc=function(a,b){this.cPc(a-1,b)};s.N1b=function(c){switch(this.bQ()){case a.Mz.gL:if(this.Pf().Vd()==-(this.Pf().Xa()-
this.Xa()))this.hhb(c);else{var d=this.Xa()/this.B8,d=this.Pf().Vd()-d*this.A8,d=b.Pg(d,-(this.Pf().Xa()-this.Xa()),0);c?this.Pf().Cb(d,0,1E3):this.Pf().Ta(d)}}};s.O1b=function(c){switch(this.bQ()){case a.Mz.gL:if(0==this.Pf().Vd())this.ihb(c);else{var d=this.Xa()/this.B8,d=this.Pf().Vd()+d*this.A8,d=b.Pg(d,-(this.Pf().Xa()-this.Xa()),0);c?this.Pf().Cb(d,0,1E3):this.Pf().Ta(d)}}};s.hhb=function(b){switch(this.bQ()){case a.Mz.gL:b?this.Pf().Cb(0,0,1E3):this.Pf().Ta(0)}};s.ihb=function(b){switch(this.bQ()){case a.Mz.gL:var c=
-(this.Pf().Xa()-this.Xa());b?this.Pf().Cb(c,0,1E3):this.Pf().Ta(c)}};s.cPc=function(c,d){switch(this.bQ()){case a.Mz.gL:c-=c%this.B8;var e=this.D4(c);e&&e.bc&&(e=-e.bc.Vd(),e=b.Pg(e,-(this.Pf().Xa()-this.Xa()),0),d?this.Pf().Cb(e,0,1E3):this.Pf().Ta(e))}};s.tna=function(a){this.dY(a)};s.vna=function(a){this.eY(a)};s.una=function(a){this.u3(a)};s.ona=function(a,b){this.EA(a,b)};s.pna=function(a,b){return this.A$(a,b)};s.Qca=function(a){this.RD(a)};s.Pca=function(b){this.PD(b);this.ca(a.f.h)};s.sna=
function(a){this.QD(a)};s.wC=function(b){var c=null;switch(this.bQ()){case a.Mz.gL:c=s.j.wC.call(this,b)}return c};s.Ze=function(a){s.j.Ze.call(this,a);if(!this.yv.f_a&&!this.yv.Uw()){var d=b.HG(this,null),e=d.Lb,f=null,g=a.aa()/this.B8,l=this.yv.Vd(),m=this.wC(new c.ld(Math.abs(l)+10,10));if(0<e.length){for(var q=0;q<e.length&&null!=(f=e[q]);q++)f.bc&&f.bc.Yb(g);f=-(g*e.length-a.Xa());0>l&&m&&(l=-(g*m.fj()));this.yv.kb(new c.ga(b.Pg(l,f,0),0,g*e.length,a.ba()))}b.la(d)}};s.Dj=function(){s.j.Dj.call(this);
this.Hd(a.Bb.rUa)};s.oh=function(a){var b=null;return b=this.Ai.Fg(a,!0,-1,!1)};s.Fg=function(){this.Ai.Fg(this.uL(),!0,-1,!0)};s.Th=function(a){return this.Ai.Th(!1,a)?"OK":"NR"};s.yo=function(){return this.Ai.ZJa()};s.Sj=function(){this.Ai.Sj()};s.Rm=function(a){this.Ai.Rm(a==m?!0:!1,a)};s.ol=function(){this.Ai.ol()};s.Gn=function(a,b,c){return this.Ai.Gn(a,b,c)};s.Dq=function(a){this.Sj();for(var b=0;b<a;b++)this.Fg()};s.$qc=function(){this.O1b(!0)};s.Zqc=function(){this.N1b(!0)};s.Xqc=function(){this.hhb(!0)};
s.Yqc=function(){this.ihb(!0)};s.Xpc=function(){};s.n3a=function(a,b){this.B5a(b.EI("ORIENTATION"))};s.mz=s[a.$.cM]=function(a){var b=this.qk(a.Oc);b&&!b.zf()&&b.ND(!0,!1,!0);s.j.mz.call(this,a)};e.kd(c.hTb,"PRIM_CARO",{tJ:a.Ev.RUa,Oa:{CurrentItem:{a:s.Ld},FocusItem:{a:s.ed},PageSize:{a:s.dCc,g:function(a){this.j1c(e.K(a))}},PageScroll:{a:s.cCc,g:function(a){this.i1c(e.K(a))}},CarouselStyle:{a:function(){return e.ta(this.xDa,a.Mz.v)},g:function(b){this.CZc(e.ra(b,a.Mz.v))}},NavigationStyle:{a:function(){return e.ta(this.jFa,
a.S6.v)},g:function(b){this.d1c(e.ra(b,a.S6.v))}}},jc:{Add:s.oh,Sort:s.t6,FindItem:s.Be,DeleteAll:s.JD,FindReference:s.EP,NextItem:s.fPc,PrevItem:s.gPc,FirstItem:s.bPc,LastItem:s.ePc,MoveToItem:s.dPc},py:{Fg:s.Fg,Th:function(a){return this.Th(e.K(a)-1)},Dq:s.Dq,Sj:s.Sj,yo:s.yo,Rm:function(a){return this.Rm(a?e.K(a)-1:m)},ol:s.ol,Gn:s.Gn,qs:s.qs}});c.lTb=function(a,b){g.w.call(this,a,b)};var g=c.u(c.lTb,c.sya);g.U=function(){g.j.U.call(this)};g.Fod=function(){return this.xq.ya()};g.O9=function(a,b){var c=
null,f=null,g=null,l=null;null!=a&&(f=l=e.Xc(a),null!=f&&(f.Ib(!1),g=f,null!=g&&(c=e.Xc("PRIM_CARO","CarouselItem"),c.Ba())));b[0]=l;b[1]=c;b[2]=f;b[3]=g};g.hP=function(a,b,c,e){this.O9(a,b);null!=b[1]&&this.Tw(b[1],b[2],e)};g.zna=function(a){return a};c.kTb=function(a){q.w.call(this,a)};var q=c.u(c.kTb,c.rya);q.Fg=function(a,b,c,e){var f=this.ya(),g=null,g=[];b?f.BJb().hP(a,g,-1,e):f.BJb().hP(a,g,c,e);return g=g[1]};c.jTb=function(){f.w.call(this)};var f=c.u(c.jTb,c.Vla);f.U=function(){f.j.U.call(this)};
f.oh=function(a){var b=null,c=this.ya();c&&(b=c.oh(a),b.Na(this));return b};f.EA=function(c){if(!this.gd()){var d=e.Tb();d.Zb("ITEM",this);d.rf("CONTINUE",!0);this.Ga(a.G.YI,d);c=!d.og("CONTINUE");d.sc()}d=this.kr();null!=d&&b.hl(d,this,"ONITEMCLICK");return c};f.RD=function(){if(!this.gd()){var c=e.Tb();c.Zb("ITEM",this);this.Ga(a.G.xC,c);c.sc()}c=this.kr();null!=c&&b.hl(c,this,"ONITEMREALIZING")};f.PD=function(){if(!this.gd()){var c=e.Tb();c.Zb("ITEM",this);this.Ga(a.G.DG,c);c.sc()}c=this.kr();
null!=c&&b.hl(c,this,"ONITEMGOTFOCUS")};f.QD=function(){if(!this.gd()){var c=e.Tb();c.Zb("ITEM",this);this.Ga(a.G.$L,c);c.sc()}c=this.kr();null!=c&&b.hl(c,this,"ONITEMLOSTFOCUS")};e.jb(c.jTb,"PRIM_CARO","CarouselItem",{Oa:{Design:{a:f.eKa},Carousel:{a:f.ya},Focus:{a:f.zf,g:f.$e},Position:{a:f.Oaa},Entry:{a:f.Th},Selected:{a:f.qj,g:function(a){this.Oq(e.za(a))}},RelatedReference:{a:f.GY,g:f.bR},Visible:{a:f.qb,g:function(a){this.Ib(e.za(a))}}},jc:{Delete:f.fr}})},{rp:["PRIM_UDC","PRIM_IMAG"]});
