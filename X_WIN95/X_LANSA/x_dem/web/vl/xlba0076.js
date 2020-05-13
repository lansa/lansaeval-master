// -----------------------------
// -- Reusable Part: XLBA0076 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0076", 
   nm: "XWS_PayPal_TransactionBase", 
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
      an: "XLBA0075", 

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
   rc: [ "XLBA0075" ]
});

//# sourceURL=xlba0076.js
