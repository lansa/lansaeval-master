// -----------------------------
// -- Reusable Part: XLBA0070 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0070", 
   nm: "XWS_PayPal_Payment", 
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
      an: "XLBA0072", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         Intent: 
         {
            da: "rw"
         },

         Payer: 
         {
            da: "r"
         },

         Transactions: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddTransaction: 
         {
            ps: 
            {
               "Transaction":
               {
                  pt: "i"
               }
            }
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
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gIntent)
         //
         var GINTENT = this.createReference( "GINTENT", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#XWS_PayPal_Payer) Name(#gPayer)
         //
         var GPAYER = this.createReference( "GPAYER", "XLBA0073" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#XWS_PayPal_Transaction>) Name(#gTransactions)
         //
         var GTRANSACTIONS = this.createReference( "GTRANSACTIONS", "PRIM_LCOL" );

         // -------------------------
         // -- Initialize #GINTENT --
         // -------------------------
         GINTENT.initialize();

         // ------------------------
         // -- Initialize #GPAYER --
         // ------------------------
         GPAYER.initialize();

         // -------------------------------
         // -- Initialize #GTRANSACTIONS --
         // -------------------------------
         GTRANSACTIONS.setCollects( "XLBA0077" );
         GTRANSACTIONS.initialize();

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
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 12 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 12 );
      {

         //
         // #gIntent := 'sale'
         //
         rtn.Line( 13 );
         ref.GINTENT.set( "sale" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 14 );
      rtn.end();
   };

   //
   // mthADDTRANSACTION - AddTransaction
   //
   COM_OWNER.mthADDTRANSACTION = function( parm_TRANSACTION )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddTransaction", 16 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XWS_PayPal_Transaction) Name(#Transaction) Pass(*BY_REFERENCE)
      //
      var TRANSACTION = rtn.createDynamicParameter( "TRANSACTION" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      TRANSACTION = parm_TRANSACTION;

      //
      // MTHROUTINE Name(AddTransaction)
      //
      rtn.Line( 16 );
      {

         //
         // #gTransactions.Insert Item(#Transaction)
         //
         rtn.Line( 19 );
         ref.GTRANSACTIONS.mthINSERT( TRANSACTION );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 20 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(Intent) Get(*AUTO #gIntent) Set(*AUTO #gIntent)
   //
   COM_OWNER.getINTENT = function()
   {
      return this.REF.GINTENT.get();
   };

   COM_OWNER.setINTENT = function( value )
   {
      this.REF.GINTENT.set( value );
   };

   //
   // DEFINE_PTY Name(Payer) Get(*REFERENCE #gPayer)
   //
   COM_OWNER.getPAYER = function()
   {
      return this.REF.GPAYER;
   };

   //
   // DEFINE_PTY Name(Transactions) Get(*REFERENCE #gTransactions)
   //
   COM_OWNER.getTRANSACTIONS = function()
   {
      return this.REF.GTRANSACTIONS;
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0072", "XLBA0073" ],
   rp: [ "PRIM_DC.UnicodeString", "PRIM_LCOL" ],
   dc: [ "XLBA0077" ]
});

//# sourceURL=xlba0070.js
