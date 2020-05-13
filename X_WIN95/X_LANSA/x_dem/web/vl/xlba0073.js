// -----------------------------
// -- Reusable Part: XLBA0073 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0073", 
   nm: "XWS_PayPal_Payer", 
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
         PaymentMethod: 
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
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gPaymentMethod)
         //
         var GPAYMENTMETHOD = this.createReference( "GPAYMENTMETHOD", "PRIM_DC", "UnicodeString" );

         // --------------------------------
         // -- Initialize #GPAYMENTMETHOD --
         // --------------------------------
         GPAYMENTMETHOD.initialize();

         // ---------------------------------------
         // -- Add Event Handlers for #COM_OWNER --
         // ---------------------------------------
         this.addEventHandler( "CREATEINSTANCE", this, evtRoutine1 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // evtRoutine1 - #COM_OWNER.CreateInstance
   //
   function evtRoutine1( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 8 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 8 );
      {

         //
         // #gPaymentMethod := 'paypal'
         //
         rtn.Line( 9 );
         ref.GPAYMENTMETHOD.set( "paypal" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 10 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(PaymentMethod) Get(*AUTO #gPaymentMethod) Set(*AUTO #gPaymentMethod)
   //
   COM_OWNER.getPAYMENTMETHOD = function()
   {
      return this.REF.GPAYMENTMETHOD.get();
   };

   COM_OWNER.setPAYMENTMETHOD = function( value )
   {
      this.REF.GPAYMENTMETHOD.set( value );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0071" ],
   rp: [ "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlba0073.js
