window.LANSA.addSrc("sound",function(d,c,a,b,p){var t,l;t={ALL:0,METADATA:1,NONE:2};l={auto:0,metadata:1,none:2};c.N0a=function(a){q.J.call(this);this.a$=this.rr="";this.gpa=a};var q=c.q(c.N0a,c.Ad);q.Q=function(){q.j.Q.call(this)};q.Jg=function(){return this.rr};q.Ru=function(a){this.rr=a};q.d5=function(){return this.a$==p?"":this.a$};q.s7=function(a){this.a$=a};q.Os=function(){for(var a=0;a<this.gpa.Jc();a++)this.gpa.Pt(a)===this&&this.gpa.vs(a)};d.Ra(c.N0a,"PRIM_SOND","File",{za:{FileName:{a:q.Jg,
f:function(a){this.Ru(d.ja(a))}},FileExtension:{a:q.d5,f:function(a){this.s7(d.ja(a))}}},hc:{Delete:q.Os},cf:{af:"FileExtension"}});c.svb=function(a){s.J.call(this);this.QBc=a;this.mb=[]};var s=c.q(c.svb,c.Ad);s.Jc=function(){return this.mb.length};s.se=function(a){return this.Pt(a)};s.Pt=function(a){if(0>a||a>=this.mb.length)throw d.fD(a,this.mb.length);return this.mb[a]};s.ri=function(a,b){var d=new c.N0a(this);d.Ru(a);d.s7(b);this.mb.push(d);(d=this.QBc.Sa())&&d.ku()};s.ZHa=function(){0==this.Jc()&&
this.mb.push(new c.N0a(this));return this.Pt(0)};s.Il=function(){this.mb=[];var a=this.QBc.Sa();a&&a.ku()};s.vs=function(a){if(null==this.Pt(a))throw d.fD(a,this.mb.length);this.mb.splice(a,1)};s.Fid=function(a){for(var b=!1,c=0;c<this.Jc()&&!(b=this.Pt(c).Jg()==a);c++);b&&this.vs(c)};d.Ra(c.svb,"PRIM_SOND","Files",{za:{Item:{a:function(a){return this.Pt(d.L(a)-1)}}},hc:{Add:s.ri,RemoveAll:s.Il,Remove:function(a){return this.vs(d.L(a)-1)}},ts:{Qr:function(a){return this.Pt(d.L(a)-1)},Qy:function(){return this.Jc()}},
cf:{af:"Item"}});c.thc=function(){k.J.call(this);this.z9=0;this.l9=this.J$=!0;this.tZ=1;this.mz=new c.svb(this);this.Vi=-1;this.Aqa=this.Cqa=this.SY=!1;this.CF=50};var k=c.q(c.thc,c.Jx);k.ze=function(){return c.ukc};k.Q=function(){k.j.Q.call(this)};k.Jg=function(){return 0<this.mz.Jc()?this.mz.Pt(0).Jg():""};k.Ru=function(b){this.mz.Il();var c=this.mz.ZHa();c.Jg()!=b&&(c.Ru(b),(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.d5=function(){return 0<this.mz.Jc()?this.mz.Pt(0).d5():""};k.s7=function(b){var c=
this.mz.ZHa();c.d5()!=b&&(c.s7(b),(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.iYc=function(){return this.mz};k.omb=function(){return this.z9};k.pCb=function(b){this.z9!=b&&(this.z9=b,(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.bnb=function(){return this.SY};k.cob=function(){return this.J$};k.IDb=function(b){this.J$!=b&&(this.J$=b,(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.Elb=function(){return this.l9};k.PBb=function(b){this.l9!=b&&(this.l9=b,(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.fba=function(){return this.Vi};
k.cnb=function(){return this.Cqa};k.anb=function(){return this.Aqa};k.Gob=function(){return this.CF};k.fOa=function(c){c=b.Jf(c,0,100);this.CF!=c&&(this.CF=c,this.SY=0==this.CF,(c=this.Sa())&&c.ku(),this.l(a.g.i))};k.Z_c=function(){return this.tZ};k.zDb=function(b){this.tZ!=b&&(this.tZ=b,(b=this.Sa())&&b.ku(),this.l(a.g.i))};k.Play=function(){this.Sa()&&this.Sa().Play()};k.mi=function(){this.Sa()&&this.Sa().mi()};k.xyb=function(){this.fOa(0)};d.Kd(c.thc,"PRIM_SOND",{za:{FileName:{a:k.Jg,f:function(a){this.Ru(d.ja(a))}},
CycleToStart:{a:k.omb,f:function(a){this.pCb(d.Ba(a))}},ShowControls:{a:k.cob,f:function(a){this.IDb(d.Ba(a))}},Autoplay:{a:k.Elb,f:function(a){this.PBb(d.Ba(a))}},Preload:{a:function(){return d.va(this.tZ,t)},f:function(a){this.zDb(d.ua(a,t))}},Duration:{a:k.fba},IsMuted:{a:k.bnb},IsPlaying:{a:k.cnb},IsEnded:{a:k.anb},Volume:{a:k.Gob,f:function(a){this.fOa(d.L(a))}}},hc:{Play:k.Play,Stop:k.mi,Mute:k.xyb}});c.ukc=function(a){e.J.call(this,a)};var e=c.q(c.ukc,c.lo);e.Fd=function(b,c){this.u=document.createElement("audio");
this.u.setAttribute("LANSAHandle",this.gc);this.u.style.position="absolute";this.u.style.overflow="hidden";this.u.style.whiteSpace="nowrap";this.ku();var d=this.u,k=this;d.addEventListener("loadedmetadata",function(){k.K&&(k.K.Vi=d.duration,k.K.Fa(a.O.Aac))},!1);d.addEventListener("loadeddata",function(){k.K&&k.K.Fa(a.O.zac)},!1);d.addEventListener("play",function(){k.K&&(k.K.Cqa=!0,k.K.Aqa=!1,k.K.Fa(a.O.Smc))},!1);d.addEventListener("pause",function(){k.K&&(k.K.Cqa=!1,k.K.Fa(a.O.Ktc))},!1);d.addEventListener("ended",
function(){k.K&&(k.u.pause(),k.u.paused=!0,k.K.Aqa=!0,k.K.Fa(a.O.Fy))},!1);d.addEventListener("volumechange",function(){k.K&&(d.muted||0==d.volume?(k.u.muted=!0,k.K.SY=!0,k.K.CF=0,k.K.Fa(a.O.Hlc)):(k.K.SY=!1,k.K.CF=Math.round(100*d.volume)))},!1);return e.j.Fd.call(this,b,c)};e.ku=function(){this.vza("controls",this.K.J$);this.vza("autoplay",this.K.l9);this.vza("loop",this.K.z9);this.u.setAttribute("preload",d.va(this.K.tZ,l));this.u.volume=0<this.K.CF?this.K.CF/100:0;this.u.muted=this.K.SY;this.VIb()};
e.VIb=function(){this.JAb();var a=this.K.mz.Jc();if(0!=a)for(var b=0;b<a;b++){var c=this.K.mz.Pt(b);this.nEc(this.u,c.rr,c.a$)}};e.nEc=function(a,b,c){var d=document.createElement("source");d.src=b;c&&(d.type="audio/"+c);a.appendChild(d)};e.JAb=function(){var a=this.u;if(a&&(a=a.childNodes)){var b,c,d=[];for(c=0;c<a.length;c++)b=a[c],"SOURCE"==b.nodeName&&d.push(b);for(c=0;c<d.length;c++)b=d[c],b.parentNode.removeChild(b)}};e.BS=function(){return!1};e.d2a=function(){};e.Play=function(){this.u.play!==
p&&this.u.play()};e.mi=function(){this.u.pause!==p&&this.u.pause()}});
