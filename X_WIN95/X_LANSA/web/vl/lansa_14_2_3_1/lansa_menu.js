window.LANSA.addSrc("menu",function(d,c,a,b,r){d.Db("PRIM_TBLO");d.Db("PRIM_PPNL");d.Db("PRIM_IMAG");d.Db("PRIM_SPBN");a.mRa={g0:16,Lkb:16};a.IW={ABa:0,Rkb:1,Skb:2,Mkb:4};a.BK={I5b:0,kkb:1,jkb:2};a.BK.u={NONE:a.BK.I5b,BREAK:a.BK.kkb,BARBREAK:a.BK.jkb};a.CK={f0:25,Bkb:1,zkb:2,zId:4,Ckb:8,Akb:16};a.BK={ITc:0};a.dId=3;a.cId=2;a.eId=255;a.tTc=768;a.u5b=256;a.t5b=512;a.gRa=65536;a.hRa=131072;a.Zjb=262144;a.akb=524288;a.$jb=1048576;a.lSd=2;a.kSd=2;c.fBa=function(){u.H.call(this);this.FG=null;this.ZL=a.mRa.g0;
this.AP=a.IW.ABa;this.Vn=null;this.Pb=[];this.bJ=new c.Px;this.Mia=new c.ob;this.Uh=new c.Qx;this.bkd=new c.Bda;this.akd=new c.o6;this.bkd.rr(this.Uh);this.akd.rr(this.Uh);this.bJ.wo(this.Uh);this.Mia.Si(b.J(255,255,255));this.Mia.ui(b.bb().Jo(a.l.zj));this.Mia.Vo(1);this.Mia.Bp(1);this.Mia.pn(1);this.Mia.qn(1);this.bJ.ta(this,a.w.Qw,this.Nvc);this.bJ.ub(this.Mia)};var u=c.q(c.fBa,c.Ox);u.zb=function(){this.Pb=null;u.j.zb.call(this)};u.R=function(){null!=this.FG&&this.yX();for(var a=null;null!=(a=
this.Pb[0]);)a.Oa(null);b.$Sc(this);u.j.R.call(this)};u.Iyd=function(){return this.FG};u.Lyd=function(){return this.Pb};u.bGc=function(){return this.Pb.length};u.fca=function(){return this};u.lOc=function(){return 0!=(this.AP&a.IW.Skb)};u.cNc=function(){return 0!=(this.AP&a.IW.Mkb)};u.Nyd=function(){return 0!=(this.AP&a.IW.Rkb)};u.S5c=function(){var b=this.AP&~a.IW.Rkb|a.IW.Rkb;this.AP!=b&&(this.AP=b,this.ca(a.g.h))};u.iab=function(){return 0!=(this.ZL&a.mRa.Lkb)};u.pQd=function(b){b=this.ZL&~a.mRa.Lkb|
(b?a.mRa.Lkb:0);this.ZL!=b&&(this.ZL=b,this.ca(a.g.h))};u.Oea=function(a){this.Vn!=a&&(this.Vn=a,this.XSa())};u.uCc=function(){return this.Vn};u.mA=function(){return this.Pb};u.Wca=function(){return null!=this.FG||null!=this.vg};u.IDd=function(){for(var a,b=this.Pb,c=0;c<b.length&&null!=(a=b[c]);c++)if(!0==a.rb())return!0;return!1};u.lo=function(){null==this.vg&&this.Ru(b.gb().mB(this));return this.vg};u.aba=function(b){var c=d.Yb();c.bc("CONTEXT",b);this.Da(a.w.Qw,c);c.zc()};u.Jx=function(b){this.Wca()&&
this.yX();b.Xb=this;this.sXa(b);b.Ga(this,this.ywa);this.ca(a.g.h)};u.vMc=function(b){this.Wca()&&this.yX();b.Xb=this;this.sXa(b);b.Ga(this,this.ywa);this.ca(a.g.h)};u.t0=function(b){this.Wca()&&this.yX();b.Xb=null;b.Ca(this,this.ywa);this.sXa(b);this.ca(a.g.h)};u.pza=function(){b.U();this.yX()};u.U8b=function(a){if(null==this.FG){if(null!=this.vg)this.FG=this.vg;else{var c=b.U().pua;this.FG=this.P4a();null!=this.FG&&(c[this.FG]=this)}this.ZRa(null,a)}};u.yX=function(){if(null!=this.FG){for(var a,
c=this.Pb,d=0;d<c.length&&null!=(a=c[d]);d++){var m=a.mu;a.Ru(null);a.yYc();m&&m.yX()}null!=this.FG&&(null!=this.vg?(this.Ru(null),this.FG=null):(a=b.U().pua,null!=this.FG&&delete a[this.FG]));this.FG=null;this.Ru(null);b.U().qu(this.bJ,!1)}};u.mWc=function(){};u.Llb=function(){};u.ZRa=function(a,b){this.bJ.kb(new c.ea(0,0,0,5));for(var d,m=0,g=this.Pb,k=0;k<g.length&&null!=(d=g[k]);k++)m=this.Tja(a,b,d,m)};u.Tja=function(a,b,c,d,g){return c.Tja(a,b,this,d,g)};u.oEb=function(a){for(var b=!1,c,d=this.Pb,
g=0;g<d.length&&null!=(c=d[g]);g++)if(c==a||null!=c.mu&&c.mu.oEb(a)){b=!0;break}return b};u.WJc=function(b){for(var c=!1,d=null,m=this.Pb,g=0;g<m.length&&null!=(d=m[g]);g++)if(d.Vb()&&d.ue()){var k=d.mu;if(null!=k&&k.WJc(b)){c=!0;break}if(d.Mua!=a.W.SCa&&d.Mua==b){d.Mf();c=!0;break}}return c};u.nrd=function(){for(var a=this.Pb,b=null,c=null,d=0;d<a.length&&null!=(c=a[d]);d++)if(c.S4()){b=c;break}return b};u.sXa=function(a){var c=this.Pb.indexOf(a);-1!=c&&this.Pb.splice(c,1);c+=1;if(a.Xb==this){0==
a.og()&&(a.bh=this.Pb.length+1);var d=a.og(),m=0;0<c&&d>c&&d++;for(var g,c=this.Pb,k=0;k<c.length&&null!=(g=c[k])&&!(g.og()>=d);k++)m++;this.Pb.splice(m,0,a)}b.YSc(this)};u.cCa=function(b){b==a.vV&&(this.Wca()&&this.yX(),this.v6(),this.ca(a.g.h))};u.v6=function(){for(var b,c=this.Pb,d=0;d<c.length&&null!=(b=c[d]);d++)b.bh=1,b.ca(a.g.h)};u.uId=function(a){var c=b.U();return null!=c.pua?c.pua[a]:null};u.XSa=function(){};u.rSa=function(){b.U().qu(this.bJ,!1)};u.Llb=function(){};u.Rw=function(a){this.AP|=
a};u.fz=function(a){this.AP&=~a};u.Vx=function(a,b){this.AP=this.AP&~a|(b?a:0)};u.VGb=function(b,c){switch(c.$a){case a.g.vb:this.Oea(null)}};u.ywa=function(){this.lOc()?this.Rw(a.IW.Mkb):this.Wca()&&(this.yX(),this.ca(a.g.h))};u.Nvc=function(){this.Llb(null,this.bJ)};d.wd(c.fBa,"PRIM_MENU",{Pa:{}});c.Rib=function(){k.H.call(this);this.Mz=null};var k=c.q(c.Rib,c.fBa);k.zb=function(){k.j.zb.call(this)};k.R=function(){this.$ea(null);k.j.R.call(this)};k.UOb=function(){return this.Mz};k.$ea=function(b){this.Mz!=
b&&(this.Mz&&this.Mz.FLd(this),b&&b.qEd(this),this.ca(a.g.h))};k.mWc=function(){this.aba(null)};k.ZRa=function(a,b){this.bJ.kb(new c.ea(0,0,0,5));for(var d,m=0,g=this.Pb,k=0;k<g.length&&null!=(d=g[k]);k++)m=this.Tja(a,b,d,m,!0)};k.P4a=function(){throw 0;};d.wd(c.Rib,"PRIM_MBAR",{Pa:{}});c.Tib=function(){t.H.call(this);this.Osa=null;this.ewb=0};var t=c.q(c.Tib,c.fBa);t.zb=function(){t.j.zb.call(this)};t.R=function(){this.XSa();t.j.R.call(this)};t.qPd=function(b){b!=this.ewb&&(this.ewb=b,this.XSa(),
this.ca(a.g.h))};t.Bsd=function(){return this.ewb};t.JAc=function(){null==this.Osa&&(this.Osa=[]);return this.Osa};t.ZRa=function(a,b){this.bJ.kb(new c.ea(0,0,0,5));for(var d,m=0,g=this.JAc(),k=0;k<g.length&&null!=(d=g[k]);k++)m=this.Tja(a,b,d,m);g=this.Pb;for(k=0;k<g.length&&null!=(d=g[k]);k++)m=this.Tja(a,b,d,m)};t.P4a=function(){return b.lya()};t.Hqa=function(a,b){a===r&&(a=0);b===r&&(b=0);this.z7b(new c.qd(a,b),null,!0,null)};t.z7b=function(c,d){var e=b.U(),m=!1,m=e.vk,g=b.U().jw;this.aba(d,c);
b.NQa(a.vV);this.Oea(d);m&&this.Qt(m,a.Ma.cic);null!=g&&g.C_()&&g.IQ();this.U8b(this.bJ);0<this.bJ.Ia()&&(m=e.FCb(!0),this.bJ.M7(c.Hb(),c.Lb(),a.Xh.Tx,r,null),e.FCb(m))};t.XSa=function(){this.yX();if(this.Osa){for(var a;null!=(a=this.Osa[0]);)b.ka(a);this.Osa=null}};t.ood=function(a,b){var c=b.Wla();c&&c.RJd(b.Yi.oM)};d.wd(c.Tib,"PRIM_PMNU",{Pa:{},pc:{Show:t.Hqa}});c.O2b=function(){p.H.call(this);this.Mz=null};var p=c.q(c.O2b,c.fBa);p.zb=function(){p.j.zb.call(this)};p.R=function(){this.Mz&&this.Mz.Ppb(null);
p.j.R.call(this)};p.UOb=function(){return this.Mz};p.$ea=function(b){if(this.Mz!=b&&!this.oEb(b)){var c=this.Mz;this.Mz=b;c&&c.dDb(null);this.Mz&&this.Mz.dDb(this);this.ca(a.g.h,a.Ie.wPa)}};p.iab=function(){var a=p.j.iab.call(this);a&&(a=this.Mz.yOc());return a};p.fca=function(){var a=null;this.Mz&&(a=this.Mz.fca());return a};p.rSa=function(){p.j.rSa.call(this);this.Mz.L().rSa()};p.P4a=function(){return b.lya()};p.wgd=function(){if(null!=this.FG)for(var a,b=this.Pb,c=0;c<b.length&&null!=(a=b[c]);c++){var d=
a.mu;d&&d.yX()}};p.Llb=function(b,c){this.Rw(a.IW.Skb);this.aba(null);this.Rw(a.IW.Skb);this.Wca()&&this.cNc()&&(this.wgd(),this.ZRa(b,c));this.Rw(a.IW.Mkb)};d.wd(c.O2b,"PRIM_SMNU",{Pa:{Parent:{a:p.UOb,f:p.$ea}}});c.i2b=function(){q.H.call(this);this.Xb=null;this.mf=a.CK.f0;this.jb=a.BK.ITc;this.vf=a.gRa|a.hRa;this.Mua=a.W.SCa;this.Jjc=this.bh=this.rt=this.vlc=this.oM=0;this.Y2=this.Ka=this.mu=this.Xb=null;this.pb=this.l2a="";this.GT=new c.ro;this.wGa=new c.Ot;this.z2=new c.ob;this.ML=new c.yK;this.q9=
b.oc(null,this.GT,null,null,1,1);this.xGa=b.oc(null,this.ML,null,null,1,1);this.Gta=b.oc(null,this.wGa,null,null,1,1);this.wGa.ub(this.z2);this.wGa.Oa(this.GT);this.ML.Oa(this.GT);this.GT.ta(this,a.w.Ub,this.wuc);this.Amc()};var q=c.q(c.i2b,c.Ox);q.zb=function(){this.Gsc();q.j.zb.call(this)};q.R=function(){this.Ppb(null);this.Oa(null);q.j.R.call(this);this.pd(null);this.l5c()};q.Kvd=function(){var a="";this.ZNc()||null!=this.fca()&&this.fca()instanceof c.Tib?a=this.eb():this.DBc();return a};q.eb=
function(){return this.pb};q.jo=function(){return this.eb().er()};q.DBc=function(){this.eb()};q.gud=function(){return this.nxb};q.ZBd=function(){return!0};q.uAd=function(){return!0};q.yzd=function(){return!0};q.upb=function(){var a=this.fca();a&&a.S5c()};q.Gg=function(){return 0!=(this.vf&a.Zjb)?!0:!1};q.S4=function(){return 0!=(this.vf&a.$jb)?!0:!1};q.pPd=function(b){b!=this.Pdb()&&(this.mf=this.mf&~a.CK.zkb|(b?a.CK.zkb:0),this.ca(a.g.h))};q.VE=function(){return this.rt};q.vEc=function(){return this.Jjc};
q.aGc=function(){var b=a.BK.I5b;0!=(this.vf&a.u5b)?b=a.BK.kkb:0!=(this.vf&a.t5b)&&(b=a.BK.jkb);return b};q.L=function(){return this.Xb};q.fca=function(){var a=null;this.Xb&&(a=this.Xb.fca());return a};q.sca=function(){return 0!=(this.vf&a.akb)?!0:!1};q.hBd=function(){return this.Mua};q.iBd=function(){return""};q.oIc=function(){return this.mu};q.abb=function(){return this.oM};q.ECd=function(){return this.vlc};q.rb=function(){return 0!=(this.vf&a.hRa)?!0:!1};q.sb=function(a){this.pb!=a&&(this.pb=a,
this.n0())};q.mk=function(a){this.eb().CO(a)};q.$h=function(b){var c=this.VE();if(b&&0!=c&&null!=this.L())for(var d,m=this.L().Pb,g=0;g<m.length&&null!=(d=m[g]);g++)d!=this&&d.VE()==c&&d.$h(!1);b=b?this.vf|a.Zjb:this.vf&~a.Zjb;b!=this.vf&&(this.vf=b,this.ca(a.g.h))};q.KTa=function(b){b=b?this.vf|a.$jb:this.vf&~a.$jb;b!=this.vf&&(this.vf=b,this.ca(a.g.h))};q.og=function(){return this.bh};q.Vd=function(b){this.Pdb()||(null!=this.Xb?(this.bh=b,this.Xb.sXa(this)):this.bh!=b&&(this.bh=b,this.ca(a.g.h)))};
q.ue=function(){return 0!=(this.vf&a.gRa)?!0:!1};q.jg=function(b){b=b?this.vf|a.gRa:this.vf&~a.gRa;b!=this.vf&&(this.vf=b,this.ca(a.g.h))};q.L0=function(b){this.rt!=b&&(this.rt=b,this.ca(a.g.h))};q.b5c=function(b){this.Jjc=b;this.ca(a.g.h)};q.R5c=function(b){var c=this.vf&~a.tTc;switch(b){case a.BK.kkb:c|=a.u5b;break;case a.BK.jkb:c|=a.t5b}c!=this.vf&&(this.vf=c,this.ca(a.g.h))};q.Oa=function(b){this.Xb!=b&&(this.Xb&&this.Xb.t0(this),b&&(this.Pdb()?b.vMc(this):b.Jx(this)),null!=this.Ka&&this.upb(),
this.ca(a.g.h,a.Ie.wPa))};q.uDa=function(b){b=b?this.vf|a.akb:this.vf&~a.akb;b!=this.vf&&(this.vf=b,this.ca(a.g.h))};q.Q6c=function(b){this.Mua!=b&&(this.Mua=b,this.ca(a.g.h))};q.Ppb=function(a){this.mu!=a&&(this.mu&&this.mu.$ea(null),a&&a.$ea(this))};q.QUa=function(b){this.oM!=b&&(this.oM=b,this.ca(a.g.h))};q.HRd=function(a){this.vlc=a};q.Oc=function(){return this.Ka};q.pd=function(b){this.Ka!=b&&(null!=this.Ka&&(this.Ka.Ca(this,this.Fn),this.Ka.Cb()),this.Ka=b,null!=this.Ka&&(this.Ka.Ba(),this.Ka.Ga(this,
this.Fn)),this.upb(),this.ca(a.g.h))};q.l5c=function(){null!=this.Y2&&(null!=this.Y2&&(this.Y2.Ca(this,this.JHb),this.Y2.Cb()),this.Y2=null,null!=this.Y2&&(this.Y2.Ba(),this.Y2.Ga(this,this.JHb)),this.upb(),this.ca(a.g.h))};q.Nxd=function(){return this.Y2};q.QIc=function(){return this.l2a};q.T7c=function(b){this.l2a!=b&&(this.l2a=b,this.ca(a.g.h,a.Ie.oPc))};q.aOa=function(){return 0!=(this.mf&a.CK.Bkb)?!0:!1};q.U7c=function(b){b!=this.aOa()&&(this.mf=this.mf&~a.CK.Bkb|(b?a.CK.Bkb:0),this.ca(a.g.h))};
q.jbb=function(){return 0!=(this.mf&a.CK.Ckb)?!0:!1};q.V7c=function(b){b!=this.jbb()&&(this.mf=this.mf&~a.CK.Ckb|(b?a.CK.Ckb:0),this.ca(a.g.h))};q.bBd=function(){return!0};q.qla=function(){return 0!=(this.mf&a.CK.Akb)?!0:!1};q.kac=function(b){b!=this.qla()&&(this.mf=this.mf&~a.CK.Akb|(b?a.CK.Akb:0),this.ca(a.g.h))};q.Gb=function(b){b=b?this.vf|a.hRa:this.vf&~a.hRa;b!=this.vf&&(this.vf=b,this.ca(a.g.h))};q.rPb=function(){return this.Mb};q.lo=function(){null==this.vg&&this.Ru(b.gb().mB(this));return this.vg};
q.Vb=function(){return null!=this.Xb&&this.Xb.Wca()?!0:!1};q.jFd=function(){return"-"==this.eb()?!0:!1};q.Pdb=function(){return 0!=(this.mf&a.CK.zkb)?!0:!1};q.yOc=function(){var a=this.aOa();if(a&&this.jbb()){var b=this.L();b&&(a=b.iab())}return a};q.ZNc=function(){return null!=this.L()&&this.L()instanceof c.Rib};q.Mf=function(b){b===r&&(b=null);var c=d.Yb();c.bc("CONTEXT",b);this.Da(a.w.Ub,c);c.zc()};q.PTd=function(){if(this.mu)for(var a,b=this.mu.Pb,c=0;c<b.length&&null!=(a=b[c]);c++)a.$h(!1)};
q.dDb=function(b){this.mu!=b&&(this.mu&&(this.mu.Mz==this?this.mu.$ea(null):(this.ca(a.g.gUc),this.mu.Ca(this,this.JIb),this.mu=null)),b&&(b.Mz!=this?b.$ea(this):(this.mu=b,this.mu.Ga(this,this.JIb))),this.ca(a.g.h))};q.wId=function(a){return b.U().yHa[a]};q.Amc=function(){this.nxb=b.U().BCb();b.U().yHa[this.nxb]=this};q.Tja=function(a,b,c,d){return this.Tmc(b,d)};q.yYc=function(){this.GT.Oa(null)};q.Tmc=function(b,d){if(this.rb()){var e=b.cj(),m=null;this.z2.Ap(a.l.ae);this.z2.Si(a.l.ae);this.z2.Vo(1);
this.z2.Bp(1);this.z2.pn(1);this.z2.qn(1);this.Gg()&&(m=this.sca()?a.$b.U5b:a.$b.T5b,this.z2.Ap(a.l.IO),this.z2.Si(a.l.U7));this.Oc()&&(m=this.Oc());this.q9.Oa(e);this.q9.wm(e.hc(0));this.q9.Rl(e.nc(0));this.q9.Df(a.ya.bj);this.q9.qb(a.ma.Fs);this.q9.Bb(a.ha.ug);this.q9.$d(4);this.q9.Ed(2);this.Gta.Oa(e);this.Gta.wm(e.hc(0));this.Gta.Rl(e.nc(0));this.Gta.Bb(a.ha.Xd);this.Gta.qb(a.ma.cl);this.Gta.$d(2);this.xGa.Oa(e);this.xGa.wm(e.hc(0));this.xGa.Rl(e.nc(0));this.xGa.Bb(a.ha.fg);this.xGa.$d(22);this.GT.Oa(b);
this.GT.wo(e);this.GT.Vd(d+1);this.GT.bL(this.aOa()?this.l2a:"");this.ML.mO(!1);this.ML.hs(a.ce.l0);this.ML.kUa(a.CF.vBa);this.ML.lI(a.Vu.BM);this.ML.sb(this.eb());this.ML.rn(a.ah.Uq);this.ML.P0(this.mu?this.mu.bJ:null);this.wGa.Ri(m);this.ML.Zj(!1,!0);e=60+this.ML.zR();m=10+this.ML.nla();this.GT.lc(m);this.wGa.kb(new c.ea(2,2,18,18));this.ML.kb(new c.ea(22,2,e,18));b.Wb(Math.max(b.Qa(),e));b.lc(b.Ia()+this.GT.Ia());null!=this.mu&&this.mu.U8b(this.mu.bJ);d++}return d};q.Gsc=function(){delete b.U().yHa[this.nxb];
b.U()};q.WTd=function(a){this.Vd(a);null!=this.Xb&&this.Xb.v6()};q.n0=function(){this.ca(a.g.h,a.Ie.VVb)};q.wuc=function(a,b){this.VE()&&this.$h(!0);this.Mf();this.L()&&this.L().rSa();b.HANDLED.set(!0)};q.JIb=function(){this.Vb()&&this.ca(a.g.h)};q.Fn=function(b,c){switch(c.$a){case a.g.vb:case a.g.Tb:this.pd(null)}};q.JHb=function(b,c){switch(c.$a){case a.g.vb:case a.g.Tb:this.pd(null)}};d.wd(c.i2b,"PRIM_MITM",{Pa:{Parent:{a:q.L,f:q.Oa},Caption:{a:q.eb,f:function(a){this.sb(d.ja(a))}},Checked:{a:q.Gg,
f:function(a){this.$h(d.wa(a))}},Default:{a:q.S4,f:function(a){this.KTa(d.wa(a))}},GroupIndex:{a:q.VE,f:function(a){this.L0(d.v(a))}},HelpContext:{a:q.vEc,f:function(a){this.b5c(d.v(a))}},MenuBreak:{a:function(){return d.sa(this.aGc(),a.BK.u)},f:function(b){this.R5c(d.qa(b,a.BK.u))}},RadioItem:{a:q.sca,f:function(a){this.uDa(d.wa(a))}},SubMenu:{a:q.oIc,f:q.Ppb},ShortCut:{a:function(){return d.sa(this.Mua,a.W.u)},f:function(b){this.Q6c(d.qa(b,a.W.u))}},Tag:{a:q.abb,f:function(a){this.QUa(d.v(a))}},
Tip:{a:q.QIc,f:function(a){this.T7c(d.ja(a))}},TipShow:{a:q.aOa,f:function(a){this.U7c(d.wa(a))}},TipShowOfParent:{a:q.jbb,f:function(a){this.V7c(d.wa(a))}},Enabled:{a:q.ue,f:function(a){this.jg(d.wa(a))}},Visible:{a:q.rb,f:function(a){this.Gb(d.wa(a))}},DisplayPosition:{a:q.og,f:function(a){this.Vd(d.v(a))}},Image:{a:q.Oc,f:q.pd}}})},{rp:["PRIM_TBLO","PRIM_PPNL","PRIM_IMAG","PRIM_SPBN"]});
