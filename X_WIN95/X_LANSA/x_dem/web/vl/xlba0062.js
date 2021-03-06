﻿// -----------------------------
// -- Reusable Part: XLBA0062 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0062", 
   nm: "XInternal_DynScript_PayPalCheckout", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-integration-lib]", 
   tl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0061", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ScriptId: 
         {
         },

         ScriptUrl: 
         {
         }
      },

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

   //
   // mthSCRIPTID - ScriptId
   //
   COM_OWNER.mthSCRIPTID = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ScriptId", 4 );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(Result) For(*RESULT)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // MTHROUTINE Name(ScriptId) Options(*REDEFINE) Access(*PROTECT)
      //
      rtn.Line( 4 );
      {

         //
         // #Result := 'paypal-checkout'
         //
         rtn.Line( 5 );
         RESULT.set( "paypal-checkout" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 6 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthSCRIPTURL - ScriptUrl
   //
   COM_OWNER.mthSCRIPTURL = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ScriptUrl", 8 );

      //
      // DEFINE_MAP Class(#PRIM_DC.UnicodeString) Name(Result) For(*RESULT)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // MTHROUTINE Name(ScriptUrl) Options(*REDEFINE) Access(*PROTECT)
      //
      rtn.Line( 8 );
      {

         //
         // #Result := 'https://www.paypalobjects.com/api/checkout.js'
         //
         rtn.Line( 9 );
         RESULT.set( "https://www.paypalobjects.com/api/checkout.js" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 10 );
      return rtn.retVal( RESULT.get() );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0061" ]
});

//# sourceURL=xlba0062.js
