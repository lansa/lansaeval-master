window.LANSA.addSrc("menu",function(e,c,a,b,m){e.Gb("PRIM_TBLO");e.Gb("PRIM_PPNL");e.Gb("PRIM_IMAG");e.Gb("PRIM_SPBN");a.HOa={b5:16,nhb:16};a.bV={oza:0,thb:1,uhb:2,ohb:4};a.hJ={z1b:0,Pgb:1,Ogb:2};a.hJ.v={NONE:a.hJ.z1b,BREAK:a.hJ.Pgb,BARBREAK:a.hJ.Ogb};a.iJ={IZ:25,dhb:1,bhb:2,vDd:4,ehb:8,chb:16};a.hJ={WOc:0};a.ZCd=3;a.YCd=2;a.$Cd=255;a.HOc=768;a.l1b=256;a.k1b=512;a.BOa=65536;a.COa=131072;a.Dgb=262144;a.Fgb=524288;a.Egb=1048576;a.mNd=2;a.lNd=2;c.Uya=function(){p.w.call(this);this.zF=null;this.zK=a.HOa.b5;
this.WN=a.bV.oza;this.sn=null;this.Lb=[];this.NH=new c.Zw;this.lha=new c.pb;this.Gh=new c.Vv;this.lfd=new c.cca;this.kfd=new c.V4;this.lfd.Ip(this.Gh);this.kfd.Ip(this.Gh);this.NH.gm(this.Gh);this.lha.ek(b.H(255,255,255));this.lha.mi(b.ic().UIb(a.m.Cj));this.lha.jo(1);this.lha.Ro(1);this.lha.Cm(1);this.lha.Dm(1);this.NH.wa(this,a.G.Zv,this.lrc);this.NH.tb(this.lha)};var p=c.u(c.Uya,c.sy);p.vb=function(){this.Lb=null;p.j.vb.call(this)};p.U=function(){null!=this.zF&&this.ZV();for(var a=null;null!=(a=
this.Lb[0]);)a.Na(null);b.pOc(this);p.j.U.call(this)};p.Itd=function(){return this.zF};p.Ltd=function(){return this.Lb};p.wBc=function(){return this.Lb.length};p.Faa=function(){return this};p.HJc=function(){return 0!=(this.WN&a.bV.uhb)};p.yIc=function(){return 0!=(this.WN&a.bV.ohb)};p.Ntd=function(){return 0!=(this.WN&a.bV.thb)};p.T0c=function(){var b=this.WN&~a.bV.thb|a.bV.thb;this.WN!=b&&(this.WN=b,this.ca(a.f.h))};p.z7a=function(){return 0!=(this.zK&a.HOa.nhb)};p.rLd=function(b){b=this.zK&~a.HOa.nhb|
(b?a.HOa.nhb:0);this.zK!=b&&(this.zK=b,this.ca(a.f.h))};p.oda=function(a){this.sn!=a&&(this.sn=a,this.rQa())};p.Mxc=function(){return this.sn};p.uz=function(){return this.Lb};p.uba=function(){return null!=this.zF||null!=this.gg};p.Fyd=function(){for(var a,b=this.Lb,c=0;c<b.length&&null!=(a=b[c]);c++)if(!0==a.qb())return!0;return!1};p.Zn=function(){null==this.gg&&this.eu(b.cb().vA(this));return this.gg};p.D$=function(b){var c=e.Tb();c.Zb("CONTEXT",b);this.Ga(a.G.Zv,c);c.sc()};p.Tw=function(b){this.uba()&&
this.ZV();b.Rb=this;this.HUa(b);b.Ea(this,this.mua);this.ca(a.f.h)};p.SHc=function(b){this.uba()&&this.ZV();b.Rb=this;this.HUa(b);b.Ea(this,this.mua);this.ca(a.f.h)};p.XZ=function(b){this.uba()&&this.ZV();b.Rb=null;b.Da(this,this.mua);this.HUa(b);this.ca(a.f.h)};p.hxa=function(){b.W();this.ZV()};p.D4b=function(a){if(null==this.zF){if(null!=this.gg)this.zF=this.gg;else{var c=b.W().esa;this.zF=this.o1a();null!=this.zF&&(c[this.zF]=this)}this.uPa(null,a)}};p.ZV=function(){if(null!=this.zF){for(var a,
c=this.Lb,d=0;d<c.length&&null!=(a=c[d]);d++){var e=a.yt;a.eu(null);a.MTc();e&&e.ZV()}null!=this.zF&&(null!=this.gg?(this.eu(null),this.zF=null):(a=b.W().esa,null!=this.zF&&delete a[this.zF]));this.zF=null;this.eu(null);b.W().Et(this.NH,!1)}};p.zRc=function(){};p.oib=function(){};p.uPa=function(a,b){this.NH.kb(new c.ga(0,0,0,5));for(var d,e=0,g=this.Lb,l=0;l<g.length&&null!=(d=g[l]);l++)e=this.nia(a,b,d,e)};p.nia=function(a,b,c,e,g){return c.nia(a,b,this,e,g)};p.yAb=function(a){for(var b=!1,c,e=this.Lb,
g=0;g<e.length&&null!=(c=e[g]);g++)if(c==a||null!=c.yt&&c.yt.yAb(a)){b=!0;break}return b};p.sFc=function(b){for(var c=!1,d=null,e=this.Lb,g=0;g<e.length&&null!=(d=e[g]);g++)if(d.Pb()&&d.ke()){var l=d.yt;if(null!=l&&l.sFc(b)){c=!0;break}if(d.Asa!=a.Z.EAa&&d.Asa==b){d.Bf();c=!0;break}}return c};p.wmd=function(){for(var a=this.Lb,b=null,c=null,e=0;e<a.length&&null!=(c=a[e]);e++)if(c.B3()){b=c;break}return b};p.HUa=function(a){var c=this.Lb.indexOf(a);-1!=c&&this.Lb.splice(c,1);c+=1;if(a.Rb==this){0==
a.jg()&&(a.Eh=this.Lb.length+1);var d=a.jg(),e=0;0<c&&d>c&&d++;for(var g,c=this.Lb,l=0;l<c.length&&null!=(g=c[l])&&!(g.jg()>=d);l++)e++;this.Lb.splice(e,0,a)}b.nOc(this)};p.jna=function(b){b==a.OT&&(this.uba()&&this.ZV(),this.e5(),this.ca(a.f.h))};p.e5=function(){for(var b,c=this.Lb,d=0;d<c.length&&null!=(b=c[d]);d++)b.Eh=1,b.ca(a.f.h)};p.qDd=function(a){var c=b.W();return null!=c.esa?c.esa[a]:null};p.rQa=function(){};p.LPa=function(){b.W().Et(this.NH,!1)};p.oib=function(){};p.$v=function(a){this.WN|=
a};p.wy=function(a){this.WN&=~a};p.os=function(a,b){this.WN=this.WN&~a|(b?a:0)};p.eDb=function(b,c){switch(c.Ya){case a.f.sb:this.oda(null)}};p.mua=function(){this.HJc()?this.$v(a.bV.ohb):this.uba()&&(this.ZV(),this.ca(a.f.h))};p.lrc=function(){this.oib(null,this.NH)};e.kd(c.Uya,"PRIM_MENU",{Oa:{}});c.xfb=function(){l.w.call(this);this.Uy=null};var l=c.u(c.xfb,c.Uya);l.vb=function(){l.j.vb.call(this)};l.U=function(){this.Ada(null);l.j.U.call(this)};l.bLb=function(){return this.Uy};l.Ada=function(b){this.Uy!=
b&&(this.Uy&&this.Uy.BGd(this),b&&b.nzd(this),this.ca(a.f.h))};l.zRc=function(){this.D$(null)};l.uPa=function(a,b){this.NH.kb(new c.ga(0,0,0,5));for(var d,e=0,g=this.Lb,l=0;l<g.length&&null!=(d=g[l]);l++)e=this.nia(a,b,d,e,!0)};l.o1a=function(){throw 0;};e.kd(c.xfb,"PRIM_MBAR",{Oa:{}});c.zfb=function(){s.w.call(this);this.Bqa=null;this.zsb=0};var s=c.u(c.zfb,c.Uya);s.vb=function(){s.j.vb.call(this)};s.U=function(){this.rQa();s.j.U.call(this)};s.oKd=function(b){b!=this.zsb&&(this.zsb=b,this.rQa(),
this.ca(a.f.h))};s.Ond=function(){return this.zsb};s.$vc=function(){null==this.Bqa&&(this.Bqa=[]);return this.Bqa};s.uPa=function(a,b){this.NH.kb(new c.ga(0,0,0,5));for(var d,e=0,g=this.$vc(),l=0;l<g.length&&null!=(d=g[l]);l++)e=this.nia(a,b,d,e);g=this.Lb;for(l=0;l<g.length&&null!=(d=g[l]);l++)e=this.nia(a,b,d,e)};s.o1a=function(){return b.bwa()};s.yoa=function(a,b){a===m&&(a=0);b===m&&(b=0);this.j3b(new c.ld(a,b),null,!0,null)};s.j3b=function(c,e){var d=b.W(),h=!1,h=d.Kj,g=b.W().pv;this.D$(e,c);
b.iOa(a.OT);this.oda(e);h&&this.Xs(h,a.Ma.pdc);null!=g&&g.iZ()&&g.bP();this.D4b(this.NH);0<this.NH.Qa()&&(h=d.Qyb(!0),this.NH.s6(c.Db(),c.Eb(),a.Ci.bx,m,null),d.Qyb(h))};s.rQa=function(){this.ZV();if(this.Bqa){for(var a;null!=(a=this.Bqa[0]);)b.la(a);this.Bqa=null}};s.zjd=function(a,b){var c=b.rka();c&&c.NEd(b.Ii.NK)};e.kd(c.zfb,"PRIM_PMNU",{Oa:{},jc:{Show:s.yoa}});c.GZb=function(){g.w.call(this);this.Uy=null};var g=c.u(c.GZb,c.Uya);g.vb=function(){g.j.vb.call(this)};g.U=function(){this.Uy&&this.Uy.lmb(null);
g.j.U.call(this)};g.bLb=function(){return this.Uy};g.Ada=function(b){if(this.Uy!=b&&!this.yAb(b)){var c=this.Uy;this.Uy=b;c&&c.nzb(null);this.Uy&&this.Uy.nzb(this);this.ca(a.f.h,a.we.Yxa)}};g.z7a=function(){var a=g.j.z7a.call(this);a&&(a=this.Uy.VJc());return a};g.Faa=function(){var a=null;this.Uy&&(a=this.Uy.Faa());return a};g.LPa=function(){g.j.LPa.call(this);this.Uy.M().LPa()};g.o1a=function(){return b.bwa()};g.Ebd=function(){if(null!=this.zF)for(var a,b=this.Lb,c=0;c<b.length&&null!=(a=b[c]);c++){var e=
a.yt;e&&e.ZV()}};g.oib=function(b,c){this.$v(a.bV.uhb);this.D$(null);this.$v(a.bV.uhb);this.uba()&&this.yIc()&&(this.Ebd(),this.uPa(b,c));this.$v(a.bV.ohb)};e.kd(c.GZb,"PRIM_SMNU",{Oa:{Parent:{a:g.bLb,g:g.Ada}}});c.$Yb=function(){q.w.call(this);this.Rb=null;this.bf=a.iJ.IZ;this.fb=a.hJ.WOc;this.ff=a.BOa|a.COa;this.Asa=a.Z.EAa;this.tfc=this.Eh=this.Gs=this.khc=this.NK=0;this.D1=this.Ia=this.yt=this.Rb=null;this.mb=this.$Za="";this.XR=new c.jn;this.cEa=new c.Yt;this.d1=new c.pb;this.lK=new c.fJ;this.U7=
b.Ic(null,this.XR,null,null,1,1);this.dEa=b.Ic(null,this.lK,null,null,1,1);this.tra=b.Ic(null,this.cEa,null,null,1,1);this.cEa.tb(this.d1);this.cEa.Na(this.XR);this.lK.Na(this.XR);this.XR.wa(this,a.G.$b,this.Ypc);this.mic()};var q=c.u(c.$Yb,c.sy);q.vb=function(){this.loc();q.j.vb.call(this)};q.U=function(){this.lmb(null);this.Na(null);q.j.U.call(this);this.$c(null);this.o0c()};q.Pqd=function(){var a="";this.uJc()||null!=this.Faa()&&this.Faa()instanceof c.zfb?a=this.ob():this.Uwc();return a};q.ob=
function(){return this.mb};q.An=function(){return this.ob().Cq()};q.Uwc=function(){this.ob()};q.lpd=function(){return this.Dtb};q.Vwd=function(){return!0};q.uvd=function(){return!0};q.yud=function(){return!0};q.Rlb=function(){var a=this.Faa();a&&a.T0c()};q.pg=function(){return 0!=(this.ff&a.Dgb)?!0:!1};q.B3=function(){return 0!=(this.ff&a.Egb)?!0:!1};q.nKd=function(b){b!=this.wab()&&(this.bf=this.bf&~a.iJ.bhb|(b?a.iJ.bhb:0),this.ca(a.f.h))};q.YD=function(){return this.Gs};q.Szc=function(){return this.tfc};
q.vBc=function(){var b=a.hJ.z1b;0!=(this.ff&a.l1b)?b=a.hJ.Pgb:0!=(this.ff&a.k1b)&&(b=a.hJ.Ogb);return b};q.M=function(){return this.Rb};q.Faa=function(){var a=null;this.Rb&&(a=this.Rb.Faa());return a};q.Taa=function(){return 0!=(this.ff&a.Fgb)?!0:!1};q.hwd=function(){return this.Asa};q.iwd=function(){return""};q.LDc=function(){return this.yt};q.n8a=function(){return this.NK};q.Axd=function(){return this.khc};q.qb=function(){return 0!=(this.ff&a.COa)?!0:!1};q.Ab=function(a){this.mb!=a&&(this.mb=a,
this.QZ())};q.Jl=function(a){this.ob().$M(a)};q.Mh=function(b){var c=this.YD();if(b&&0!=c&&null!=this.M())for(var d,e=this.M().Lb,g=0;g<e.length&&null!=(d=e[g]);g++)d!=this&&d.YD()==c&&d.Mh(!1);b=b?this.ff|a.Dgb:this.ff&~a.Dgb;b!=this.ff&&(this.ff=b,this.ca(a.f.h))};q.eRa=function(b){b=b?this.ff|a.Egb:this.ff&~a.Egb;b!=this.ff&&(this.ff=b,this.ca(a.f.h))};q.jg=function(){return this.Eh};q.Fe=function(b){this.wab()||(null!=this.Rb?(this.Eh=b,this.Rb.HUa(this)):this.Eh!=b&&(this.Eh=b,this.ca(a.f.h)))};
q.ke=function(){return 0!=(this.ff&a.BOa)?!0:!1};q.Wf=function(b){b=b?this.ff|a.BOa:this.ff&~a.BOa;b!=this.ff&&(this.ff=b,this.ca(a.f.h))};q.m_=function(b){this.Gs!=b&&(this.Gs=b,this.ca(a.f.h))};q.g0c=function(b){this.tfc=b;this.ca(a.f.h)};q.S0c=function(b){var c=this.ff&~a.HOc;switch(b){case a.hJ.Pgb:c|=a.l1b;break;case a.hJ.Ogb:c|=a.k1b}c!=this.ff&&(this.ff=c,this.ca(a.f.h))};q.Na=function(b){this.Rb!=b&&(this.Rb&&this.Rb.XZ(this),b&&(this.wab()?b.SHc(this):b.Tw(this)),null!=this.Ia&&this.Rlb(),
this.ca(a.f.h,a.we.Yxa))};q.gBa=function(b){b=b?this.ff|a.Fgb:this.ff&~a.Fgb;b!=this.ff&&(this.ff=b,this.ca(a.f.h))};q.P1c=function(b){this.Asa!=b&&(this.Asa=b,this.ca(a.f.h))};q.lmb=function(a){this.yt!=a&&(this.yt&&this.yt.Ada(null),a&&a.Ada(this))};q.gSa=function(b){this.NK!=b&&(this.NK=b,this.ca(a.f.h))};q.JMd=function(a){this.khc=a};q.Hc=function(){return this.Ia};q.$c=function(b){this.Ia!=b&&(null!=this.Ia&&(this.Ia.Da(this,this.Sm),this.Ia.xb()),this.Ia=b,null!=this.Ia&&(this.Ia.Ba(),this.Ia.Ea(this,
this.Sm)),this.Rlb(),this.ca(a.f.h))};q.o0c=function(){null!=this.D1&&(null!=this.D1&&(this.D1.Da(this,this.TDb),this.D1.xb()),this.D1=null,null!=this.D1&&(this.D1.Ba(),this.D1.Ea(this,this.TDb)),this.Rlb(),this.ca(a.f.h))};q.Psd=function(){return this.D1};q.mEc=function(){return this.$Za};q.R2c=function(b){this.$Za!=b&&(this.$Za=b,this.ca(a.f.h,a.we.LKc))};q.wLa=function(){return 0!=(this.bf&a.iJ.dhb)?!0:!1};q.S2c=function(b){b!=this.wLa()&&(this.bf=this.bf&~a.iJ.dhb|(b?a.iJ.dhb:0),this.ca(a.f.h))};
q.S8a=function(){return 0!=(this.bf&a.iJ.ehb)?!0:!1};q.T2c=function(b){b!=this.S8a()&&(this.bf=this.bf&~a.iJ.ehb|(b?a.iJ.ehb:0),this.ca(a.f.h))};q.bwd=function(){return!0};q.Kja=function(){return 0!=(this.bf&a.iJ.chb)?!0:!1};q.V6b=function(b){b!=this.Kja()&&(this.bf=this.bf&~a.iJ.chb|(b?a.iJ.chb:0),this.ca(a.f.h))};q.Ib=function(b){b=b?this.ff|a.COa:this.ff&~a.COa;b!=this.ff&&(this.ff=b,this.ca(a.f.h))};q.zLb=function(){return this.nd};q.Zn=function(){null==this.gg&&this.eu(b.cb().vA(this));return this.gg};
q.Pb=function(){return null!=this.Rb&&this.Rb.uba()?!0:!1};q.fAd=function(){return"-"==this.ob()?!0:!1};q.wab=function(){return 0!=(this.bf&a.iJ.bhb)?!0:!1};q.VJc=function(){var a=this.wLa();if(a&&this.S8a()){var b=this.M();b&&(a=b.z7a())}return a};q.uJc=function(){return null!=this.M()&&this.M()instanceof c.xfb};q.Bf=function(b){b===m&&(b=null);var c=e.Tb();c.Zb("CONTEXT",b);this.Ga(a.G.$b,c);c.sc()};q.ROd=function(){if(this.yt)for(var a,b=this.yt.Lb,c=0;c<b.length&&null!=(a=b[c]);c++)a.Mh(!1)};
q.nzb=function(b){this.yt!=b&&(this.yt&&(this.yt.Uy==this?this.yt.Ada(null):(this.ca(a.f.uPc),this.yt.Da(this,this.TEb),this.yt=null)),b&&(b.Uy!=this?b.Ada(this):(this.yt=b,this.yt.Ea(this,this.TEb))),this.ca(a.f.h))};q.sDd=function(a){return b.W().dFa[a]};q.mic=function(){this.Dtb=b.W().Myb();b.W().dFa[this.Dtb]=this};q.nia=function(a,b,c,e){return this.Fic(b,e)};q.MTc=function(){this.XR.Na(null)};q.Fic=function(b,e){if(this.qb()){var d=b.ki(),h=null;this.d1.Qo(a.m.Rd);this.d1.ek(a.m.Rd);this.d1.jo(1);
this.d1.Ro(1);this.d1.Cm(1);this.d1.Dm(1);this.pg()&&(h=this.Taa()?a.Vb.L1b:a.Vb.K1b,this.d1.Qo(a.m.fN),this.d1.ek(a.m.A6));this.Hc()&&(h=this.Hc());this.U7.Na(d);this.U7.Rl(d.wc(0));this.U7.ml(d.zc(0));this.U7.Lf(a.xa.mj);this.U7.yb(a.qa.gz);this.U7.Qb(a.ja.Yh);this.U7.re(4);this.U7.Ud(2);this.tra.Na(d);this.tra.Rl(d.wc(0));this.tra.ml(d.zc(0));this.tra.Qb(a.ja.Xd);this.tra.yb(a.qa.Ek);this.tra.re(2);this.dEa.Na(d);this.dEa.Rl(d.wc(0));this.dEa.ml(d.zc(0));this.dEa.Qb(a.ja.Mf);this.dEa.re(22);this.XR.Na(b);
this.XR.gm(d);this.XR.Fe(e+1);this.XR.ZQ(this.wLa()?this.$Za:"");this.lK.LM(!1);this.lK.Er(a.ie.NZ);this.lK.DRa(a.zE.kza);this.lK.ZG(a.iu.ZK);this.lK.Ab(this.ob());this.lK.Kn(a.Vg.oq);this.lK.v_(this.yt?this.yt.NH:null);this.cEa.vj(h);this.lK.$j(!1,!0);d=60+this.lK.XT();h=10+this.lK.Hja();this.XR.xc(h);this.cEa.kb(new c.ga(2,2,18,18));this.lK.kb(new c.ga(22,2,d,18));b.Yb(Math.max(b.Xa(),d));b.xc(b.Qa()+this.XR.Qa());null!=this.yt&&this.yt.D4b(this.yt.NH);e++}return e};q.loc=function(){delete b.W().dFa[this.Dtb];
b.W()};q.WOd=function(a){this.Fe(a);null!=this.Rb&&this.Rb.e5()};q.QZ=function(){this.ca(a.f.h,a.we.ORb)};q.Ypc=function(a,b){this.YD()&&this.Mh(!0);this.Bf();this.M()&&this.M().LPa();b.HANDLED.set(!0)};q.TEb=function(){this.Pb()&&this.ca(a.f.h)};q.Sm=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.$c(null)}};q.TDb=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.$c(null)}};e.kd(c.$Yb,"PRIM_MITM",{Oa:{Parent:{a:q.M,g:q.Na},Caption:{a:q.ob,g:function(a){this.Ab(e.ma(a))}},Checked:{a:q.pg,
g:function(a){this.Mh(e.za(a))}},Default:{a:q.B3,g:function(a){this.eRa(e.za(a))}},GroupIndex:{a:q.YD,g:function(a){this.m_(e.K(a))}},HelpContext:{a:q.Szc,g:function(a){this.g0c(e.K(a))}},MenuBreak:{a:function(){return e.ta(this.vBc(),a.hJ.v)},g:function(b){this.S0c(e.ra(b,a.hJ.v))}},RadioItem:{a:q.Taa,g:function(a){this.gBa(e.za(a))}},SubMenu:{a:q.LDc,g:q.lmb},ShortCut:{a:function(){return e.ta(this.Asa,a.Z.v)},g:function(b){this.P1c(e.ra(b,a.Z.v))}},Tag:{a:q.n8a,g:function(a){this.gSa(e.K(a))}},
Tip:{a:q.mEc,g:function(a){this.R2c(e.ma(a))}},TipShow:{a:q.wLa,g:function(a){this.S2c(e.za(a))}},TipShowOfParent:{a:q.S8a,g:function(a){this.T2c(e.za(a))}},Enabled:{a:q.ke,g:function(a){this.Wf(e.za(a))}},Visible:{a:q.qb,g:function(a){this.Ib(e.za(a))}},DisplayPosition:{a:q.jg,g:function(a){this.Fe(e.K(a))}},Image:{a:q.Hc,g:q.$c}}})},{rp:["PRIM_TBLO","PRIM_PPNL","PRIM_IMAG","PRIM_SPBN"]});
