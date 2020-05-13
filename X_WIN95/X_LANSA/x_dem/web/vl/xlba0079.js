// -----------------------------
// -- Reusable Part: XLBA0079 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0079", 
   nm: "XInternal_PayPal_JsonGenerator", 
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
      an: "PRIM_OBJT", 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         GeneratePayment: 
         {
            ps: 
            {
               "Writer":
               {
                  pt: "i"
               },

               "MemberName":
               {
                  pt: "i"
               },

               "Payment":
               {
                  pt: "i"
               }
            }
         },

         GeneratePaymentPayer: 
         {
            ps: 
            {
               "Writer":
               {
                  pt: "i"
               },

               "MemberName":
               {
                  pt: "i"
               },

               "Payer":
               {
                  pt: "i"
               }
            }
         },

         GeneratePaymentTransactions: 
         {
            ps: 
            {
               "Writer":
               {
                  pt: "i"
               },

               "MemberName":
               {
                  pt: "i"
               },

               "Transactions":
               {
                  pt: "i"
               }
            }
         },

         GeneratePaymentTransaction: 
         {
            ps: 
            {
               "Writer":
               {
                  pt: "i"
               },

               "MemberName":
               {
                  pt: "i"
               },

               "Transaction":
               {
                  pt: "i"
               }
            }
         },

         GeneratePaymentTransactionAmount: 
         {
            ps: 
            {
               "Writer":
               {
                  pt: "i"
               },

               "MemberName":
               {
                  pt: "i"
               },

               "Amount":
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
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthGENERATEPAYMENT - GeneratePayment
   //
   COM_OWNER.mthGENERATEPAYMENT = function( parm_WRITER, parm_MEMBERNAME, parm_PAYMENT )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GeneratePayment", 4 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XUtil_JsonWriter) Name(#Writer) Pass(*BY_REFERENCE)
      //
      var WRITER = rtn.createDynamicParameter( "WRITER" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MemberName) Mandatory('')
      //
      var MEMBERNAME = rtn.createParameter( "MEMBERNAME", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XWS_PayPal_Payment) Name(#Payment) Pass(*BY_REFERENCE)
      //
      var PAYMENT = rtn.createDynamicParameter( "PAYMENT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      WRITER = parm_WRITER;
      MEMBERNAME.set( ( parm_MEMBERNAME === undefined )  ?  ( "" ) : ( parm_MEMBERNAME ) );
      PAYMENT = parm_PAYMENT;

      //
      // MTHROUTINE Name(GeneratePayment)
      //
      rtn.Line( 4 );
      {

         //
         // #Writer.BeginObject Name(#MemberName)
         //
         rtn.Line( 9 );
         WRITER.mthBEGINOBJECT( MEMBERNAME.get() );

         //
         // #Writer.String Name('intent') Value(#Payment.Intent)
         //
         rtn.Line( 11 );
         WRITER.mthSTRING( PAYMENT.getINTENT(), "intent" );

         //
         // #COM_SELF.GeneratePaymentPayer Writer(#Writer) Membername('payer') Payer(#Payment.Payer)
         //
         rtn.Line( 12 );
         this.mthGENERATEPAYMENTPAYER( WRITER, "payer", PAYMENT.getPAYER() );

         //
         // #COM_SELF.GeneratePaymentTransactions Writer(#Writer) Membername('transactions') Transactions(#Payment.Transactions)
         //
         rtn.Line( 13 );
         this.mthGENERATEPAYMENTTRANSACTIONS( WRITER, "transactions", PAYMENT.getTRANSACTIONS() );

         //
         // #Writer.EndObject
         //
         rtn.Line( 15 );
         WRITER.mthENDOBJECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      rtn.end();
   };

   //
   // mthGENERATEPAYMENTPAYER - GeneratePaymentPayer
   //
   COM_OWNER.mthGENERATEPAYMENTPAYER = function( parm_WRITER, parm_MEMBERNAME, parm_PAYER )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GeneratePaymentPayer", 18 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XUtil_JsonWriter) Name(#Writer) Pass(*BY_REFERENCE)
      //
      var WRITER = rtn.createDynamicParameter( "WRITER" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MemberName) Mandatory('')
      //
      var MEMBERNAME = rtn.createParameter( "MEMBERNAME", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XWS_PayPal_Payer) Name(#Payer) Pass(*BY_REFERENCE)
      //
      var PAYER = rtn.createDynamicParameter( "PAYER" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      WRITER = parm_WRITER;
      MEMBERNAME.set( ( parm_MEMBERNAME === undefined )  ?  ( "" ) : ( parm_MEMBERNAME ) );
      PAYER = parm_PAYER;

      //
      // MTHROUTINE Name(GeneratePaymentPayer) Access(*PRIVATE)
      //
      rtn.Line( 18 );
      {

         //
         // #Writer.BeginObject Name(#MemberName)
         //
         rtn.Line( 23 );
         WRITER.mthBEGINOBJECT( MEMBERNAME.get() );

         //
         // #Writer.String Name('payment_method') Value(#Payer.PaymentMethod)
         //
         rtn.Line( 25 );
         WRITER.mthSTRING( PAYER.getPAYMENTMETHOD(), "payment_method" );

         //
         // #Writer.EndObject
         //
         rtn.Line( 27 );
         WRITER.mthENDOBJECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      rtn.end();
   };

   //
   // mthGENERATEPAYMENTTRANSACTIONS - GeneratePaymentTransactions
   //
   COM_OWNER.mthGENERATEPAYMENTTRANSACTIONS = function( parm_WRITER, parm_MEMBERNAME, parm_TRANSACTIONS )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GeneratePaymentTransactions", 30 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XUtil_JsonWriter) Name(#Writer) Pass(*BY_REFERENCE)
      //
      var WRITER = rtn.createDynamicParameter( "WRITER" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MemberName) Mandatory('')
      //
      var MEMBERNAME = rtn.createParameter( "MEMBERNAME", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_LCOL<#XWS_PayPal_Transaction>) Name(#Transactions) Pass(*BY_REFERENCE)
      //
      var TRANSACTIONS = rtn.createDynamicParameter( "TRANSACTIONS" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      WRITER = parm_WRITER;
      MEMBERNAME.set( ( parm_MEMBERNAME === undefined )  ?  ( "" ) : ( parm_MEMBERNAME ) );
      TRANSACTIONS = parm_TRANSACTIONS;

      //
      // MTHROUTINE Name(GeneratePaymentTransactions) Access(*PRIVATE)
      //
      rtn.Line( 30 );
      {

         //
         // #Writer.BeginArray Name(#MemberName)
         //
         rtn.Line( 35 );
         WRITER.mthBEGINARRAY( MEMBERNAME.get() );

         //
         // FOR Each(#Transaction) In(#Transactions)
         //
         rtn.Line( 37 );
         {
            var l1 = TRANSACTIONS.createIterator();

            while( l1.step() )
            {
               var TRANSACTION = rtn.setref( "TRANSACTION", l1.item() );

               //
               // #COM_SELF.GeneratePaymentTransaction Transaction(#Transaction) Writer(#Writer)
               //
               rtn.Line( 38 );
               this.mthGENERATEPAYMENTTRANSACTION( WRITER, undefined, TRANSACTION );

            //
            // ENDFOR 
            //
            rtn.Line( 39 );
            }

            l1.end();
            rtn.deleteReference( "TRANSACTION" );
         }

         //
         // #Writer.EndArray
         //
         rtn.Line( 41 );
         WRITER.mthENDARRAY();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // mthGENERATEPAYMENTTRANSACTION - GeneratePaymentTransaction
   //
   COM_OWNER.mthGENERATEPAYMENTTRANSACTION = function( parm_WRITER, parm_MEMBERNAME, parm_TRANSACTION )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GeneratePaymentTransaction", 44 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XUtil_JsonWriter) Name(#Writer) Pass(*BY_REFERENCE)
      //
      var WRITER = rtn.createDynamicParameter( "WRITER" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MemberName) Mandatory('')
      //
      var MEMBERNAME = rtn.createParameter( "MEMBERNAME", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XWS_PayPal_Transaction) Name(#Transaction) Pass(*BY_REFERENCE)
      //
      var TRANSACTION = rtn.createDynamicParameter( "TRANSACTION" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      WRITER = parm_WRITER;
      MEMBERNAME.set( ( parm_MEMBERNAME === undefined )  ?  ( "" ) : ( parm_MEMBERNAME ) );
      TRANSACTION = parm_TRANSACTION;

      //
      // MTHROUTINE Name(GeneratePaymentTransaction) Access(*PRIVATE)
      //
      rtn.Line( 44 );
      {

         //
         // #Writer.BeginObject Name(#MemberName)
         //
         rtn.Line( 49 );
         WRITER.mthBEGINOBJECT( MEMBERNAME.get() );

         //
         // #Writer.String Name('description') Value(#Transaction.Description)
         //
         rtn.Line( 51 );
         WRITER.mthSTRING( TRANSACTION.getDESCRIPTION(), "description" );

         //
         // #Writer.String Name('invoice_number') Value(#Transaction.InvoiceNumber)
         //
         rtn.Line( 52 );
         WRITER.mthSTRING( TRANSACTION.getINVOICENUMBER(), "invoice_number" );

         //
         // #COM_SELF.GeneratePaymentTransactionAmount Amount(#Transaction.Amount) Membername('amount') Writer(#Writer)
         //
         rtn.Line( 54 );
         this.mthGENERATEPAYMENTTRANSACTIONAMOUNT( WRITER, "amount", TRANSACTION.getAMOUNT() );

         //
         // #Writer.EndObject
         //
         rtn.Line( 56 );
         WRITER.mthENDOBJECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 57 );
      rtn.end();
   };

   //
   // mthGENERATEPAYMENTTRANSACTIONAMOUNT - GeneratePaymentTransactionAmount
   //
   COM_OWNER.mthGENERATEPAYMENTTRANSACTIONAMOUNT = function( parm_WRITER, parm_MEMBERNAME, parm_AMOUNT )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "GeneratePaymentTransactionAmount", 59 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XUtil_JsonWriter) Name(#Writer) Pass(*BY_REFERENCE)
      //
      var WRITER = rtn.createDynamicParameter( "WRITER" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MemberName) Mandatory('')
      //
      var MEMBERNAME = rtn.createParameter( "MEMBERNAME", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XWS_PayPal_Amount) Name(#Amount) Pass(*BY_REFERENCE)
      //
      var AMOUNT = rtn.createDynamicParameter( "AMOUNT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      WRITER = parm_WRITER;
      MEMBERNAME.set( ( parm_MEMBERNAME === undefined )  ?  ( "" ) : ( parm_MEMBERNAME ) );
      AMOUNT = parm_AMOUNT;

      //
      // MTHROUTINE Name(GeneratePaymentTransactionAmount) Access(*PRIVATE)
      //
      rtn.Line( 59 );
      {

         //
         // #Writer.BeginObject Name(#MemberName)
         //
         rtn.Line( 64 );
         WRITER.mthBEGINOBJECT( MEMBERNAME.get() );

         //
         // #Writer.String Name('total') Value(#Amount.Total.AsString)
         //
         rtn.Line( 66 );
         WRITER.mthSTRING( Lansa.Number.AsString( AMOUNT.getTOTAL() ), "total" );

         //
         // #Writer.String Name('currency') Value(#Amount.Currency)
         //
         rtn.Line( 67 );
         WRITER.mthSTRING( AMOUNT.getCURRENCY(), "currency" );

         //
         // #Writer.EndObject
         //
         rtn.Line( 69 );
         WRITER.mthENDOBJECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlba0079.js
