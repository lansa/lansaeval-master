LANSA.addComponent({id:"XGOOGLE07",nm:"xGoogleMapsExt",ot:"ww",tp:"Widget",pt:"ap",de:"Google Map Extended",tl:14000101,cl:15000003},function(l,oI,u){var fF=function(wP){wP.fireMarkerClicked=function(pLatitude,pLongitude,pCaption,pElaboration,pIdentifier){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);eP.aS("CAPTION",pCaption);eP.aS("ELABORATION",pElaboration);eP.aS("IDENTIFIER",pIdentifier);l.fE(this,"MARKERCLICKED",eP);};wP.fireGoogleMapsLoaded=function(){l.fE(this,"GOOGLEMAPSLOADED");
};wP.fireCenterChanged=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"CENTERCHANGED",eP);};wP.fireRightClick=function(pLatitude,pLongitude){var eP=l.ePs();eP.aD("LATITUDE",pLatitude);eP.aD("LONGITUDE",pLongitude);l.fE(this,"RIGHTCLICK",eP);};};var fW=
function( PROTOTYPE, WIDGET )
{
PROTOTYPE.onCreateInstance = function()
{
this.m_MarkerInfoArray = [];
this.m_APIKey = "";
};
PROTOTYPE.onRealizeControl = function( parentDiv )
{
this.parentDiv = parentDiv;
};
PROTOTYPE.onSizeChanged = function()
{
try
{
google.maps.event.trigger( this.m_Map, "resize" );
}
catch( e ){}
};
PROTOTYPE.getMapType = function()
{
if ( this.m_Map )
{
this.m_MapType = this.m_Map.getMapTypeId();
}
switch( this.m_MapType )
{
case google.maps.MapTypeId.ROADMAP:
{
return "ROADMAP";
}
case google.maps.MapTypeId.SATELLITE:
{
return "SATELLITE";
}
case google.maps.MapTypeId.HYBRID:
{
return "HYBRID";
}
case google.maps.MapTypeId.TERRAIN:
{
return "TERRAIN";
}
}
};
PROTOTYPE.setMapType = function( enumValue )
{
if (google.maps)
{
switch( enumValue )
{
case "ROADMAP":
this.m_MapType = google.maps.MapTypeId.ROADMAP;
break;
case "SATELLITE":
this.m_MapType = google.maps.MapTypeId.SATELLITE;
break;
case "HYBRID":
this.m_MapType = google.maps.MapTypeId.HYBRID;
break;
case "TERRAIN":
this.m_MapType = google.maps.MapTypeId.TERRAIN;
break;
}
if ( this.m_Map )
{
this.m_Map.setMapTypeId( this.m_MapType );
}
}
};
PROTOTYPE.getZoom = function()
{
if ( this.m_Map )
{
this.m_Zoom = this.m_Map.getZoom();
}
return this.m_Zoom;
};
PROTOTYPE.setZoom = function( iValue )
{
this.m_Zoom = iValue;
if ( this.m_Map )
{
this.m_Map.setZoom( iValue );
}
};
PROTOTYPE.getAPIKey = function()
{
return this.m_APIKey;
}
PROTOTYPE.setAPIKey = function( strValue )
{
this.m_APIKey = strValue;
}
PROTOTYPE.LoadGoogleMaps = function()
{
var pThis = this;
google.load( 'maps', '3', { other_params: 'key=' + pThis.m_APIKey, callback: function( ) { pThis.fireGoogleMapsLoaded();}  } );
}
PROTOTYPE.DisplayMap = function( decCenter_Latitude, decCenter_Longitude )
{
var child = this.parentDiv.firstChild;
while (child != null)
{
this.parentDiv.removeChild(child);
child = this.parentDiv.firstChild;
}
this.m_Map = new google.maps.Map( this.parentDiv,
{
center:                    new google.maps.LatLng( decCenter_Latitude, decCenter_Longitude ),
zoom:                      this.m_Zoom,
mapTypeId:                 this.m_MapType,
mapTypeControl:            false,
navigationControlOptions:
{
style: google.maps.NavigationControlStyle.SMALL
}
});
var pThis = this;
google.maps.event.addListener( this.m_Map, 'rightclick', function( event )
{
pThis.fireRightClick( event.latLng.lat(), event.latLng.lng() );
});
google.maps.event.addListener( this.m_Map, 'center_changed', function()
{
var center = pThis.m_Map.getCenter();
pThis.m_Latitude = center.lat();
pThis.m_Longitude = center.lng();
pThis.fireCenterChanged( pThis.m_Latitude, pThis.m_Longitude );
});
for ( var i = 0; i < this.m_MarkerInfoArray.length; i++ )
{
this.ShowMarker( this.m_MarkerInfoArray[ i ] );
}
}
PROTOTYPE.AddMarker = function( decLatitude, decLongitude, strCaption, strElaboration, strIdentifier, bClearPreviousMarkers )
{
var markerInfo = {
latitude:    decLatitude,
longitude:   decLongitude,
caption:     strCaption,
elaboration: strElaboration,
id:          strIdentifier
};
if (bClearPreviousMarkers) this.m_MarkerInfoArray = [];
this.m_MarkerInfoArray.push( markerInfo );
};
PROTOTYPE.ShowMarker = function( markerInfo )
{
var pThis = this;
if ( this.m_Map )
{
var location = new google.maps.LatLng( markerInfo.latitude, markerInfo.longitude );
markerInfo.marker = new google.maps.Marker(
{
position:   location,
map:        this.m_Map,
title:      markerInfo.caption
});
google.maps.event.addListener(markerInfo.marker, 'click', function(event) { pThis.HandlerMarkerClick(pThis,markerInfo) } );
google.maps.event.addListener(markerInfo.marker, 'mousedown', function(event) { pThis.HandlerMarkerDown(pThis,markerInfo) } );
}
};
PROTOTYPE.HandlerMarkerClick = function( pThis, markerInfo )
{
this.fireMarkerClicked( markerInfo.latitude, markerInfo.longitude, markerInfo.caption, markerInfo.elaboration, markerInfo.id );
};
PROTOTYPE.HandlerMarkerDown = function( pThis, markerInfo )
{
this.fireMarkerClicked( markerInfo.latitude, markerInfo.longitude, markerInfo.caption, markerInfo.elaboration, markerInfo.id );
};
return WIDGET.Completed;
}
;
l.rWg({nm:"XGOOGLE07",js:["https://www.google.com/jsapi"],fe:fF,fn:fW});var cO=l.rC(oI,{an:"PRIM_WDGT",at:"Control",co:function(){cO.aN.call(this);this.setMAPTYPE("ROADMAP");this.setZOOM(1);this.setAPIKEY("");}});cO.getMAPTYPE=function(){return l.tS(this.get("MapType")).toUpperCase();};cO.setMAPTYPE=function(v){this.set("MapType",l.tS(v).toUpperCase());};cO.getZOOM=function(){return l.tI(this.get("Zoom"));};cO.setZOOM=function(v){this.set("Zoom",l.tI(v));};cO.getAPIKEY=function(){return l.tS(this.get("APIKey"));
};cO.setAPIKEY=function(v){this.set("APIKey",l.tS(v));};cO.mthADDMARKER=function(P0,P1,P2,P3,P4,P5){this.invoke("AddMarker",[l.tN(P0),l.tN(P1),l.tS(P2),l.tS(P3),l.tS(P4),l.tB(P5)]);};cO.mthLOADGOOGLEMAPS=function(){this.invoke("LoadGoogleMaps");};cO.mthDISPLAYMAP=function(P0,P1){this.invoke("DisplayMap",[l.tN(P0),l.tN(P1)]);};},{rp:["PRIM_WDGT.Control"]});