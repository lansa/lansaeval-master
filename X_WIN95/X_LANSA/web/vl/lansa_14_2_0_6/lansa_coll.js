window.LANSA.addSrc("coll",function(e,c,a,b,p){a.MLa={slc:0,t4a:1};var r=0;c.ola=function(){m.w.call(this)};var m=c.u(c.ola,c.td);m.Wxb=function(){return!1};m.lPb=function(){return!1};m.lc=function(){return 0};m.Nf=function(){return 0==this.lc()};m.$W=function(a){a&&(a.Ca(),a.ohc(this))};m.qX=function(a){a&&(a.wb(),a.NSc(this))};m.tZ=function(a,b){this.MOa(b);null!=this.YR&&this.YR.tZ(a,b)};m.W4=function(a,b){this.NOa(b);null!=this.YR&&this.YR.W4(a,b)};e.hd(c.ola,"PRIM_COLL",{Qa:{AllowsDuplicates:{a:function(){return this.Wxb()}},
IsEmpty:{a:function(){return this.Nf()}},IsOrdered:{a:function(){return this.lPb()}},ItemCount:{a:function(){return this.lc()}}}});c.LMa=function(){s.w.call(this);this.Za=[];this.YR=null};var s=c.u(c.LMa,c.ola);s.W=function(){this.Fj();s.j.W.call(this)};s.Wxb=function(){return!0};s.lPb=function(){return!0};s.lc=function(){return this.Za.length};s.Pd=function(a){if(0>a||a>=this.Za.length)throw e.mE(a,this.Za.length);return this.Za[a]};s.Gk=function(a,b){if(0>a||a>this.Za.length)throw e.mE(a,this.Za.length);
a==this.Za.length?this.Fr(b):this.Gib(b,a)};s.w6a=function(a,b){return b===p?this.Za.indexOf(a):this.Za.indexOf(a,b)};s.WJb=function(a){return this.Za.lastIndexOf(a)+1};s.m6a=function(){return 0<this.Za.length?this.Za[0]:null};s.I6a=function(){return 0<this.Za.length?this.Za[this.Za.length-1]:null};s.lod=function(){return this.Vea};s.JZ=function(a){this.Vea=a};s.fGa=function(a){this.JZ(a.L3b())};s.ce=function(a){return-1!=this.Za.indexOf(a)};s.Fr=s.jOb=function(a){this.$W(a);this.Za.push(a);this.tZ(a,
this.lc()-1)};s.iOb=function(a){this.$W(a);this.Za.unshift(a);this.tZ(a,0)};s.hOb=function(a,b){if(0>b||b>=this.Za.length)throw e.mE(b,this.Za.length);this.$W(a);this.Za.splice(b+1,0,a);this.tZ(a,b+1)};s.q$a=function(a,b){if(0>b||b>=this.Za.length)throw e.mE(b,this.Za.length);this.$W(a);this.Za.splice(b,0,a);this.tZ(a,b)};s.Es=function(a){a=this.Za.indexOf(a);if(-1==a)throw e.mTc();return this.Oq(a)};s.Oq=function(a){if(0>a||a>=this.Za.length)throw e.mE(a,this.Za.length);var b=this.Za[a];this.Za.splice(a,
1);e.Kha(b);this.qX(b);this.W4(b,a);return b};s.Aib=function(){return this.Oq(0)};s.Cib=function(){return this.Oq(this.Za.length-1)};s.Fj=function(){for(var a=0;a<this.Za.length;a++)this.qX(this.Za[a]);this.Za=[];this.bca()};s.Sgb=function(a){for(var b=0,c=0;c<this.Za.length;c++)this.Za[c]===a&&b++;return b};s.Gib=function(a,b){if(0>b||b>=this.Za.length)throw e.mE(b,this.Za.length);var c=this.Za[b];e.Kha(c);this.qX(c);this.Za[b]=a;this.$W(a);return c};s.tg=function(){var a=e.U1a(this.Vea);if(a=e.ed(a.uOa,
a.Wpb))this.ama(a),this.Fr(a)};s.Bj=function(){this.Fj()};s.Hh=function(a){if(0<=a&&a<this.lc()){var b=this.Pd(a);b&&this.xba(b);this.Kk=a;return"OK"}this.Kk=-1;return"NR"};s.Fn=function(){return this.lc()};s.em=function(a){a===p&&(a=this.Kk);0<=a&&a<this.lc()&&this.Oq(a)};s.Ik=function(){var a=this.Kk;0<=a&&a<this.lc()&&(a=this.Pd(a))&&this.ama(a)};s.Om=function(a,b,c){for(var d=0;d<this.lc();d++){var e=this.Pd(d);if(e&&(e=e.oY())){var g={},f;for(f in e)g[f]=e[f].get();if(a(g))return null!=b&&b.set(d+
1),c&&this.Hh(d),this.Kk=d,"OK"}}return"NR"};s.Wp=function(a){this.Fj();for(var b=0;b<a;b++)this.tg()};s.Jr=function(){return new c.Ndb(this)};s.Lza=function(){null==this.YR&&(this.YR=new c.dWb);return this.YR};c.dWb=function(){f.w.call(this)};var f=c.u(c.dWb,c.Odb);c.ZVb=function(){h.w.call(this);this.Kk=-1};var h=c.u(c.ZVb,c.LMa);h.wT=function(){return"PRIM_LCOL<"+this.Vea+">"};h.Uhc=function(a){for(var b=0;b<a.lc();b++)this.Fr(a.Pd(b))};h.Flc=function(a){for(var b=e.ed("PRIM_LCOL"),c=0;c<this.lc();c++)b.Fr(this.Pd(c));
for(c=0;c<a.lc();c++)b.Fr(a.Pd(c));e.Kha(b);return b};e.hd(c.ZVb,"PRIM_LCOL",{nM:a.rw.d0a,Qa:{First:{a:function(){return this.m6a()}},Last:{a:function(){return this.I6a()}},Item:{a:function(a){return this.Pd(e.L(a)-1)},g:function(a,b){this.Gk(e.L(a)-1,b)}},IndexOf:{a:function(a,b){return this.w6a(a,b===p?p:e.L(b)-1)+1}},LastIndexOf:{a:h.WJb},Collects:{g:h.JZ}},jc:{Append:h.Uhc,Concatenate:h.Flc,Contains:h.ce,Insert:h.Fr,InsertFirst:h.iOb,InsertLast:h.jOb,InsertAfter:function(a,b){return this.hOb(a,
e.L(b)-1)},InsertBefore:function(a,b){return this.q$a(a,e.L(b)-1)},Remove:h.Es,RemoveAt:function(a){return this.Oq(e.L(a)-1)},RemoveFirst:h.Aib,RemoveLast:h.Cib,RemoveAll:h.Fj,OccurrencesOf:h.Sgb,ReplaceAt:function(a,b){return this.Gib(a,e.L(b)-1)}},Zf:{Tf:"Item"},xp:{Waa:function(a){var b=e.ed("PRIM_NMBR");b.set(a);return b},Jo:function(a){return this.Pd(e.L(a)-1)},Dv:function(){return this.lc()}},$x:{tg:h.tg,Hh:function(a){return this.Hh(e.L(a)-1)},Wp:h.Wp,Bj:h.Bj,Fn:h.Fn,em:function(a){return this.em(a?
e.L(a)-1:p)},Ik:h.Ik,Om:h.Om,Jr:h.Jr}});c.sSb=function(){n.w.call(this)};var n=c.u(c.sSb,c.LMa);n.wT=function(){return"PRIM_ACOL<"+this.Vea+">"};e.hd(c.sSb,"PRIM_ACOL",{nM:a.rw.d0a,Qa:{First:{a:function(){return this.m6a()}},Last:{a:function(){return this.I6a()}},Item:{a:function(a){return this.Pd(e.L(a)-1)},g:function(a,b){this.Gk(e.L(a)-1,b)}},IndexOf:{a:function(a,b){return this.w6a(a,b===p?p:e.L(b)-1)+1}},LastIndexOf:{a:n.WJb},Collects:{g:n.JZ}},jc:{Contains:n.ce,Insert:n.Fr,InsertFirst:n.iOb,
InsertLast:n.jOb,InsertAfter:function(a,b){return this.hOb(a,e.L(b)-1)},InsertBefore:function(a,b){return this.q$a(a,e.L(b)-1)},Remove:n.Es,RemoveAt:function(a){return this.Oq(e.L(a)-1)},RemoveFirst:n.Aib,RemoveLast:n.Cib,RemoveAll:n.Fj,OccurrencesOf:n.Sgb,ReplaceAt:function(a,b){return this.Gib(a,e.L(b)-1)}},Zf:{Tf:"Item"},xp:{Waa:function(a){var b=e.ed("PRIM_NMBR");b.set(a);return b},Jo:function(a){return this.Pd(e.L(a)-1)},Dv:function(){return this.lc()}},$x:{tg:n.tg,Hh:function(a){return this.Hh(e.L(a)-
1)},Wp:n.Wp,Bj:n.Bj,Fn:n.Fn,em:function(a){return this.em(a?e.L(a)-1:p)},Ik:n.Ik,Om:n.Om,Jr:n.Jr}});c.kWb=function(){k.w.call(this)};var k=c.u(c.kWb,c.LMa);k.Fr=function(b){this.$W(b);for(var c=0,d=this.Za.length-1;c<=d;){var e=Math.floor((c+d)/2);this.puc(b,this.Za[e])==a.Oc.vk?d=e-1:c=e+1}this.Za.splice(c,0,b)};k.puc=function(b,c){var d=a.Oc.ck,g=e.Qb();g.Vb("SUBJECT",b);g.Vb("OBJECT",c);g.yO("RESULT",d,a.Oc.v);this.Ha(a.J.GGa,g);d=g.j6a("RESULT",a.Oc.v);g.nc();return d};e.hd(c.kWb,"PRIM_SACO",
{Qa:{First:{a:function(){return this.m6a()}},Last:{a:function(){return this.I6a()}},Item:{a:function(a){return this.Pd(e.L(a)-1)},g:function(a,b){this.Gk(e.L(a)-1,b)}},IndexOf:{a:function(a,b){return this.w6a(a,b===p?p:e.L(b)-1)+1}},Collects:{g:k.JZ}},jc:{Remove:k.Es,RemoveAt:function(a){return this.Oq(e.L(a)-1)},RemoveAll:k.Fj,RemoveLast:k.Cib,RemoveFirst:k.Aib,Contains:k.ce,OccurrencesOf:k.Sgb,Insert:k.Fr},Zf:{Tf:"Item"},xp:{Waa:function(a){var b=e.ed("PRIM_NMBR");b.set(a);return b},Jo:function(a){return this.Pd(e.L(a)-
1)},Dv:function(){return this.lc()}}});c.YY=function(a){d.w.call(this);this.kfc=a};var d=c.u(c.YY,c.ola);d.Pd=function(a){if(0>a||a>=this.lc())throw e.mE(a,this.lc());return this.Aw(a)};d.lc=function(){return this.kfc.lc()};d.Aw=function(a){return this.kfc.Aw(a)};e.hd(c.YY,"PRIM_PCOL",{Qa:{Item:{a:function(a){return this.Pd(e.L(a)-1)},g:function(a,b){this.Gk(e.L(a)-1,b)}}},Zf:{Tf:"Item"},xp:{Jo:function(a){return this.Aw(e.L(a)-1)},Dv:function(){return this.lc()}}});c.YVb=function(){g.w.call(this);
this.Za={};this.SR=null;this.Qe=a.MLa.t4a};var g=c.u(c.YVb,c.ola);g.W=function(){this.Fj();g.j.W.call(this)};g.wT=function(){return"PRIM_KCOL<"+this.RUa+" "+this.wzc()+">"};g.fg=function(){return this.Qe};g.sb=function(a){this.Qe=a};g.lc=function(){return this.Jba().length};g.Pd=function(b){b=this.z0a(b);if(this.Za[b]===p&&this.Qe==a.MLa.t4a){var c=null;this.Jsb?c=new this.Jsb:this.RUa&&(c=e.U1a(this.RUa),c=e.ed(c.uOa,c.Wpb));c&&(this.Za[b]=c,this.$W(c),this.BG())}return this.Za[b]};g.Gk=function(a,
b){a=this.z0a(a);var c=a.toString();this.Za[c]===p?this.BG():this.qX(this.Za[c]);this.$W(b);this.Za[c]=b};g.Aw=function(a){a=this.Jba()[a];return this.Za[a]};g.E6a=function(a){a=this.Jba()[a];this.SR.set(a);return this.SR};g.F6a=function(a){for(var b in this.Za)if(this.Za[b]===a)return this.C0a(b);return this.SR.WAc()};g.JZ=function(a,b){"string"!==typeof a?this.Jsb=a:(this.RUa=a,this.Jsb=b)};g.FQa=function(a){this.SR=new a;this.SR.Ca()};g.mod=function(){return this.RUa};g.wzc=function(){var a="";
this.SR&&(a=this.SR.Rua());return a};g.fGa=function(a){this.JZ(a.L3b(),a.Fzb(0));this.FQa(a.Fzb(1))};g.z0a=function(a){this.SR.set(a);a=this.SR.get();return a.toString()};g.C0a=function(a){this.SR.set(a);return this.SR.get()};g.Es=function(a){a=this.z0a(a);var b=null;this.Za[a]!==p&&(b=this.Za[a],e.Kha(b),this.qX(b),delete this.Za[a],this.BG(),this.W4(b,0));return b};g.Fj=function(){for(var a in this.Za)this.qX(this.Za[a]);this.Za={};this.BG();this.bca()};g.BG=function(){delete this.gF};g.Jba=function(){var a=
this;if(this.gF===p){this.gF=[];for(var b in this.Za)this.gF.push(b);this.gF.sort(function(b,c){b=a.C0a(b);c=a.C0a(c);return e.cmp(b,c)})}return this.gF};var y={COLLECTION:a.MLa.slc,FACTORY:a.MLa.t4a};e.hd(c.YVb,"PRIM_KCOL",{Qa:{Style:{a:function(){return e.ta(this.fg(),y)},g:function(a){this.sb(e.qa(a,y))}},Item:{a:function(a){return this.Pd(a)},g:function(a,b){this.Gk(a,b)},sw:"na"},Collects:{g:g.JZ},KeyedBy:{g:g.FQa},KeyOf:{a:function(a){return this.F6a(a)},sw:"na"}},jc:{Remove:g.Es,RemoveAll:g.Fj},
Zf:{Tf:"Item"},xp:{Waa:function(a){return this.E6a(e.L(a)-1)},Jo:function(a){return this.Aw(e.L(a)-1)},Dv:function(){return this.lc()}}});c.pVb=function(){z.w.call(this);this.MR=(r++).toString();this.pH=[];this.Vea=this.Uec=""};var z=c.u(c.pVb,c.ola);z.wT=function(){return"PRIM_DCOL<"+this.Vea+" "+this.Uec+">"};z.lc=function(){return this.pH.length};z.Aw=function(a){return this.pH[a].YG[this.MR]};z.Pd=function(a){return a.YG===p||a.YG[this.MR]===p?null:a.YG[this.MR]};z.Gk=function(a,b){a.YG===p&&
(a.YG={});var c=a.YG[this.MR];c===p?(this.pH.push(a),a.Ca()):this.qX(c);a.YG[this.MR]=b;this.$W(b)};z.E6a=function(a){return this.pH[a]};z.JZ=function(a){this.Vea=a};z.FQa=function(a){this.Uec=a};z.F6a=function(a,b){for(var c=b;c<this.pH.length;c++){var d=this.pH[c];if(d.YG[this.MR]===a)return d}return null};z.Xtc=function(a){return this.Pd(a)};z.ce=function(a){return-1!=this.pH.indexOf(a)};z.Klc=function(a){for(var b=0;b<this.pH.length;b++)if(this.pH[b].YG[this.MR]===a)return!0;return!1};z.Fr=function(a,
b){var c=this.Pd(b);this.Gk(b,a);return c};z.Es=function(a){if(a.YG!==p){var b=a.YG[this.MR];if(b!==p)return delete a.YG[this.MR],this.pH.splice(this.pH.indexOf(a),1),e.Kha(b),this.qX(b),a.wb(),this.W4(b,0),b}return null};z.Fj=function(){for(var a=0;a<this.pH.length;a++){var b=this.pH[a],c=b.YG[this.MR];c!==p&&(delete b.YG[this.MR],this.qX(c))}this.pH=[];this.bca()};e.hd(c.pVb,"PRIM_DCOL",{Qa:{Item:{a:function(a){return this.Pd(a)},g:function(a,b){this.Gk(a,b)},sw:"na"},Collects:{g:z.JZ,sw:"na"},
KeyedBy:{g:z.FQa,sw:"na"},KeyOf:{a:function(a,b){return this.F6a(a,b!==p?e.L(b)-1:0)},sw:"na"}},jc:{Contains:z.ce,ContainsItem:z.Klc,Insert:z.Fr,Remove:z.Es,RemoveAll:z.Fj,Find:z.Xtc},Zf:{Tf:"Item"},xp:{Waa:function(a){return this.E6a(e.L(a)-1)},Jo:function(a){return this.Aw(e.L(a)-1)},Dv:function(){return this.lc()}}})});
