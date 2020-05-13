LANSA.addComponent({id:"XATTCHDWI",nm:"xAttachmentDragAndDropWidget",ot:"ww",tp:"Widget",pt:"ap",de:"Associated Attachment Drop Widget",tl:14000101,cl:15000003},function(l,oI,u){var fF=function(wP){wP.fireFileDropped=function(pName,pType,pSize,pData){var eP=l.ePs();eP.aS("NAME",pName);eP.aS("TYPE",pType);eP.aS("SIZE",pSize);eP.aS("DATA",pData);l.fE(this,"FILEDROPPED",eP);};wP.fireFileDropStart=function(pName,pType,pSize){var eP=l.ePs();eP.aS("NAME",pName);eP.aS("TYPE",pType);eP.aS("SIZE",pSize);l.fE(this,"FILEDROPSTART",eP);
};wP.fireuDragOver=function(){l.fE(this,"UDRAGOVER");};wP.fireuDragLeave=function(){l.fE(this,"UDRAGLEAVE");};wP.fireuDragEnd=function(){l.fE(this,"UDRAGEND");};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onRealizeControl = function( parentDiv )
{
var pThis = this;
this.parentDiv = parentDiv;
this.parentDiv.style.boxSizing = "border-box";
this.Div = document.createElement("DIV");
this.Div.oncontextmenu = function(){return false; };
this.Div.style.borderStyle = "dashed" ;
this.Div.style.borderColor = "blue" ;
this.Div.style.borderWidth = "1px" ;
this.Div.style.boxSizing = "border-box";
this.Div.style.height = "97%";
this.Div.style.width = "99.5%";
this.parentDiv.appendChild(this.Div);
this.handle_dragover  = function(e)
{
e.dataTransfer.dropEffect = 'link';
pThis.fireuDragOver();
e.preventDefault();
return false
};
this.handle_dragend   = function (e){pThis.fireuDragEnd();e.preventDefault();return false;};
this.handle_dragleave = function (e){pThis.fireuDragLeave();e.preventDefault();return false;};
this.handle_dragdrop  = function (e)
{
pThis.handle_readfiles(e.dataTransfer.files);
e.preventDefault();
};
this.handle_readfiles = function readfiles(files)
{
for (var i = 0; i < files.length; i++)
{
if ( parseInt(files[i].size,10) <= (1000000 * 1024))
{
( function(f)
				          {
var file = f;
pThis.fireFileDropStart( file.name, file.type, file.size );
reader = new FileReader();
reader.onload = function(event)
{
pThis.fireFileDropped( file.name, file.type, file.size, event.target.result);
}
reader.readAsDataURL(files[i]);
			   } )( files[i]);
}
}
};
this.Div.addEventListener("dragover",  this.handle_dragover);
this.Div.addEventListener("dragend",   this.handle_dragend);
this.Div.addEventListener("dragleave", this.handle_dragleave);
this.Div.addEventListener("drop",this. handle_dragdrop);
return;
}
PROTOTYPE.uInitialize = function()
{
}
PROTOTYPE.uTerminate = function()
{
if (this.Div != null)
{
this.Div.removeEventListener("dragover", this.handled_dragover );
this.Div.removeEventListener("dragend",  this.handle_dragend);
this.Div.removeEventListener("dragleave",this.handle_dragleave);
this.Div.removeEventListener("drop",this.handle_dragdrop);
this.parentDiv.removeChild(this.Div);
this.Div = null;
}
}
return WIDGET.Completed;
}
;
l.rWg({nm:"XATTCHDWI",fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);}});cO.mthUINITIALIZE=function(){this.invoke("uInitialize");};cO.mthUTERMINATE=function(){this.invoke("uTerminate");};},{rp:["PRIM_WDGT.Control"]});