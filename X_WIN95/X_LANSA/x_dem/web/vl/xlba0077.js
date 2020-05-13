// -----------------------------
// -- Reusable Part: XLBA0077 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0077", 
   nm: "XWS_PayPal_Transaction", 
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
      an: "XLBA0076", 

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

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0076" ]
});

//# sourceURL=xlba0077.js
