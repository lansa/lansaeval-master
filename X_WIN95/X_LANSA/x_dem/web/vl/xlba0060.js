// --------------------------
// -- Web Widget: XLBA0060 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0060", 
   nm: "XWebUtil_AddScript", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-common] Include Script in Webpg", 
   tl: 14000101, 
   cl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -------------------------------------
   // -- Helper functions to fire events --
   // -------------------------------------
   var fnEvents = function( PROTOTYPE )
   {
      PROTOTYPE.fireOnLoaded = function()
      {
         Lansa.fireEvent( this, "ONLOADED" );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (function (PROTOTYPE, WIDGET) {
          PROTOTYPE.onCreateInstance = function () {
              this._loaded = false;
          };
          PROTOTYPE.LoadScript = function (id, url) {
              var _this = this;
              var scriptElementId = generateScriptElementId(id);
              var scriptElement = document.getElementById(scriptElementId);
              if (scriptElement) {
                  var loaded = !!scriptElement.dataset.loaded;
                  if (loaded) {
                      this.fireOnLoaded();
                  }
                  else {
                      scriptElement.addEventListener("load", function () { return _this.fireOnLoaded(); });
                  }
              }
              else {
                  var scriptElement_1 = document.createElement("script");
                  scriptElement_1.src = url;
                  scriptElement_1.id = scriptElementId;
                  scriptElement_1.addEventListener("load", function () {
                      scriptElement_1.dataset.loaded = "1";
                      _this.fireOnLoaded();
                  });
                  document.body.appendChild(scriptElement_1);
              }
          };
          function generateScriptElementId(sourceId) {
              return "lscript_" + sourceId;
          }
          // Done
          return WIDGET.Completed;
      });
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0060", 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Control", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.mthLOADSCRIPT = function( ID, Url )
   {
      this.invoke( "LoadScript", [ Lansa.toString( ID ), Lansa.toString( Url ) ] );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Control" ]
});

//# sourceURL=xlba0060.js
