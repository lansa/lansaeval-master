// -----------------------------
// -- Reusable Part: XLBA0075 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0075", 
   nm: "XWS_PayPal_CartBase", 
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
      an: "XLBA0071", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Amount: 
         {
            da: "r"
         },

         Description: 
         {
            da: "rw"
         },

         InvoiceNumber: 
         {
            da: "rw"
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

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XWS_PayPal_Amount) Name(#gAmount)
         //
         var GAMOUNT = this.createReference( "GAMOUNT", "XLBA0074" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gDescription)
         //
         var GDESCRIPTION = this.createReference( "GDESCRIPTION", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gInvoiceNumber)
         //
         var GINVOICENUMBER = this.createReference( "GINVOICENUMBER", "PRIM_DC", "UnicodeString" );

         // -------------------------
         // -- Initialize #GAMOUNT --
         // -------------------------
         GAMOUNT.initialize();

         // ------------------------------
         // -- Initialize #GDESCRIPTION --
         // ------------------------------
         GDESCRIPTION.initialize();

         // --------------------------------
         // -- Initialize #GINVOICENUMBER --
         // --------------------------------
         GINVOICENUMBER.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // DEFINE_PTY Name(Amount) Get(*REFERENCE #gAmount)
   //
   COM_OWNER.getAMOUNT = function()
   {
      return this.REF.GAMOUNT;
   };

   //
   // DEFINE_PTY Name(Description) Get(*AUTO #gDescription) Set(*AUTO #gDescription)
   //
   COM_OWNER.getDESCRIPTION = function()
   {
      return this.REF.GDESCRIPTION.get();
   };

   COM_OWNER.setDESCRIPTION = function( value )
   {
      this.REF.GDESCRIPTION.set( value );
   };

   //
   // DEFINE_PTY Name(InvoiceNumber) Get(*AUTO #gInvoiceNumber) Set(*AUTO #gInvoiceNumber)
   //
   COM_OWNER.getINVOICENUMBER = function()
   {
      return this.REF.GINVOICENUMBER.get();
   };

   COM_OWNER.setINVOICENUMBER = function( value )
   {
      this.REF.GINVOICENUMBER.set( value );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0071", "XLBA0074" ],
   rp: [ "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlba0075.js
