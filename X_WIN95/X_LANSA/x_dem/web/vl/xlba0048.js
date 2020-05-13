// --------------------------
// -- Web Widget: XLBA0048 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0048", 
   nm: "XWebUtil_DispatchEvent", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-common] Event", 
   tl: 14000101, 
   cl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (function (PROTOTYPE, WIDGET) {
          PROTOTYPE.onCreateInstance = function () {
              this._details = {};
          };
          PROTOTYPE.AddStringValue = PROTOTYPE.AddIntegerValue = function (key, value) {
              this._details[key] = value;
          };
          PROTOTYPE.Dispatch = function (eventName) {
              var ev = document.createEvent("CustomEvent");
              ev.initCustomEvent(eventName, true, true, this._details);
              return window.dispatchEvent(ev);
          };
          // Done
          return WIDGET.Completed;
      });
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0048", 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Object", 

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

   COM_OWNER.mthADDSTRINGVALUE = function( Key, Value )
   {
      this.invoke( "AddStringValue", [ Lansa.toString( Key ), Lansa.toString( Value ) ] );
   };

   COM_OWNER.mthADDINTEGERVALUE = function( Key, Value )
   {
      this.invoke( "AddIntegerValue", [ Lansa.toString( Key ), Lansa.toInt( Value ) ] );
   };

   COM_OWNER.mthDISPATCH = function( Name )
   {
      this.invoke( "Dispatch", [ Lansa.toString( Name ) ] );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlba0048.js
