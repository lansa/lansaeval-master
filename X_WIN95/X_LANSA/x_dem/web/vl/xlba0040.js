// --------------------------
// -- Web Widget: XLBA0040 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0040", 
   nm: "XWebUtil_CurrentURL", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-common] Current URL", 
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

      (
          function (PROTOTYPE, WIDGET) 
          {
              PROTOTYPE.getHost = function () 
              {
                  return document.location.host;
              }
      
              PROTOTYPE.setHost = function()
              {
                  // REQUIRED DUE TO WIDGET SPEC
              }
      
              PROTOTYPE.getPath = function ()
              {
                  return document.location.pathname;
              }
      
              PROTOTYPE.setPath = function()
              {
                  // REQUIRED DUE TO WIDGET SPEC
              }
      
              PROTOTYPE.getOrigin = function ()
              {
                  return document.location.origin;
              }
      
              PROTOTYPE.setOrigin = function()
              {
                  // REQUIRED DUE TO WIDGET SPEC
              }
      
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
      nm: "XLBA0040", 
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

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setHOST( "" );
         this.setPATH( "" );
         this.setORIGIN( "" );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.getHOST = function()
   {
      return Lansa.toString( this.get( "Host" ) );
   };

   COM_OWNER.setHOST = function( value )
   {
      this.set( "Host", Lansa.toString( value ) );
   };

   COM_OWNER.getPATH = function()
   {
      return Lansa.toString( this.get( "Path" ) );
   };

   COM_OWNER.setPATH = function( value )
   {
      this.set( "Path", Lansa.toString( value ) );
   };

   COM_OWNER.getORIGIN = function()
   {
      return Lansa.toString( this.get( "Origin" ) );
   };

   COM_OWNER.setORIGIN = function( value )
   {
      this.set( "Origin", Lansa.toString( value ) );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Object" ]
});

//# sourceURL=xlba0040.js
