window.LANSA.addSrc("dvce",function(e,c,a,b,m){e.Gb("PRIM_WEB");var p=null;a.jN={uqa:0,kdc:1,jdc:2};a.jN.v={HIGH:a.jN.uqa,MEDIUM:a.jN.kdc,LOW:a.jN.jdc};c.K_b=function(){l.w.call(this);this.YXa=this.ifd=this.mFa="";this.IN=null};var l=c.u(c.K_b,c.wd);l.U=function(){null!=this.IN&&(this.IN.xb(),this.IN=null);l.j.U.call(this)};l.lKb=function(){return this.IN};l.Z_c=function(a){this.IN!=a&&(null!=this.IN&&this.IN.xb(),this.IN=a,null!=this.IN&&this.IN.Ca())};l.Bxa=function(){p=window.LONGRANGE;return p!==
m};l.w5a=function(b){var c=e.Tb();c.Zb("FILE",b);this.Ga(a.G.uIb,c);c.sc()};l.xlc=function(b,c,e){b===m&&(b=0);c===m&&(c=0);e===m&&(e=!1);this.Bxa()&&this.EGa("camera",!0,!1,!1,e,a.jN.uqa,0,b,c)};l.zlc=function(a,b,c){c===m&&(c=!1);this.Bxa()&&this.EGa("camera",!1,!0,!1,c,a,b,0,0)};l.SYc=function(){this.Bxa()&&this.EGa("library",!0,!0,!1,!1,a.jN.uqa,0,0,0)};l.Dic=function(b){b===m&&(b=!1);this.Bxa()&&this.EGa("camera",!0,!1,!0,b,!1,a.jN.uqa,0,0)};l.EGa=function(b,e,f,k,d,h,l,s,r){var p=this,B={};
B.source=b;B.enableImage=e;B.enableVideo=f;B.enableAnnotation=k;switch(h){case a.jN.jdc:B.videoQuality=3;break;case a.jN.kdc:B.videoQuality=1;break;case a.jN.uqa:B.videoQuality=0}B.videoMaxDuration=l;B.size={width:s,height:r};B.saveToPhotoGallery=d;B.returnContent=e;B.returnContent&&(B.returnContent={size:{width:s,height:r}});B.returnFile=!0;B.onCompleted=function(a){p.mFa=a.filePath;p.ifd=a.fileURL;p.YXa=a.data;p.sfc=setTimeout(function(){var a=null;""!=p.YXa&&p.YXa!==m&&(a=new c.Sfb(p.mFa,p.YXa));
p.Z_c(a);a&&p.w5a(a);clearTimeout(p.sfc);p.sfc=null},25)};window.LONGRANGE.Camera.show(B)};e.jb(c.K_b,"PRIM_DVCE","Camera",{Oa:{File:{a:l.lKb},IsAvailable:{a:l.Bxa}},jc:{CaptureImage:function(a,b,c){this.xlc(a?e.K(a):0,b?e.K(b):0,c?e.za(c):c)},CaptureVideo:function(b,c,f){this.zlc(b!==m?e.ra(b,a.jN.v):a.jN.uqa,e.K(c),f?e.za(f):f)},SelectFromGallery:function(){this.SYc()},AnnotateImage:function(a){this.Dic(a?e.za(a):a)}}});c.Sfb=function(a,b){s.w.call(this);this.mFa=a;this.wed=b;this.gF=null};var s=
c.u(c.Sfb,c.wd);s.U=function(){null!=this.gF&&(this.gF=null);s.j.U.call(this)};s.qh=function(){return this.mFa};s.ova=function(){null==this.gF&&(this.gF=new c.GG({data:this.wed,mimetype:"image/png",filename:this.mFa}));return this.gF};e.jb(c.Sfb,"PRIM_DVCE","CameraFile",{Oa:{Name:{a:s.qh},Blob:{a:s.ova}}})},{rp:["PRIM_WEB"]});
