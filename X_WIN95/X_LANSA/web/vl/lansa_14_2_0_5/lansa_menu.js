window.LANSA.addSrc("menu",function(e,c,a,b,n){e.Fb("PRIM_TBLO");e.Fb("PRIM_PPNL");e.Fb("PRIM_IMAG");e.Fb("PRIM_SPBN");a.pNa={gya:16,Rfb:16};a.hU={iya:0,Xfb:1,Yfb:2,Sfb:4};a.BI={g0b:0,rfb:1,qfb:2};a.BI.v={NONE:a.BI.g0b,BREAK:a.BI.rfb,BARBREAK:a.BI.qfb};a.CI={bya:25,Hfb:1,Efb:2,$Bd:4,Ifb:8,Ffb:16};a.BI={tNc:0};a.EBd=3;a.DBd=2;a.FBd=255;a.eNc=768;a.T_b=256;a.S_b=512;a.lNa=65536;a.mNa=131072;a.ffb=262144;a.hfb=524288;a.gfb=1048576;a.tLd=2;a.sLd=2;c.Mxa=function(){s.w.call(this);this.UE=null;this.lN=
a.pNa.gya;this.kN=a.hU.iya;this.qm=null;this.Nb=[];this.kH=new c.Aw;this.gga=new c.ob;this.Lk=new c.wv;this.Sdd=new c.dba;this.Rdd=new c.o4;this.Sdd.No(this.Lk);this.Rdd.No(this.Lk);this.kH.rl(this.Lk);this.gga.Zk(b.H(255,255,255));this.gga.Rh(b.ic().AHb(a.l.hj));this.gga.hn(1);this.gga.Pn(1);this.gga.Jl(1);this.gga.Kl(1);this.kH.Ga(this,a.K.lA,this.bqc);this.kH.tb(this.gga)};var s=c.u(c.Mxa,c.Rx);s.xb=function(){this.Nb=null;s.j.xb.call(this)};s.U=function(){null!=this.UE&&this.ZU();for(var a=null;null!=
(a=this.Nb[0]);)a.Na(null);b.NMc(this);s.j.U.call(this)};s.lsd=function(){return this.UE};s.nsd=function(){return this.Nb};s.eAc=function(){return this.Nb.length};s.O$=function(){return this};s.dIc=function(){return 0!=(this.kN&a.hU.Yfb)};s.VGc=function(){return 0!=(this.kN&a.hU.Sfb)};s.psd=function(){return 0!=(this.kN&a.hU.Xfb)};s.D_c=function(){var b=this.kN&~a.hU.Xfb|a.hU.Xfb;this.kN!=b&&(this.kN=b,this.fa(a.f.i))};s.l6a=function(){return 0!=(this.lN&a.pNa.Rfb)};s.GJd=function(b){b=this.lN&~a.pNa.Rfb|
(b?a.pNa.Rfb:0);this.lN!=b&&(this.lN=b,this.fa(a.f.i))};s.oca=function(a){this.qm!=a&&(this.qm=a,this.YOa())};s.Dwc=function(){return this.qm};s.Sy=function(){return this.Nb};s.zaa=function(){return null!=this.UE||null!=this.Nf};s.lxd=function(){for(var a,b=this.Nb,c=0;c<b.length&&null!=(a=b[c]);c++)if(!0==a.nb())return!0;return!1};s.En=function(){null==this.Nf&&this.yt(b.cb().Oz(this));return this.Nf};s.L9=function(b){var c=e.Rb();c.Vb("CONTEXT",b);this.Ha(a.K.lA,c);c.mc()};s.vw=function(b){this.zaa()&&
this.ZU();b.Lb=this;this.qTa(b);b.Ea(this,this.kta);this.fa(a.f.i)};s.nGc=function(b){this.zaa()&&this.ZU();b.Lb=this;this.qTa(b);b.Ea(this,this.kta);this.fa(a.f.i)};s.fZ=function(b){this.zaa()&&this.ZU();b.Lb=null;b.Ba(this,this.kta);this.qTa(b);this.fa(a.f.i)};s.cwa=function(){b.W();this.ZU()};s.k3b=function(a){if(null==this.UE){if(null!=this.Nf)this.UE=this.Nf;else{var c=b.W().Zqa;this.UE=this.$_a();null!=this.UE&&(c[this.UE]=this)}this.aOa(null,a)}};s.ZU=function(){if(null!=this.UE){for(var a,
c=this.Nb,d=0;d<c.length&&null!=(a=c[d]);d++){var e=a.Ks;a.yt(null);a.nSc();e&&e.ZU()}null!=this.UE&&(null!=this.Nf?(this.yt(null),this.UE=null):(a=b.W().Zqa,null!=this.UE&&delete a[this.UE]));this.UE=null;this.yt(null);b.W().Ps(this.kH,!1)}};s.$Pc=function(){};s.Wgb=function(){};s.aOa=function(a,b){this.kH.jb(new c.ja(0,0,0,5));for(var d,e=0,f=this.Nb,h=0;h<f.length&&null!=(d=f[h]);h++)e=this.gha(a,b,d,e)};s.gha=function(a,b,c,e,f){return c.gha(a,b,this,e,f)};s.$yb=function(a){for(var b=!1,c,e=this.Nb,
f=0;f<e.length&&null!=(c=e[f]);f++)if(c==a||null!=c.Ks&&c.Ks.$yb(a)){b=!0;break}return b};s.ODc=function(b){for(var c=!1,d=null,e=this.Nb,f=0;f<e.length&&null!=(d=e[f]);f++)if(d.Ob()&&d.ae()){var h=d.Ks;if(null!=h&&h.ODc(b)){c=!0;break}if(d.xra!=a.Z.zza&&d.xra==b){d.of();c=!0;break}}return c};s.Zkd=function(){for(var a=this.Nb,b=null,c=null,e=0;e<a.length&&null!=(c=a[e]);e++)if(c.T2()){b=c;break}return b};s.qTa=function(a){var c=this.Nb.indexOf(a);-1!=c&&this.Nb.splice(c,1);c+=1;if(a.Lb==this){0==
a.Sf()&&(a.nh=this.Nb.length+1);var d=a.Sf(),e=0;0<c&&d>c&&d++;for(var f,c=this.Nb,h=0;h<c.length&&null!=(f=c[h])&&!(f.Sf()>=d);h++)e++;this.Nb.splice(e,0,a)}b.LMc(this)};s.dma=function(b){b==a.WS&&(this.zaa()&&this.ZU(),this.w4(),this.fa(a.f.i))};s.w4=function(){for(var b,c=this.Nb,d=0;d<c.length&&null!=(b=c[d]);d++)b.nh=1,b.fa(a.f.i)};s.VBd=function(a){var c=b.W();return null!=c.Zqa?c.Zqa[a]:null};s.YOa=function(){};s.rOa=function(){b.W().Ps(this.kH,!1)};s.Wgb=function(){};s.Bv=function(a){this.kN|=
a};s.Xx=function(a){this.kN&=~a};s.Cr=function(a,b){this.kN=this.kN&~a|(b?a:0)};s.HBb=function(b,c){switch(c.Ya){case a.f.rb:this.oca(null)}};s.kta=function(){this.dIc()?this.Bv(a.hU.Sfb):this.zaa()&&(this.ZU(),this.fa(a.f.i))};s.bqc=function(){this.Wgb(null,this.kH)};e.ad(c.Mxa,"PRIM_MENU",{Pa:{}});c.Zdb=function(){p.w.call(this);this.ry=null};var p=c.u(c.Zdb,c.Mxa);p.xb=function(){p.j.xb.call(this)};p.U=function(){this.zca(null);p.j.U.call(this)};p.GJb=function(){return this.ry};p.zca=function(b){this.ry!=
b&&(this.ry&&this.ry.dFd(this),b&&b.Uxd(this),this.fa(a.f.i))};p.$Pc=function(){this.L9(null)};p.aOa=function(a,b){this.kH.jb(new c.ja(0,0,0,5));for(var d,e=0,f=this.Nb,h=0;h<f.length&&null!=(d=f[h]);h++)e=this.gha(a,b,d,e,!0)};p.$_a=function(){throw 0;};e.ad(c.Zdb,"PRIM_MBAR",{Pa:{}});c.aeb=function(){t.w.call(this);this.upa=null;this.Yqb=0};var t=c.u(c.aeb,c.Mxa);t.xb=function(){t.j.xb.call(this)};t.U=function(){this.YOa();t.j.U.call(this)};t.RId=function(b){b!=this.Yqb&&(this.Yqb=b,this.YOa(),
this.fa(a.f.i))};t.pmd=function(){return this.Yqb};t.Ouc=function(){null==this.upa&&(this.upa=[]);return this.upa};t.aOa=function(a,b){this.kH.jb(new c.ja(0,0,0,5));for(var d,e=0,f=this.Ouc(),h=0;h<f.length&&null!=(d=f[h]);h++)e=this.gha(a,b,d,e);f=this.Nb;for(h=0;h<f.length&&null!=(d=f[h]);h++)e=this.gha(a,b,d,e)};t.$_a=function(){return b.$ua()};t.sna=function(a,b){a===n&&(a=0);b===n&&(b=0);this.S1b(new c.jd(a,b),null,!0,null)};t.S1b=function(c,e){var d=b.W(),g=!1,g=d.Uj,f=b.W().Tu;this.L9(e,c);
b.RMa(a.WS);this.oca(e);g&&this.ts(g,a.La.ccc);null!=f&&f.qY()&&f.rO();this.k3b(this.kH);0<this.kH.Sa()&&(g=d.oxb(!0),this.kH.K5(c.Cb(),c.Db(),a.Zi.Vx,n,null),d.oxb(g))};t.YOa=function(){this.ZU();if(this.upa){for(var a;null!=(a=this.upa[0]);)b.la(a);this.upa=null}};t.bid=function(a,b){var c=b.mja();c&&c.qDd(b.pi.eK)};e.ad(c.aeb,"PRIM_PMNU",{Pa:{},jc:{Show:t.sna}});c.hYb=function(){f.w.call(this);this.ry=null};var f=c.u(c.hYb,c.Mxa);f.xb=function(){f.j.xb.call(this)};f.U=function(){this.ry&&this.ry.Qkb(null);
f.j.U.call(this)};f.GJb=function(){return this.ry};f.zca=function(b){if(this.ry!=b&&!this.$yb(b)){var c=this.ry;this.ry=b;c&&c.Mxb(null);this.ry&&this.ry.Mxb(this);this.fa(a.f.i,a.je.Swa)}};f.l6a=function(){var a=f.j.l6a.call(this);a&&(a=this.ry.rIc());return a};f.O$=function(){var a=null;this.ry&&(a=this.ry.O$());return a};f.rOa=function(){f.j.rOa.call(this);this.ry.R().rOa()};f.$_a=function(){return b.$ua()};f.mad=function(){if(null!=this.UE)for(var a,b=this.Nb,c=0;c<b.length&&null!=(a=b[c]);c++){var e=
a.Ks;e&&e.ZU()}};f.Wgb=function(b,c){this.Bv(a.hU.Yfb);this.L9(null);this.Bv(a.hU.Yfb);this.zaa()&&this.VGc()&&(this.mad(),this.aOa(b,c));this.Bv(a.hU.Sfb)};e.ad(c.hYb,"PRIM_SMNU",{Pa:{Parent:{a:f.GJb,g:f.zca}}});c.BXb=function(){h.w.call(this);this.Lb=null;this.Ne=a.CI.bya;this.eb=a.BI.tNc;this.Xe=a.lNa|a.mNa;this.xra=a.Z.zza;this.iec=this.nh=this.Wr=this.agc=this.eK=0;this.T0=this.Ia=this.Ks=this.Lb=null;this.ib=this.IYa="";this.fR=new c.em;this.XCa=new c.rt;this.u0=new c.ob;this.GJ=new c.zI;this.i7=
b.Pc(null,this.fR,null,null,1,1);this.YCa=b.Pc(null,this.GJ,null,null,1,1);this.nqa=b.Pc(null,this.XCa,null,null,1,1);this.XCa.tb(this.u0);this.XCa.Na(this.fR);this.GJ.Na(this.fR);this.fR.Ga(this,a.K.gc,this.Roc);this.dhc()};var h=c.u(c.BXb,c.Rx);h.xb=function(){this.dnc();h.j.xb.call(this)};h.U=function(){this.Qkb(null);this.Na(null);h.j.U.call(this);this.Xc(null);this.VZc()};h.spd=function(){var a="";this.RHc()||null!=this.O$()&&this.O$()instanceof c.aeb?a=this.mb():this.Kvc();return a};h.mb=function(){return this.ib};
h.Am=function(){return this.mb().Np()};h.Kvc=function(){this.mb()};h.Ond=function(){return this.fsb};h.xvd=function(){return!0};h.Ytd=function(){return!0};h.btd=function(){return!0};h.vkb=function(){var a=this.O$();a&&a.D_c()};h.eg=function(){return 0!=(this.Xe&a.ffb)?!0:!1};h.T2=function(){return 0!=(this.Xe&a.gfb)?!0:!1};h.QId=function(b){b!=this.e$a()&&(this.Ne=this.Ne&~a.CI.Efb|(b?a.CI.Efb:0),this.fa(a.f.i))};h.rD=function(){return this.Wr};h.Dyc=function(){return this.iec};h.cAc=function(){var b=
a.BI.g0b;0!=(this.Xe&a.T_b)?b=a.BI.rfb:0!=(this.Xe&a.S_b)&&(b=a.BI.qfb);return b};h.R=function(){return this.Lb};h.O$=function(){var a=null;this.Lb&&(a=this.Lb.O$());return a};h.qja=function(){return 0!=(this.Xe&a.hfb)?!0:!1};h.Lud=function(){return this.xra};h.Mud=function(){return""};h.kCc=function(){return this.Ks};h.a7a=function(){return this.eK};h.dwd=function(){return this.agc};h.nb=function(){return 0!=(this.Xe&a.mNa)?!0:!1};h.Ab=function(a){this.ib!=a&&(this.ib=a,this.$Y())};h.Yk=function(a){this.mb().tM(a)};
h.Eh=function(b){var c=this.rD();if(b&&0!=c&&null!=this.R())for(var d,e=this.R().Nb,f=0;f<e.length&&null!=(d=e[f]);f++)d!=this&&d.rD()==c&&d.Eh(!1);b=b?this.Xe|a.ffb:this.Xe&~a.ffb;b!=this.Xe&&(this.Xe=b,this.fa(a.f.i))};h.LPa=function(b){b=b?this.Xe|a.gfb:this.Xe&~a.gfb;b!=this.Xe&&(this.Xe=b,this.fa(a.f.i))};h.Sf=function(){return this.nh};h.Re=function(b){this.e$a()||(null!=this.Lb?(this.nh=b,this.Lb.qTa(this)):this.nh!=b&&(this.nh=b,this.fa(a.f.i)))};h.ae=function(){return 0!=(this.Xe&a.lNa)?
!0:!1};h.Mf=function(b){b=b?this.Xe|a.lNa:this.Xe&~a.lNa;b!=this.Xe&&(this.Xe=b,this.fa(a.f.i))};h.wZ=function(b){this.Wr!=b&&(this.Wr=b,this.fa(a.f.i))};h.NZc=function(b){this.iec=b;this.fa(a.f.i)};h.v_c=function(b){var c=this.Xe&~a.eNc;switch(b){case a.BI.rfb:c|=a.T_b;break;case a.BI.qfb:c|=a.S_b}c!=this.Xe&&(this.Xe=c,this.fa(a.f.i))};h.Na=function(b){this.Lb!=b&&(this.Lb&&this.Lb.fZ(this),b&&(this.e$a()?b.nGc(this):b.vw(this)),null!=this.Ia&&this.vkb(),this.fa(a.f.i,a.je.Swa))};h.BQa=function(b){b=
b?this.Xe|a.hfb:this.Xe&~a.hfb;b!=this.Xe&&(this.Xe=b,this.fa(a.f.i))};h.x0c=function(b){this.xra!=b&&(this.xra=b,this.fa(a.f.i))};h.Qkb=function(a){this.Ks!=a&&(this.Ks&&this.Ks.zca(null),a&&a.zca(this))};h.QQa=function(b){this.eK!=b&&(this.eK=b,this.fa(a.f.i))};h.QKd=function(a){this.agc=a};h.Ac=function(){return this.Ia};h.Xc=function(b){this.Ia!=b&&(null!=this.Ia&&(this.Ia.Ba(this,this.Yl),this.Ia.vb()),this.Ia=b,null!=this.Ia&&(this.Ia.Aa(),this.Ia.Ea(this,this.Yl)),this.vkb(),this.fa(a.f.i))};
h.VZc=function(){null!=this.T0&&(null!=this.T0&&(this.T0.Ba(this,this.wCb),this.T0.vb()),this.T0=null,null!=this.T0&&(this.T0.Aa(),this.T0.Ea(this,this.wCb)),this.vkb(),this.fa(a.f.i))};h.rrd=function(){return this.T0};h.HCc=function(){return this.IYa};h.y1c=function(b){this.IYa!=b&&(this.IYa=b,this.fa(a.f.i,a.je.hJc))};h.gKa=function(){return 0!=(this.Ne&a.CI.Hfb)?!0:!1};h.z1c=function(b){b!=this.gKa()&&(this.Ne=this.Ne&~a.CI.Hfb|(b?a.CI.Hfb:0),this.fa(a.f.i))};h.F7a=function(){return 0!=(this.Ne&
a.CI.Ifb)?!0:!1};h.A1c=function(b){b!=this.F7a()&&(this.Ne=this.Ne&~a.CI.Ifb|(b?a.CI.Ifb:0),this.fa(a.f.i))};h.Gud=function(){return!0};h.Hia=function(){return 0!=(this.Ne&a.CI.Ffb)?!0:!1};h.C5b=function(b){b!=this.Hia()&&(this.Ne=this.Ne&~a.CI.Ffb|(b?a.CI.Ffb:0),this.fa(a.f.i))};h.Mb=function(b){b=b?this.Xe|a.mNa:this.Xe&~a.mNa;b!=this.Xe&&(this.Xe=b,this.fa(a.f.i))};h.dKb=function(){return this.qd};h.En=function(){null==this.Nf&&this.yt(b.cb().Oz(this));return this.Nf};h.Ob=function(){return null!=
this.Lb&&this.Lb.zaa()?!0:!1};h.Myd=function(){return"-"==this.mb()?!0:!1};h.e$a=function(){return 0!=(this.Ne&a.CI.Efb)?!0:!1};h.rIc=function(){var a=this.gKa();if(a&&this.F7a()){var b=this.R();b&&(a=b.l6a())}return a};h.RHc=function(){return null!=this.R()&&this.R()instanceof c.Zdb};h.of=function(b){b===n&&(b=null);var c=e.Rb();c.Vb("CONTEXT",b);this.Ha(a.K.gc,c);c.mc()};h.YMd=function(){if(this.Ks)for(var a,b=this.Ks.Nb,c=0;c<b.length&&null!=(a=b[c]);c++)a.Eh(!1)};h.Mxb=function(b){this.Ks!=b&&
(this.Ks&&(this.Ks.ry==this?this.Ks.zca(null):(this.fa(a.f.SNc),this.Ks.Ba(this,this.vDb),this.Ks=null)),b&&(b.ry!=this?b.zca(this):(this.Ks=b,this.Ks.Ea(this,this.vDb))),this.fa(a.f.i))};h.XBd=function(a){return b.W().TDa[a]};h.dhc=function(){this.fsb=b.W().kxb();b.W().TDa[this.fsb]=this};h.gha=function(a,b,c,e){return this.whc(b,e)};h.nSc=function(){this.fR.Na(null)};h.whc=function(b,e){if(this.nb()){var d=b.zj(),g=null;this.u0.On(a.l.Ld);this.u0.Zk(a.l.Ld);this.u0.hn(1);this.u0.Pn(1);this.u0.Jl(1);
this.u0.Kl(1);this.eg()&&(g=this.qja()?a.Tb.s0b:a.Tb.r0b,this.u0.On(a.l.OU),this.u0.Zk(a.l.S5));this.Ac()&&(g=this.Ac());this.i7.Na(d);this.i7.Un(d.Cc(0));this.i7.kn(d.Gc(0));this.i7.Fh(a.za.jj);this.i7.Hb(a.sa.bB);this.i7.Xb(a.ka.ci);this.i7.Le(4);this.i7.ve(2);this.nqa.Na(d);this.nqa.Un(d.Cc(0));this.nqa.kn(d.Gc(0));this.nqa.Xb(a.ka.Sd);this.nqa.Hb(a.sa.yl);this.nqa.Le(2);this.YCa.Na(d);this.YCa.Un(d.Cc(0));this.YCa.kn(d.Gc(0));this.YCa.Xb(a.ka.uf);this.YCa.Le(22);this.fR.Na(b);this.fR.rl(d);this.fR.Re(e+
1);this.fR.jQ(this.gKa()?this.IYa:"");this.GJ.bM(!1);this.GJ.Qq(a.ee.XY);this.GJ.jQa(a.QD.dya);this.GJ.xG(a.Dt.rK);this.GJ.Ab(this.mb());this.GJ.Vn(a.mh.Yq);this.GJ.GZ(this.Ks?this.Ks.kH:null);this.XCa.$i(g);this.GJ.Ak(!1,!0);d=60+this.GJ.nX();g=10+this.GJ.Eia();this.fR.vc(g);this.XCa.jb(new c.ja(2,2,18,18));this.GJ.jb(new c.ja(22,2,d,18));b.$b(Math.max(b.Wa(),d));b.vc(b.Sa()+this.fR.Sa());null!=this.Ks&&this.Ks.k3b(this.Ks.kH);e++}return e};h.dnc=function(){delete b.W().TDa[this.fsb];b.W()};h.cNd=
function(a){this.Re(a);null!=this.Lb&&this.Lb.w4()};h.$Y=function(){this.fa(a.f.i,a.je.mQb)};h.Roc=function(a,b){this.rD()&&this.Eh(!0);this.of();this.R()&&this.R().rOa();b.HANDLED.set(!0)};h.vDb=function(){this.Ob()&&this.fa(a.f.i)};h.Yl=function(b,c){switch(c.Ya){case a.f.rb:case a.f.Qb:this.Xc(null)}};h.wCb=function(b,c){switch(c.Ya){case a.f.rb:case a.f.Qb:this.Xc(null)}};e.ad(c.BXb,"PRIM_MITM",{Pa:{Parent:{a:h.R,g:h.Na},Caption:{a:h.mb,g:function(a){this.Ab(e.na(a))}},Checked:{a:h.eg,g:function(a){this.Eh(e.ya(a))}},
Default:{a:h.T2,g:function(a){this.LPa(e.ya(a))}},GroupIndex:{a:h.rD,g:function(a){this.wZ(e.L(a))}},HelpContext:{a:h.Dyc,g:function(a){this.NZc(e.L(a))}},MenuBreak:{a:function(){return e.ta(this.cAc(),a.BI.v)},g:function(b){this.v_c(e.qa(b,a.BI.v))}},RadioItem:{a:h.qja,g:function(a){this.BQa(e.ya(a))}},SubMenu:{a:h.kCc,g:h.Qkb},ShortCut:{a:function(){return e.ta(this.xra,a.Z.v)},g:function(b){this.x0c(e.qa(b,a.Z.v))}},Tag:{a:h.a7a,g:function(a){this.QQa(e.L(a))}},Tip:{a:h.HCc,g:function(a){this.y1c(e.na(a))}},
TipShow:{a:h.gKa,g:function(a){this.z1c(e.ya(a))}},TipShowOfParent:{a:h.F7a,g:function(a){this.A1c(e.ya(a))}},Enabled:{a:h.ae,g:function(a){this.Mf(e.ya(a))}},Visible:{a:h.nb,g:function(a){this.Mb(e.ya(a))}},DisplayPosition:{a:h.Sf,g:function(a){this.Re(e.L(a))}},Image:{a:h.Ac,g:h.Xc}}})},{rp:["PRIM_TBLO","PRIM_PPNL","PRIM_IMAG","PRIM_SPBN"]});
