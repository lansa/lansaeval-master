window.LANSA.addSrc("video",function(e,c,a,b,p){var r,m;r={ALL:0,METADATA:1,NONE:2};m={auto:0,metadata:1,none:2};c.SMa=function(a){s.w.call(this);this.c1=this.as="";this.Uea=a};var s=c.u(c.SMa,c.td);s.W=function(){s.j.W.call(this)};s.mh=function(){return this.as};s.Sv=function(a){this.as=a};s.LX=function(){return this.c1==p?"":this.c1};s.NZ=function(a){this.c1=a};s.yq=function(){for(var a=0;a<this.Uea.lc();a++)this.Uea.Eq(a)===this&&this.Uea.Oq(a)};e.kb(c.SMa,"PRIM_VDEO","File",{Qa:{FileName:{a:s.mh,
g:function(a){this.Sv(e.na(a))}},FileExtension:{a:s.LX,g:function(a){this.NZ(e.na(a))}}},jc:{Delete:s.yq},Zf:{Tf:"FileExtension"}});c.Rdb=function(a){f.w.call(this);this.Dgc=a;this.Za=[]};var f=c.u(c.Rdb,c.td);f.lc=function(){return this.Za.length};f.Pd=function(a){return this.Eq(a)};f.Eq=function(a){if(0>a||a>=this.Za.length)throw e.mE(a,this.Za.length);return this.Za[a]};f.$g=function(a,b){var e=new c.SMa(this);e.Sv(a);e.NZ(b);this.Za.push(e);(e=this.Dgc.Oa())&&e.cr()};f.cva=function(){0==this.lc()&&
this.Za.push(new c.SMa(this));return this.Eq(0)};f.Fj=function(){this.Za=[];var a=this.Dgc.Oa();a&&a.cr()};f.Oq=function(a){if(null==this.Eq(a))throw e.mE(a,this.Za.length);this.Za.splice(a,1)};f.FSc=function(a){for(var b=!1,c=0;c<this.lc()&&!(b=this.Eq(c).mh()==a);c++);b&&this.Oq(c)};e.kb(c.Rdb,"PRIM_VDEO","Files",{Qa:{Item:{a:function(a){return this.Eq(e.L(a)-1)}}},jc:{Add:f.$g,RemoveAll:f.Fj,Remove:function(a){return this.Oq(e.L(a)-1)}},xp:{Jo:function(a){return this.Eq(e.L(a)-1)},Dv:function(){return this.lc()}},
Zf:{Tf:"Item"}});c.SZb=function(){h.w.call(this);this.E0=0;this.r0=this.L1=!0;this.jS=1;this.gw=new c.Rdb(this);this.Ch=-1;this.PR=this.Yfa=this.$fa=!1;this.jB=50};var h=c.u(c.SZb,c.As);h.Sg=function(){return c.k0b};h.W=function(){h.j.W.call(this)};h.mh=function(){return 0<this.gw.lc()?this.gw.Eq(0).mh():""};h.Sv=function(b){this.gw.Fj();var c=this.gw.cva();c.mh()!=b&&(c.Sv(b),(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.LX=function(){return 0<this.gw.lc()?this.gw.Eq(0).LX():""};h.NZ=function(b){var c=
this.gw.cva();c.LX()!=b&&(c.NZ(b),(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.Eyc=function(){return this.gw};h.S5a=function(){return this.E0};h.Vjb=function(b){this.E0!=b&&(this.E0=b,(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.A6a=function(){return this.PR};h.s7a=function(){return this.L1};h.plb=function(b){this.L1!=b&&(this.L1=b,(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.l5a=function(){return this.r0};h.yjb=function(b){this.r0!=b&&(this.r0=b,(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.i3=function(){return this.Ch};
h.B6a=function(){return this.$fa};h.z6a=function(){return this.Yfa};h.s8a=function(){return this.jB};h.OAa=function(c){c=b.Kg(c,0,100);this.jB!=c&&(this.jB=c,this.PR=0==this.jB,(c=this.Oa())&&c.cr(),this.m(a.f.i))};h.mBc=function(){return this.jS};h.flb=function(b){this.jS!=b&&(this.jS=b,(b=this.Oa())&&b.cr(),this.m(a.f.i))};h.Play=function(){this.Oa()&&this.Oa().Play()};h.Kh=function(){this.Oa()&&this.Oa().Kh()};h.Lgb=function(){this.OAa(0)};h.Wuc=function(){if(this.Oa()){var a=this.Oa().G;a.currentTime=
Math.min(a.duration,a.currentTime+5)}};h.Vuc=function(){if(this.Oa()){var a=this.Oa().G;0<a.currentTime&&(a.currentTime-=5)}};e.hd(c.SZb,"PRIM_VDEO",{Qa:{FileName:{a:h.mh,g:function(a){this.Sv(e.na(a))}},CycleToStart:{a:h.S5a,g:function(a){this.Vjb(e.za(a))}},ShowControls:{a:h.s7a,g:function(a){this.plb(e.za(a))}},Autoplay:{a:h.l5a,g:function(a){this.yjb(e.za(a))}},Preload:{a:function(){return e.ta(this.jS,r)},g:function(a){this.flb(e.qa(a,r))}},Duration:{a:h.i3},IsMuted:{a:h.A6a},IsPlaying:{a:h.B6a},
IsEnded:{a:h.z6a},Volume:{a:h.s8a,g:function(a){this.OAa(e.L(a))}}},jc:{Play:h.Play,Stop:h.Kh,Mute:h.Lgb,FrameForward:h.Wuc,FrameBackward:h.Vuc}});c.k0b=function(a){n.w.call(this,a)};var n=c.u(c.k0b,c.qm);n.df=function(b,c){this.G=document.createElement("video");this.UCa=b+this.fc;this.G.setAttribute("id",this.UCa);this.G.setAttribute("LANSAHandle",this.fc);this.G.style.position="absolute";this.G.style.overflow="hidden";this.G.style.whiteSpace="nowrap";this.cr();var e=this.G,f=this;e.addEventListener("loadedmetadata",
function(){f.pa.Ch=e.duration;f.pa.Ha(a.J.qSb)},!1);e.addEventListener("loadeddata",function(){f.pa.Ha(a.J.pSb)},!1);e.addEventListener("play",function(){f.pa.$fa=!0;f.pa.Yfa=!1;f.pa.Ha(a.J.l2b)},!1);e.addEventListener("pause",function(){f.pa.$fa=!1;f.pa.Ha(a.J.A8b)},!1);e.addEventListener("ended",function(){f.G.pause();f.G.paused=!0;f.pa.Yfa=!0;f.pa.Ha(a.J.gA)},!1);e.addEventListener("volumechange",function(){e.muted||0==e.volume?(f.G.muted=!0,f.pa.PR=!0,f.pa.jB=0,f.pa.Ha(a.J.k1b)):(f.pa.PR=!1,f.pa.jB=
Math.round(100*e.volume))},!1);return n.j.df.call(this,b,c)};n.cr=function(){this.una("controls",this.pa.L1);this.una("autoplay",this.pa.r0);this.una("loop",this.pa.E0);this.G.setAttribute("preload",e.ta(this.pa.jS,m));this.G.volume=0<this.pa.jB?this.pa.jB/100:0;this.G.muted=this.pa.PR;this.uqb()};n.uqb=function(){this.Eib();var a=this.pa.gw.lc();if(0!=a)for(var b=0;b<a;b++){var c=this.pa.gw.Eq(b);this.Chc(this.G,c.as,c.c1)}};n.Chc=function(a,b,c){var e=document.createElement("source");e.src=b;c&&
(e.type="video/"+c);a.appendChild(e)};n.Eib=function(){var a=document.getElementById(this.UCa);if(a&&(a=a.childNodes)){var b,c,e=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&e.push(b);for(c=0;c<e.length;c++)b=e[c],b.parentNode.removeChild(b)}};n.eM=function(){return!1};n.RNa=function(){};n.Play=function(){this.G.play!==p&&this.G.play()};n.Kh=function(){this.G.pause!==p&&this.G.pause()}});
