window.LANSA.addSrc("web",function(e,c,a,b,m){e.Gb("PRIM_LABL");var p=null,l=null;a.sJ={$jb:0,M5b:1,N5b:2,L5b:3};a.sJ.v={INLINE:a.sJ.$jb,LEFT:a.sJ.M5b,RIGHT:a.sJ.N5b,CENTER:a.sJ.L5b};a.wE={$Ia:0,fHb:1,jHb:2,kHb:3,mHb:4,H4a:5};a.wE.v={NONE:a.wE.$Ia,NOTLOADED:a.wE.fHb,PERMISSIONDENIED:a.wE.jHb,POSITIONUNAVAILABLE:a.wE.kHb,TIMEOUT:a.wE.mHb,UNKNOWNERROR:a.wE.H4a};a.tT={Yzb:0,Wzb:1,Zzb:2,Xzb:4};a.tT.v={NONE:a.tT.Yzb,ERROR:a.tT.Wzb,WARNING:a.tT.Zzb,INFORMATION:a.tT.Xzb};c.Zfb=function(){s.w.call(this);
this.ab=[]};var s=c.u(c.Zfb,c.wd);s.U=function(){s.j.U.call(this)};s.mc=function(){return this.ab.length};s.Td=function(a){return this.ab[a-1]};s.oG=function(a){for(var c=null,d=0;d<this.ab.length;d++){var e=this.ab[d];if(b.BC(e.Mm,a)){c=e;break}}return c};e.jb(c.Zfb,"PRIM_WEB","URLParameters",{Oa:{Item:{a:function(a){return this.oG(e.ma(a))},Ew:"na"},ItemCount:{a:s.mc}},lg:{hg:"Item"},gq:{Bp:function(a){return this.Td(e.K(a))},Qv:s.mc}});c.Yfb=function(){g.w.call(this);this.bb=this.Mm=""};var g=
c.u(c.Yfb,c.wd);g.qh=function(){return this.Mm.toUpperCase()};g.Ja=function(){return this.bb};e.jb(c.Yfb,"PRIM_WEB","URLParameter",{Oa:{Name:{a:g.qh},Value:{a:g.Ja}}});c.Wfb=function(){q.w.call(this);try{var a,b=(new Date).toString();localStorage.setItem(b,b);a=localStorage.getItem(b)==b;localStorage.removeItem(b);a&&(p=localStorage)}catch(c){}this.Xq=null};var q=c.u(c.Wfb,c.wd);q.U=function(){q.j.U.call(this)};q.$5a=function(){return null!=p};q.mc=function(){return this.VP().length};q.Td=function(a){return this.VP()[a-
1]};q.oG=function(a){for(var b=null,c=this.VP(),d=0;d<c.length;d++){var e=c[d];if(e.Mm==a){b=e;break}}return b};q.VP=function(){if(null==this.Xq&&(this.Xq=[],p))for(var a=0;a<p.length;a++){var b=p.key(a);""!=b&&p[b]!=m&&this.Xq.push(new c.qOa(b))}return this.Xq};q.nAa=function(){this.Xq=null};q.oh=function(a,b){var d=this.VP(),e=this.oG(a);null==e&&(e=new c.qOa(a),d.push(e));e.Wa(b)||d.splice(d.indexOf(e),1)};q.Zs=function(c){var d=this.VP(),e=this.oG(c);null!=e&&(p.removeItem(c),d.splice(d.indexOf(e),
1),b.Dp().E$(a.VE.Aoa))};q.op=function(){p&&(p.clear(),this.nAa(),b.Dp().E$(a.VE.Aoa))};e.jb(c.Wfb,"PRIM_WEB","LocalStorage",{Oa:{Available:{a:q.$5a},Item:{a:function(a){return this.oG(e.ma(a))},Ew:"na"},ItemCount:{a:q.mc}},jc:{Add:q.oh,Remove:q.Zs,Clear:q.op},lg:{hg:"Item"},gq:{Bp:function(a){return this.Td(e.K(a))},Qv:q.mc}});c.qOa=function(a){f.w.call(this);this.Mm=a};var f=c.u(c.qOa,c.wd);f.qh=function(){return this.Mm};f.Ja=function(){var a="";p&&(a=p[this.Mm],a===m&&(a=""));return a};f.Wa=function(c){var d=
!0;try{p[this.Mm]=c,b.Dp().E$(a.VE.Aoa)}catch(e){b.Dp().PIb(a.VE.Aoa),d=!1}return d};e.jb(c.qOa,"PRIM_WEB","LocalStorageItem",{Oa:{Name:{a:f.qh},Value:{a:f.Ja,g:function(a){this.Wa(e.ma(a))}}},lg:{hg:"Value"}});c.Xfb=function(){k.w.call(this);try{var a,b=(new Date).toString();sessionStorage.setItem(b,b);a=sessionStorage.getItem(b)==b;sessionStorage.removeItem(b);a&&(l=sessionStorage)}catch(c){}this.Xq=null};var k=c.u(c.Xfb,c.wd);k.U=function(){k.j.U.call(this)};k.$5a=function(){return null!=l};k.mc=
function(){return this.VP().length};k.Td=function(a){return this.VP()[a-1]};k.oG=function(a){for(var b=null,c=this.VP(),d=0;d<c.length;d++){var e=c[d];if(e.Mm==a){b=e;break}}return b};k.VP=function(){if(null==this.Xq&&(this.Xq=[],l))for(var a=0;a<l.length;a++){var b=l.key(a);""!=b&&l[b]!=m&&this.Xq.push(new c.rOa(b))}return this.Xq};k.nAa=function(){this.Xq=null};k.oh=function(a,b){var d=this.VP(),e=this.oG(a);null==e&&(e=new c.rOa(a),d.push(e));e.Wa(b)||d.splice(d.indexOf(e),1)};k.Zs=function(c){var d=
this.VP(),e=this.oG(c);null!=e&&(l.removeItem(c),d.splice(d.indexOf(e),1),b.Dp().E$(a.VE.Boa))};k.op=function(){l&&(l.clear(),this.nAa(),b.Dp().E$(a.VE.Boa))};e.jb(c.Xfb,"PRIM_WEB","SessionStorage",{Oa:{Available:{a:k.$5a},Item:{a:function(a){return this.oG(e.ma(a))},Ew:"na"},ItemCount:{a:k.mc}},jc:{Add:k.oh,Remove:k.Zs,Clear:k.op},lg:{hg:"Item"},gq:{Bp:function(a){return this.Td(e.K(a))},Qv:k.mc}});c.rOa=function(a){d.w.call(this);this.Mm=a};var d=c.u(c.rOa,c.wd);d.qh=function(){return this.Mm};
d.Ja=function(){var a="";l&&(a=l[this.Mm],a===m&&(a=""));return a};d.Wa=function(c){var d=!0;try{l[this.Mm]=c,b.Dp().E$(a.VE.Boa)}catch(e){b.Dp().PIb(a.VE.Boa),d=!1}return d};e.jb(c.rOa,"PRIM_WEB","SessionStorageItem",{Oa:{Name:{a:d.qh},Value:{a:d.Ja,g:function(a){this.Wa(e.ma(a))}}},lg:{hg:"Value"}});c.Vfb=function(){h.w.call(this)};var h=c.u(c.Vfb,c.wd);h.U=function(){h.j.U.call(this)};h.UEc=function(a){0<a&&window.history.go(0-a)};h.VEc=function(a){0<a&&window.history.go(a)};h.oh=function(a,c){var d=
window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.pushState(null,"",d);b.Dp().Kjb();c&&b.Dp().tJa()};h.hUc=function(a,c){var d=window.location.protocol+"//"+window.location.host+window.location.pathname;0<a.length&&(d+="?"+a);window.history.replaceState(null,"",d);b.Dp().Kjb();c&&b.Dp().tJa()};e.jb(c.Vfb,"PRIM_WEB","History",{jc:{Add:function(a,b){this.oh(e.ma(a),b===m?!0:e.za(b))},Replace:function(a,b){this.hUc(e.ma(a),b===m?!0:e.za(b))},
GoBack:function(a){this.UEc(a===m?1:e.K(a))},GoForward:function(a){this.VEc(a===m?1:e.K(a))}}});c.F_b=function(){w.w.call(this);this.nd=b.zd(0,0,400,400);this.aEa=this.af="";this.ug&=~a.Xg.vQ;this.ug&=~a.Xg.iZ};var w=c.u(c.F_b,c.jn);w.eh=function(){return c.X_b};w.sG=function(){return this.af};w.Ql=function(b){this.af!=b&&(this.af=b,this.ca(a.f.h))};w.aU=function(){return this.aEa};w.Nkb=function(a){this.aEa=a};w.Md=function(a,c,d){w.j.Md.call(this,a,c,d);a=this.Pa().ib();b.Pd[a].Ql(this.af)};w.ovc=
function(){this.Ga(a.G.$Sb)};e.jb(c.F_b,"PRIM_WEB","Page",{Oa:{Source:{a:w.sG,g:function(a){this.Ql(e.ma(a))}},Description:{a:w.aU,g:function(a){this.Nkb(e.ma(a))}}}});c.Ema=function(){D.w.call(this)};var D=c.u(c.Ema,c.jn);D.W7a=function(){for(var a=null,b=this;b;){if(b instanceof c.$fb){a=b;break}b=b.Rb}return a};D.Rca=function(){D.j.Rca.call(this);var a=this.W7a();a&&a.bY(this)};D.SZ=function(){D.j.SZ.call(this);var a=this.W7a();a&&a.cY(this)};D.Bf=function(a){D.j.Bf.call(this,a);var b=this.W7a();
b==this&&b.EA(a,!1)};e.jb(c.Ema,"PRIM_WEB","RichTextItem",{});c.dgb=function(){r.w.call(this)};var r=c.u(c.dgb,c.Ema);r.eh=function(){return c.M0b};e.jb(c.dgb,"PRIM_WEB","RichTextLine",{});c.agb=function(){J.w.call(this)};var J=c.u(c.agb,c.Ema);J.eh=function(){return c.K0b};e.jb(c.agb,"PRIM_WEB","RichTextBreak",{});c.bgb=function(){B.w.call(this);this.fX=null;this.HFa=a.sJ.$jb;this.bZa=this.cZa=0};var B=c.u(c.bgb,c.Ema);B.U=function(){B.j.U.call(this);this.SRa(null)};B.eh=function(){return c.L0b};
B.PCc=function(){return this.fX};B.SRa=function(b){this.fX!=b&&(null!=this.fX&&(this.fX.Da(this,this.zEb),this.fX.xb()),this.fX=b,null!=this.fX&&(this.fX.Ca(),this.fX.Ea(this,this.zEb)),this.ca(a.f.h))};B.Bvd=function(){return this.HFa};B.a8b=function(b){this.HFa!=b&&(this.HFa=b,this.ca(a.f.h))};B.QCc=function(){return this.cZa};B.c8b=function(b){this.cZa!=b&&(this.cZa=b,this.ca(a.f.h))};B.OCc=function(){return this.bZa};B.b8b=function(b){this.bZa!=b&&(this.bZa=b,this.ca(a.f.h))};B.Md=function(a,
c,d){B.j.Md.call(this,a,c,d);a=this.Pa().ib();b.Pd[a].Ug(this.HFa,this.cZa,this.bZa)};B.vjb=function(){var a=this.fX,c=this.Pa().ib(),a=a?a.zh():"";b.Pd[c].$c(a)};B.zEb=function(b,c){switch(c.Ya){case a.f.sb:case a.f.Ob:this.SRa(null);break;case a.f.h:this.ca(a.f.h)}};e.jb(c.bgb,"PRIM_WEB","RichTextImage",{Oa:{Image:{a:B.PCc,g:function(a){this.SRa(a)}},Width:{a:B.QCc,g:function(a){this.c8b(e.K(a))}},Height:{a:B.OCc,g:function(a){this.b8b(e.K(a))}},Alignment:{a:function(){return e.ta(this.HFa,a.sJ.v)},
g:function(b){this.a8b(e.ra(b,a.sJ.v))}}}});c.sOa=function(){K.w.call(this);this.Ry=null};var K=c.u(c.sOa,c.Ema);K.eh=function(){return c.N0b};K.uz=function(){null==this.Ry&&(this.Ry=new c.cgb(this));return this.Ry};e.jb(c.sOa,"PRIM_WEB","RichTextParagraph",{Oa:{Items:{a:K.uz}}});c.$fb=function(){P.w.call(this);this.nd=b.zd(0,0,100,100)};var P=c.u(c.$fb,c.sOa);P.eh=function(){return c.J0b};P.bY=function(b){if(!this.gd()){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.ZI,c);c.sc()}};P.cY=function(b){if(!this.gd()){var c=
e.Tb();c.Zb("ITEM",b);this.Ga(a.G.aJ,c);c.sc()}};P.u3=function(b){if(!this.gd()){var c=e.Tb();c.Zb("ITEM",b);this.Ga(a.G.$I,c);c.sc()}};P.EA=function(b,c){if(!c&&!this.gd()){var d=e.Tb();d.Zb("ITEM",b);d.rf("CONTINUE",!0);this.Ga(a.G.YI,d);c=!d.og("CONTINUE");d.sc()}return c};e.jb(c.$fb,"PRIM_WEB","RichText",{});c.cgb=function(a){x.w.call(this);this.ab=[];this.pA=a};var x=c.u(c.cgb,c.wd);x.U=function(){x.j.U.call(this)};x.mc=function(){return this.ab.length};x.Td=function(a){return this.ab[a-1]};
x.oh=function(b,d,e,f){var h=new c.dgb;h.Ca();h.Ab(b);d!=m&&h.tb(d);e!=m&&h.on(e);f!=m&&h.Vo(f);h.Na(this.pA);this.ab[this.ab.length]=h;this.pA.ca(a.f.h);this.pA.Pb()&&this.pA.gh();return h};x.Uhc=function(){var b=new c.agb;b.Ca();b.Na(this.pA);this.ab[this.ab.length]=b;this.pA.ca(a.f.h);this.pA.Pb()&&this.pA.gh();return b};x.bic=function(b,d,e,f,h,k,g){var l=new c.bgb;l.Ca();l.SRa(b);d!=m&&l.a8b(d);e!=m&&l.c8b(e);f!=m&&l.b8b(f);h!=m&&l.tb(h);k!=m&&l.on(k);g!=m&&l.Vo(g);l.Na(this.pA);this.ab[this.ab.length]=
l;this.pA.ca(a.f.h);this.pA.Pb()&&this.pA.gh();return l};x.gic=function(b,d,e,f){var h=new c.sOa;h.Ca();b!=m&&h.Ab(b);d!=m&&h.tb(d);e!=m&&h.on(e);f!=m&&h.Vo(f);h.Na(this.pA);this.ab[this.ab.length]=h;this.pA.ca(a.f.h);this.pA.Pb()&&this.pA.gh();return h};x.Zs=function(b){this.ab.splice(this.ab.indexOf(b),1);b.Na(null);b.xb();this.pA.ca(a.f.h)};x.bk=function(){for(;0<this.ab.length;)this.Zs(this.ab[0]);this.pA.ca(a.f.h)};e.jb(c.cgb,"PRIM_WEB","RichTextItems",{Oa:{Item:{a:function(a){return this.Td(e.K(a))},
Ew:"na"},ItemCount:{a:x.mc}},jc:{Add:x.oh,AddBreak:x.Uhc,AddImage:function(b,c,d,f,h,k,g){return this.bic(b,e.ra(c,a.sJ.v),d,f,h,k,g)},AddParagraph:x.gic,Remove:x.Zs,RemoveAll:x.bk},lg:{hg:"Item"},gq:{Bp:function(a){return this.Td(e.K(a))},Qv:x.mc}});c.H_b=function(){z.w.call(this);this.nd=b.zd(0,0,100,100)};var z=c.u(c.H_b,c.jn);z.eh=function(){return c.o0b};z.Md=function(a,b,c){z.j.Md.call(this,a,b,c)};z.zg=function(a){this.oJ();a&&this.Pza();b.cb().NB(this)};z.GC=function(){this.ea.xX()};e.jb(c.H_b,
"PRIM_WEB","Camera",{});c.S_b=function(){L.w.call(this);this.nd=b.zd(0,0,100,100);this.gF=null;this.vHa("")};var L=c.u(c.S_b,c.jn);L.U=function(){this.gF=null;L.j.U.call(this)};L.eh=function(){return c.O0b};L.ova=function(){this.Pa()&&this.vHa(this.Pa().Dwc());return this.gF};L.vHa=function(a){this.gF=new c.GG({data:a,mimetype:"image/png",filename:"signature.png"})};L.op=function(){if(this.Pa()){var a=this.Pa().ib();b.Pd[a].op();this.kc()}};L.Md=function(a,b,c){L.j.Md.call(this,a,b,c)};L.zg=function(a){this.oJ();
a&&this.Pza();b.cb().NB(this)};L.GC=function(){this.ea.xX()};L.kc=function(){this.Ga(a.G.ah)};e.jb(c.S_b,"PRIM_WEB","Signature",{Oa:{Blob:{a:L.ova}},jc:{Clear:L.op}});c.N_b=function(){I.w.call(this);this.Owb=this.avb=this.wsb=this.vsb=this.rsb=this.iYa=this.Nvb=0;this.Z7=a.wE.fHb};var I=c.u(c.N_b,c.wd);I.mBc=function(){return this.Nvb};I.yAc=function(){return this.iYa};I.Zvc=function(){return this.rsb};I.jwc=function(){return this.vsb};I.kwc=function(){return this.wsb};I.Rzc=function(){return this.avb};
I.sDc=function(){return this.Owb};I.bsd=function(){return this.Z7};I.qTc=function(){var b=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(d){b.Nvb=d.coords.longitude;b.iYa=d.coords.latitude;b.rsb=d.coords.accuracy;b.vsb=d.coords.altitude?d.coords.altitude:0;b.wsb=d.coords.altitudeAccuracy?d.coords.altitudeAccuracy:0;b.avb=d.coords.heading?d.coords.heading:0;b.Owb=d.coords.speed?d.coords.speed:0;b.Z7=a.wE.$Ia;d=new c.dma;b.Ga(a.G.G4b,d)},function(d){b.Nvb=0;b.iYa=0;b.rsb=
0;b.vsb=0;b.wsb=0;b.avb=0;b.Owb=0;b.Z7=a.wE.H4a;switch(d.code){case d.PERMISSION_DENIED:b.Z7=a.wE.jHb;break;case d.POSITION_UNAVAILABLE:b.Z7=a.wE.kHb;break;case d.TIMEOUT:b.Z7=a.wE.mHb;break;case d.UNKNOWN_ERROR:b.Z7=a.wE.H4a}d=new c.dma;b.Ga(a.G.G4b,d)});return this.iYa};e.jb(c.N_b,"PRIM_WEB","Geolocation",{Oa:{Longitude:{a:I.mBc},Latitude:{a:I.yAc},Accuracy:{a:I.Zvc},Altitude:{a:I.jwc},AltitudeAccuracy:{a:I.kwc},Heading:{a:I.Rzc},Speed:{a:I.sDc},ErrorCode:{a:function(){return e.ta(this.Z7,a.wE.v)}}},
jc:{Refresh:I.qTc}});c.J_b=function(){y.w.call(this)};var y=c.u(c.J_b,c.wd);y.BNc=function(b,c){if("undefined"!==typeof console)switch(c){case a.tT.Wzb:console.error(b);break;case a.tT.Zzb:console.warn(b);break;case a.tT.Xzb:console.info(b);break;default:console.log(b)}};e.jb(c.J_b,"PRIM_WEB","Console",{Oa:{},jc:{Log:function(b,c){return this.BNc(e.ma(b),c?e.ra(c,a.tT.v):a.tT.Yzb)}}});c.M_b=function(){A.w.call(this);this.Xb=this.gb=null;this.IN=this.Es="";this.Uvb=!1};var A=c.u(c.M_b,c.Ws);A.U=function(){A.j.U.call(this);
this.mo(null)};A.eh=function(){return c.w0b};A.zh=function(){return this.Es};A.lKb=function(){return this.IN};A.Bg=function(b){this.gb!=b&&(this.mo(b),this.l(a.f.h))};A.hb=function(){var a=null;return a=this.gb};A.cc=function(){return this.Xb};A.A7a=function(){return this.Uvb};A.N7b=function(b){this.Uvb!=b&&(this.Uvb=b,this.ca(a.f.h))};A.kc=function(){this.Ga(a.G.ah)};A.w5a=function(b,c){var d=e.Tb();d.Zb("FILE",b);d.Zb("FILES",c);this.Ga(a.G.uIb,d);d.sc()};A.VK=function(){this.VR=b.xma(this.Xb.Wj());
this.gb.JT(this.cc())};A.mo=function(a){var c=null;a&&(c=a.Px(),this.gb==a?c.yn(this.Xb):a.kz(c));this.gb&&(this.gb.Da(this),this.Xb.Da(this),b.la(this.Xb),this.Xb=null);if(this.gb=a)this.gb.Ea(this,this.Wn),this.Xb=c,this.Xb.Ea(this,this.Hv);this.hh()};A.XOd=function(){};A.Wn=function(b,c){c.Ya==a.f.h?c.Wr==a.we.Xw?this.gb.kz(this.cc()):this.mo(this.gb):c.Ya==a.f.sb&&this.Bg(null)};A.Hv=function(b,c){c.Ya==a.f.h&&c.Wr==a.we.Xw&&this.VK()};e.jb(c.M_b,"PRIM_WEB","FilePicker",{Oa:{MultiSelect:{a:A.A7a,
g:function(a){this.N7b(e.za(a))}}}});c.Tfb=function(a){E.w.call(this);this.dYa=a;this.WW=this.gF=null};var E=c.u(c.Tfb,c.wd);E.U=function(){null!=this.gF&&(this.gF=null);null!=this.WW&&(b.HBb(this.WW),this.WW=null);E.j.U.call(this)};E.qh=function(){return this.dYa.name};E.ova=function(){null==this.gF&&(this.gF=new c.GWb(this.dYa));return this.gF};E.g8a=function(){return this.dYa.size};E.JBc=function(){return this.dYa.type};e.jb(c.Tfb,"PRIM_WEB","File",{Oa:{Name:{a:E.qh},Blob:{a:E.ova},FileSize:{a:E.g8a},
MimeType:{a:E.JBc}}});c.Ufb=function(){fa.w.call(this);this.ab=[]};var fa=c.u(c.Ufb,c.wd);fa.U=function(){for(var a=0;a<this.ab.length;a++)this.ab[a].xb();this.ab=[];fa.j.U.call(this)};fa.mc=function(){return this.ab.length};fa.Td=function(a){return this.ab[a-1]};fa.ls=function(a){this.ab.push(a);a.Ca()};e.jb(c.Ufb,"PRIM_WEB","Files",{Oa:{Item:{a:function(a){return this.Td(e.K(a))},Ew:"na"},ItemCount:{a:fa.mc}},lg:{hg:"Item"},gq:{Bp:function(a){return this.Td(e.K(a))},Qv:fa.mc}});c.I_b=function(){ka.w.call(this)};
var ka=c.u(c.I_b,c.wd);ka.jjb=function(a){var d=this;if(window.FileReader&&a instanceof c.GG){if(a=a.gka()){var e=b.oR(),f=new FileReader;f.onload=function(a){d.YX(a.target.result);b.yy(e)};f.readAsText(a)}}else d.YX("")};ka.YX=function(b){var c=e.Tb();c.$H("DATA",b);this.Ga(a.G.Q2,c)};e.jb(c.I_b,"PRIM_WEB","ClobReader",{jc:{Read:ka.jjb}});c.G_b=function(){ca.w.call(this)};var ca=c.u(c.G_b,c.wd);ca.jjb=function(a){var d=this;if(window.FileReader&&a instanceof c.GG){if(a=a.gka()){var e=b.oR(),f=new FileReader;
f.onload=function(a){d.YX(b.dIb(a.target.result));b.yy(e)};f.readAsDataURL(a)}}else d.YX("","")};ca.YX=function(b){var c=e.Tb();c.$H("DATA",b);this.Ga(a.G.Q2,c)};e.jb(c.G_b,"PRIM_WEB","BlobReader",{jc:{Read:ca.jjb}});c.J0b=function(a){X.w.call(this,a)};var X=c.u(c.J0b,c.kn);X.Ab=function(a){this.J.textContent=a};X.hz=function(){X.j.hz.call(this);this.J.style.whiteSpace="normal";this.J.style.overflowX="auto";this.J.style.overflowY="auto"};X.lf=function(a,b){this.J=document.createElement("div");this.J.setAttribute("id",
a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);return X.j.lf.call(this,a,b)};c.N0b=function(a){Q.w.call(this,a)};var Q=c.u(c.N0b,c.kn);Q.Ab=function(a){this.J.textContent=a};Q.Zwa=function(){return!1};Q.ffa=function(){};Q.hz=function(){};Q.lf=function(a,b){this.J=document.createElement("p");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);return Q.j.lf.call(this,a,b)};c.K0b=function(a){F.w.call(this,a)};var F=c.u(c.K0b,c.kn);F.Zwa=function(){return!1};F.ffa=function(){};
F.hz=function(){};F.lf=function(a,b){this.J=document.createElement("br");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);return F.j.lf.call(this,a,b)};c.L0b=function(a){v.w.call(this,a)};var v=c.u(c.L0b,c.kn);v.$c=function(a){this.J.src=a};v.Zwa=function(){return!1};v.Ug=function(b,c,d){this.J.style.width=0==c?"auto":c+"px";this.J.style.height=0==d?"auto":d+"px";switch(b){case a.sJ.$jb:this.J.style.marginLeft="initial";this.J.style.marginRight="initial";this.J.style.display=
"inline";this.J.style.cssFloat="none";break;case a.sJ.M5b:this.J.style.marginLeft="initial";this.J.style.marginRight="initial";this.J.style.display="inline";this.J.style.cssFloat="left";break;case a.sJ.N5b:this.J.style.marginLeft="initial";this.J.style.marginRight="initial";this.J.style.display="inline";this.J.style.cssFloat="right";break;case a.sJ.L5b:this.J.style.marginLeft="auto",this.J.style.marginRight="auto",this.J.style.display="block",this.J.style.cssFloat="none"}};v.ffa=function(){};v.hz=
function(){this.J.style.borderStyle="solid"};v.lf=function(a,b){this.J=document.createElement("img");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);return v.j.lf.call(this,a,b)};c.M0b=function(a){ea.w.call(this,a)};var ea=c.u(c.M0b,c.kn);ea.Ab=function(a){this.J.textContent=a};ea.Zwa=function(){return!1};ea.ffa=function(){};ea.hz=function(){};ea.lf=function(a,b){this.J=document.createElement("span");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",
this.gc);return ea.j.lf.call(this,a,b)};c.o0b=function(a){aa.w.call(this,a)};var aa=c.u(c.o0b,c.kn);aa.lf=function(a,b){this.J=document.createElement("div");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);return aa.j.lf.call(this,a,b)};c.O0b=function(a){ga.w.call(this,a);this.BH=this.sn=null;this.bfc=this.Yxb=!1;this.ivb=null};var ga=c.u(c.O0b,c.kn);ga.lf=function(a,b){this.J=document.createElement("div");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",
this.gc);this.J.style.msTouchAction="none";this.BH=document.createElement("canvas");this.BH.style.touchAction="none";this.J.appendChild(this.BH);this.sn=this.BH.getContext("2d");this.EBb();return ga.j.lf.call(this,a,b)};ga.io=function(a,b,c,d){ga.j.io.call(this,a,b,c,d);a=this.sn.getImageData(0,0,this.BH.width-1,this.BH.height-1);this.BH.width=this.Vc;this.BH.height=this.ad;this.sn.putImageData(a,0,0)};ga.zM=function(a){this.d9b(a);return!0};ga.ghb=function(a){this.c9b(a);return!0};ga.HOa=function(a){this.b9b(a);
return!0};ga.Ypa=function(a){this.d9b(a);return!0};ga.kw=function(a){this.c9b(a);return!0};ga.$ea=function(a){this.b9b(a);return!0};ga.$Ob=function(a){this.J.onpointerdown===m&&a.touches!==m?(a.jsb=a.touches[0].pageX-this.pa.gs(),a.ksb=a.touches[0].pageY-this.pa.hs()):(a.jsb=a.clientX-this.pa.gs(),a.ksb=a.clientY-this.pa.hs());this.pa.kc()};ga.EBb=function(){this.T0a(!0);this.ivb=new Image;this.ivb.onload=function(){throw 0;};this.ivb.src=null};ga.T0a=function(a){(this.bfc||a)&&this.sn.clearRect(0,
0,this.sn.canvas.width,this.sn.canvas.height);this.bfc=!1};ga.Dwc=function(){var a=this.BH.toDataURL("image/png");return b.dIb(a)};ga.op=function(){this.EBb()};ga.d9b=function(a){a.preventDefault();this.T0a(!1);this.sn.beginPath();this.$Ob(a);this.sn.moveTo(a.jsb,a.ksb);this.Yxb=!0};ga.b9b=function(a){a.preventDefault();this.Yxb=!1};ga.SMd=function(a){this.kw(a)};ga.c9b=function(a){this.Yxb&&(a.preventDefault(),this.T0a(!1),this.sn.strokeStyle="rgb(0,0,0)",this.sn.lineWidth=1,this.$Ob(a),this.sn.lineTo(a.jsb,
a.ksb),this.sn.stroke())};c.X_b=function(a){oa.w.call(this,a);this.jta=this.eb=null};var oa=c.u(c.X_b,c.kn);oa.Ql=function(a){this.jta.src=a};oa.lf=function(a,b){this.J=document.createElement("div");this.J.setAttribute("id",a+this.gc);this.J.setAttribute("LANSAHandle",this.gc);this.jta=document.createElement("iframe");this.B2(this.jta);this.jta.style.width="100%";this.jta.style.height="100%";this.J.appendChild(this.jta);return oa.j.lf.call(this,a,b)};oa.EX=function(){var a=this;oa.j.EX.call(this);
a.J.addEventListener("load",function(){a.pa.ovc()},!1)};oa.B2=function(a){oa.j.B2.call(this,a);this.J.style.overflowX="auto";this.J.style.overflowY="auto"};c.w0b=function(a){Z.w.call(this,a);this.bS=null};var Z=c.u(c.w0b,c.ngb);Z.lf=function(a,b){var c=Z.j.lf.call(this,a,b);this.bS=document.createElement("input");this.bS.type="File";var d=this.bS.style;this.mb.style.zIndex=1;d.opacity=0;d.position="absolute";d.zIndex=99998;d.background="rgb( 255, 0, 0 )";c.appendChild(this.bS);return c};Z.Md=function(){Z.j.Md.call(this);
this.Vbd()};Z.io=function(a,b,c,d){Z.j.io.call(this,a,b,c,d);this.bS.style.left="0px";this.bS.style.top="0px";this.bS.style.width=c+"px";this.bS.style.height=d+"px"};Z.EX=function(){var a=this;this.H2();a.bS.addEventListener("change",function(b){a.Flc(b);a.bS.value=""},!1)};Z.Vbd=function(){this.bS.multiple=this.pa.A7a()};Z.Flc=function(a){a=a.target.files||a.dataTransfer.files;for(var b=null,d=new c.Ufb,e=0,f;f=a[e];e++)f=new c.Tfb(f),null==b&&(b=f),d.ls(f);b&&this.pa.w5a(b,d)}},{rp:["PRIM_LABL"]});
