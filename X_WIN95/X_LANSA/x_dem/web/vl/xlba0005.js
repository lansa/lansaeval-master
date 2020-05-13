// --------------------------
// -- Web Widget: XLBA0005 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0005", 
   nm: "XWebUtil_SetTimeout", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-common] Set Timeout", 
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
      PROTOTYPE.fireOnExecute = function()
      {
         Lansa.fireEvent( this, "ONEXECUTE" );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (
          function (PROTOTYPE, WIDGET)
          {
              PROTOTYPE.SetTimeout = function (value)
              {
                  var self = this;
      
                  setTimeout(function ()
                  {
                      self.fireOnExecute();
                  }, value);
              };
      
              PROTOTYPE.onCreateInstance = function ()
              {
              };
      
              // Done
              return WIDGET.Completed;
          }
      )
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0005", 
      fe: fnEvents, 
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

   COM_OWNER.mthSETTIMEOUT = function( Milliseconds )
   {
      this.invoke( "SetTimeout", [ Lansa.toInt( Milliseconds ) ] );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlba0005.js
