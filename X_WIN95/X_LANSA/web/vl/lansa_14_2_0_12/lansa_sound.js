window.LANSA.addSrc("sound",function(e,c,a,b,m){var p,l;p={ALL:0,METADATA:1,NONE:2};l={auto:0,metadata:1,none:2};c.CNa=function(a){s.w.call(this);this.x1=this.Es="";this.Efa=a};var s=c.u(c.CNa,c.wd);s.U=function(){s.j.U.call(this)};s.zh=function(){return this.Es};s.fw=function(a){this.Es=a};s.nY=function(){return this.x1==m?"":this.x1};s.l_=function(a){this.x1=a};s.fr=function(){for(var a=0;a<this.Efa.mc();a++)this.Efa.mr(a)===this&&this.Efa.zr(a)};e.jb(c.CNa,"PRIM_SOND","File",{Oa:{FileName:{a:s.zh,
g:function(a){this.fw(e.ma(a))}},FileExtension:{a:s.nY,g:function(a){this.l_(e.ma(a))}}},jc:{Delete:s.fr},lg:{hg:"FileExtension"}});c.ueb=function(a){g.w.call(this);this.bgc=a;this.ab=[]};var g=c.u(c.ueb,c.wd);g.mc=function(){return this.ab.length};g.Td=function(a){return this.mr(a)};g.mr=function(a){if(0>a||a>=this.ab.length)throw e.FE(a,this.ab.length);return this.ab[a]};g.oh=function(a,b){var e=new c.CNa(this);e.fw(a);e.l_(b);this.ab.push(e);(e=this.bgc.Pa())&&e.Jr()};g.Iva=function(){0==this.mc()&&
this.ab.push(new c.CNa(this));return this.mr(0)};g.bk=function(){this.ab=[];var a=this.bgc.Pa();a&&a.Jr()};g.zr=function(a){if(null==this.mr(a))throw e.FE(a,this.ab.length);this.ab.splice(a,1)};g.ITc=function(a){for(var b=!1,c=0;c<this.mc()&&!(b=this.mr(c).zh()==a);c++);b&&this.zr(c)};e.jb(c.ueb,"PRIM_SOND","Files",{Oa:{Item:{a:function(a){return this.mr(e.K(a)-1)}}},jc:{Add:g.oh,RemoveAll:g.bk,Remove:function(a){return this.zr(e.K(a)-1)}},fq:{Bp:function(a){return this.mr(e.K(a)-1)},Qv:function(){return this.mc()}},
lg:{hg:"Item"}});c.BZb=function(){q.w.call(this);this.Y0=0;this.L0=this.j2=!0;this.JS=1;this.tw=new c.ueb(this);this.Ph=-1;this.Hga=this.Jga=this.oS=!1;this.HB=50};var q=c.u(c.BZb,c.Vs);q.eh=function(){return c.P0b};q.U=function(){q.j.U.call(this)};q.zh=function(){return 0<this.tw.mc()?this.tw.mr(0).zh():""};q.fw=function(b){this.tw.bk();var c=this.tw.Iva();c.zh()!=b&&(c.fw(b),(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.nY=function(){return 0<this.tw.mc()?this.tw.mr(0).nY():""};q.l_=function(b){var c=
this.tw.Iva();c.nY()!=b&&(c.l_(b),(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.Azc=function(){return this.tw};q.F6a=function(){return this.Y0};q.Kkb=function(b){this.Y0!=b&&(this.Y0=b,(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.l7a=function(){return this.oS};q.b8a=function(){return this.j2};q.emb=function(b){this.j2!=b&&(this.j2=b,(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.Z5a=function(){return this.L0};q.okb=function(b){this.L0!=b&&(this.L0=b,(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.G3=function(){return this.Ph};
q.m7a=function(){return this.Jga};q.k7a=function(){return this.Hga};q.c9a=function(){return this.HB};q.xBa=function(c){c=b.Pg(c,0,100);this.HB!=c&&(this.HB=c,this.oS=0==this.HB,(c=this.Pa())&&c.Jr(),this.l(a.f.h))};q.nCc=function(){return this.JS};q.Wlb=function(b){this.JS!=b&&(this.JS=b,(b=this.Pa())&&b.Jr(),this.l(a.f.h))};q.Play=function(){this.Pa()&&this.Pa().Play()};q.Xh=function(){this.Pa()&&this.Pa().Xh()};q.zhb=function(){this.xBa(0)};e.kd(c.BZb,"PRIM_SOND",{Oa:{FileName:{a:q.zh,g:function(a){this.fw(e.ma(a))}},
CycleToStart:{a:q.F6a,g:function(a){this.Kkb(e.za(a))}},ShowControls:{a:q.b8a,g:function(a){this.emb(e.za(a))}},Autoplay:{a:q.Z5a,g:function(a){this.okb(e.za(a))}},Preload:{a:function(){return e.ta(this.JS,p)},g:function(a){this.Wlb(e.ra(a,p))}},Duration:{a:q.G3},IsMuted:{a:q.l7a},IsPlaying:{a:q.m7a},IsEnded:{a:q.k7a},Volume:{a:q.c9a,g:function(a){this.xBa(e.K(a))}}},jc:{Play:q.Play,Stop:q.Xh,Mute:q.zhb}});c.P0b=function(a){f.w.call(this,a)};var f=c.u(c.P0b,c.kn);f.lf=function(b,c){this.J=document.createElement("audio");
this.CDa=b+this.gc;this.J.setAttribute("id",this.CDa);this.J.setAttribute("LANSAHandle",this.gc);this.J.style.position="absolute";this.J.style.overflow="hidden";this.J.style.whiteSpace="nowrap";this.Jr();var e=this.J,g=this;e.addEventListener("loadedmetadata",function(){g.pa.Ph=e.duration;g.pa.Ga(a.G.bTb)},!1);e.addEventListener("loadeddata",function(){g.pa.Ga(a.G.aTb)},!1);e.addEventListener("play",function(){g.pa.Jga=!0;g.pa.Hga=!1;g.pa.Ga(a.G.Y2b)},!1);e.addEventListener("pause",function(){g.pa.Jga=
!1;g.pa.Ga(a.G.o9b)},!1);e.addEventListener("ended",function(){g.J.pause();g.J.paused=!0;g.pa.Hga=!0;g.pa.Ga(a.G.Tx)},!1);e.addEventListener("volumechange",function(){e.muted||0==e.volume?(g.J.muted=!0,g.pa.oS=!0,g.pa.HB=0,g.pa.Ga(a.G.X1b)):(g.pa.oS=!1,g.pa.HB=Math.round(100*e.volume))},!1);return f.j.lf.call(this,b,c)};f.Jr=function(){this.boa("controls",this.pa.j2);this.boa("autoplay",this.pa.L0);this.boa("loop",this.pa.Y0);this.J.setAttribute("preload",e.ta(this.pa.JS,l));this.J.volume=0<this.pa.HB?
this.pa.HB/100:0;this.J.muted=this.pa.oS;this.mrb()};f.mrb=function(){this.ujb();var a=this.pa.tw.mc();if(0!=a)for(var b=0;b<a;b++){var c=this.pa.tw.mr(b);this.kic(this.J,c.Es,c.x1)}};f.kic=function(a,b,c){var e=document.createElement("source");e.src=b;c&&(e.type="audio/"+c);a.appendChild(e)};f.ujb=function(){var a=document.getElementById(this.CDa);if(a&&(a=a.childNodes)){var b,c,e=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&e.push(b);for(c=0;c<e.length;c++)b=e[c],b.parentNode.removeChild(b)}};
f.zM=function(){return!1};f.IOa=function(){};f.Play=function(){this.J.play!==m&&this.J.play()};f.Xh=function(){this.J.pause!==m&&this.J.pause()}});