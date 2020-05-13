// -----------------------------
// -- Reusable Part: XLBA0074 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0074", 
   nm: "XWS_PayPal_Amount", 
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
   // --------------
   // -- Language --
   // --------------
   var curLanguage = "ENG";

   // -----------------------
   // -- Field Definitions --
   // -----------------------
   var Fields = 
   {
      XLB00047:
      {
         ic: 0,
         nm: "XLB00047",
         an: "XLib_NUMBER",
         ft: "P",
         ln: 30,
         dc: 9,
         lb: "Number",
         h1: "Number",
         h2: " ",
         h3: " ",
         de: "Extended Library - Number Data Type",
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0071", 
      fd: Fields, 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Currency: 
         {
            da: "rw"
         },

         Total: 
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XLBA0074", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gCurrency)
         //
         var GCURRENCY = this.createReference( "GCURRENCY", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#XLib_NUMBER) Name(#gTotal)
         //
         var GTOTAL = this.createFieldReference( "GTOTAL", Fields.XLB00047.DataClass );

         // ---------------------------
         // -- Initialize #GCURRENCY --
         // ---------------------------
         GCURRENCY.initialize();

         // ------------------------
         // -- Initialize #GTOTAL --
         // ------------------------
         GTOTAL.applyDefault();
         GTOTAL.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // DEFINE_PTY Name(Currency) Get(*AUTO #gCurrency) Set(*AUTO #gCurrency)
   //
   COM_OWNER.getCURRENCY = function()
   {
      return this.REF.GCURRENCY.get();
   };

   COM_OWNER.setCURRENCY = function( value )
   {
      this.REF.GCURRENCY.set( value );
   };

   //
   // DEFINE_PTY Name(Total) Get(*AUTO #gTotal) Set(*AUTO #gTotal)
   //
   COM_OWNER.getTOTAL = function()
   {
      return this.REF.GTOTAL.get();
   };

   COM_OWNER.setTOTAL = function( value )
   {
      this.REF.GTOTAL.set( value );
   };

   // -----------------------------
   // -- XLB00047 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XLB00047.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XLB00047 );
      };

      Lansa.createFieldClass( { co: Fields.XLB00047.DataClass, an: "PRIM_FLD", fn: "XLB00047" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0071" ],
   rp: [ "PRIM_DC.UnicodeString", "PRIM_FLD" ]
});

//# sourceURL=xlba0074.js
