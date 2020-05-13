// -----------------------------
// -- Reusable Part: XLBA0103 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0103", 
   nm: "XInternal_DeviceSqlDb_QueryArgumentConverter", 
   ot: "rp", 
   tp: "Reusable Part", 
   de: "[pkg-lansa-mobile]", 
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
      XLB00051:
      {
         ic: 0,
         nm: "XLB00051",
         an: "XLib_INT64",
         ft: "I",
         ln: 8,
         dc: 0,
         lb: "Int64",
         h1: "Int64",
         h2: " ",
         h3: " ",
         de: "Extended Library - Int64 Data Type",
         dv: 0,
         ia: [ "FE", "RB" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0092", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         HasAsyncTransform: 
         {
         },

         Convert: 
         {
         },

         ConvertAsync: 
         {
         },

         TransformNextItemAsync: 
         {
         },

         ConvertToJson: 
         {
         },

         ConvertToJsonAndDispatchAsyncCompletion: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         AsyncCompleted: 
         {
            ps: 
            {
               "Result":
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

         // -------------------
         // -- Create Fields --
         // -------------------
         this.addFields( "XLBA0103", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_LCOL<#XLib_INT64>) Name(#gAsyncTransformIndexes)
         //
         var GASYNCTRANSFORMINDEXES = this.createReference( "GASYNCTRANSFORMINDEXES", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#PRIM_OBJT>) Name(#gValues)
         //
         var GVALUES = this.createReference( "GVALUES", "PRIM_LCOL" );

         // ----------------------------------------
         // -- Initialize #GASYNCTRANSFORMINDEXES --
         // ----------------------------------------
         GASYNCTRANSFORMINDEXES.setCollects( "XLB00051" );
         GASYNCTRANSFORMINDEXES.initialize();

         // -------------------------
         // -- Initialize #GVALUES --
         // -------------------------
         GVALUES.setCollects( "PRIM_OBJT" );
         GVALUES.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_INPUT )
   {
      var ref = this.REF, rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_QueryArguments) Name(#Input) Pass(*BY_REFERENCE)
      //
      var INPUT = rtn.createDynamicParameter( "INPUT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      INPUT = parm_INPUT;

      //
      // DEFINE_COM Class(#XLib_INT64) Name(#I)
      //
      var I = rtn.createFieldReference( "I", Fields.XLB00051.DataClass );

      //
      // DEFINE_COM Class(#PRIM_OBJT) Name(#Value) Reference(*DYNAMIC)
      //
      var VALUE = rtn.createDynamicReference( "VALUE" );

      //
      // DEFINE_COM Class(#XLib_INT64) Name(#Index) Reference(*DYNAMIC)
      //
      var INDEX = rtn.createDynamicReference( "INDEX" );

      // -------------------
      // -- Initialize #I --
      // -------------------
      I.initialize();

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

         //
         // BEGIN_LOOP Using(#I) To(#Input.ItemCount)
         //
         rtn.Line( 17 );
         for( var i1 = 1, step1 = 1, to1 = Lansa.toInt( INPUT.getITEMCOUNT() ); I.set( i1 ), ( ( ( step1 >= 0 ) && ( i1 <= to1 ) ) || ( ( step1 < 0 ) && ( i1 >= to1 ) ) ); i1 += step1 )
         {

            //
            // #Value <= #Input.ItemAt<#I>
            //
            rtn.Line( 18 );
            VALUE = rtn.setref( "VALUE", INPUT.getITEMAT( I.get() ) );

            //
            // #gValues.Insert Item(#Value)
            //
            rtn.Line( 19 );
            ref.GVALUES.mthINSERT( VALUE );

            //
            // IF (#Value *Is #STD_BLOB)
            //
            rtn.Line( 20 );
            if ( Lansa.isInstanceOf( VALUE, "STD_BLOB" ) )
            {

               //
               // #Index <= *New #XLib_INT64
               //
               rtn.Line( 21 );
               INDEX = rtn.setref( "INDEX", new Fields.XLB00051.DataClass() );

               //
               // #Index := #I
               //
               rtn.Line( 22 );
               INDEX.set( I.get() );

               //
               // #gAsyncTransformIndexes.Insert Item(#Index)
               //
               rtn.Line( 23 );
               ref.GASYNCTRANSFORMINDEXES.mthINSERT( INDEX );

            //
            // ENDIF 
            //
            }

         //
         // END_LOOP 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      return rtn.retNew( this );
   };

   //
   // mthHASASYNCTRANSFORM - HasAsyncTransform
   //
   COM_OWNER.mthHASASYNCTRANSFORM = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "HasAsyncTransform", 28 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BOLN) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // MTHROUTINE Name(HasAsyncTransform)
      //
      rtn.Line( 28 );
      {

         //
         // #Result := #gAsyncTransformIndexes.ItemCount > 0
         //
         rtn.Line( 31 );
         RESULT.set( Lansa.Number.gt( ref.GASYNCTRANSFORMINDEXES.getItemCount(), 0 ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 32 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthCONVERT - Convert
   //
   COM_OWNER.mthCONVERT = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "Convert", 34 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_WEB.Json) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // MTHROUTINE Name(Convert)
      //
      rtn.Line( 34 );
      {

         //
         // IF (#COM_SELF.HasAsyncTransform)
         //
         rtn.Line( 37 );
         if ( this.mthHASASYNCTRANSFORM() )
         {

            //
            // #COM_SELF.FatalError Text('The arguments has async transform and requires ConvertToAsync')
            //
            rtn.Line( 38 );
            this.mthFATALERROR( "The arguments has async transform and requires ConvertToAsync" );

         //
         // ENDIF 
         //
         }

         //
         // #Result <= #COM_SELF.ConvertToJson
         //
         rtn.Line( 41 );
         RESULT = rtn.setref( "RESULT", this.mthCONVERTTOJSON() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      return rtn.retRef( RESULT );
   };

   //
   // mthCONVERTASYNC - ConvertAsync
   //
   COM_OWNER.mthCONVERTASYNC = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ConvertAsync", 44 );

      //
      // MTHROUTINE Name(ConvertAsync)
      //
      rtn.Line( 44 );
      {

         //
         // IF (*Not #COM_SELF.HasAsyncTransform)
         //
         rtn.Line( 45 );
         if ( Lansa.not( this.mthHASASYNCTRANSFORM() ) )
         {

            //
            // #COM_SELF.FatalError Text('The arguments does not have async transformm just use Convert')
            //
            rtn.Line( 46 );
            this.mthFATALERROR( "The arguments does not have async transformm just use Convert" );

         //
         // ENDIF 
         //
         }

         //
         // #COM_SELF.TransformNextItemAsync
         //
         rtn.Line( 49 );
         this.mthTRANSFORMNEXTITEMASYNC();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 50 );
      rtn.end();
   };

   //
   // mthTRANSFORMNEXTITEMASYNC - TransformNextItemAsync
   //
   COM_OWNER.mthTRANSFORMNEXTITEMASYNC = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "TransformNextItemAsync", 52 ), mth = rtn;

      //
      // DEFINE_COM Class(#XLib_INT64) Name(#Index)
      //
      var INDEX = rtn.createFieldReference( "INDEX", Fields.XLB00051.DataClass );

      //
      // DEFINE_COM Class(#PRIM_WEB.BlobReader) Name(#Reader)
      //
      var READER = rtn.createReference( "READER", "PRIM_WEB", "BlobReader" );

      // -----------------------
      // -- Initialize #INDEX --
      // -----------------------
      INDEX.initialize();

      // ------------------------
      // -- Initialize #READER --
      // ------------------------
      READER.initialize();

      // ------------------------------------
      // -- Add Event Handlers for #READER --
      // ------------------------------------
      READER.addEventHandler( "COMPLETED", this, evtRoutine1 );

      //
      // MTHROUTINE Name(TransformNextItemAsync) Access(*PRIVATE)
      //
      rtn.Line( 52 );
      {

         //
         // #Index := #gAsyncTransformIndexes.RemoveLast
         //
         rtn.Line( 56 );
         INDEX.set( ref.GASYNCTRANSFORMINDEXES.mthREMOVELAST().get() );

         //
         // #Reader.Read Blob(#gValues<#Index> *As #STD_BLOB)
         //
         rtn.Line( 57 );
         READER.mthREAD( Lansa.cast( ref.GVALUES.get( INDEX.get() ), "STD_BLOB" ).get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 71 );
      rtn.end();

      //
      // evtRoutine1 - #Reader.Completed
      //
      function evtRoutine1( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Reader.Completed", 59, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var RESULT = parms.ref( "DATA" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Base64)
         //
         var BASE64 = rtn.createReference( "BASE64", "PRIM_DC", "UnicodeString" );

         // ------------------------
         // -- Initialize #BASE64 --
         // ------------------------
         BASE64.initialize();

         //
         // EVTROUTINE Handling(#Reader.Completed) Data(#Result)
         //
         rtn.Line( 59 );
         {

            //
            // #Base64 := #Result
            //
            rtn.Line( 62 );
            BASE64.set( RESULT.get() );

            //
            // #gValues.ReplaceAt Index(#Index) Item(#Base64)
            //
            rtn.Line( 63 );
            ref.GVALUES.mthREPLACEAT( BASE64, INDEX.get() );

            //
            // IF (#gAsyncTransformIndexes.ItemCount > 0)
            //
            rtn.Line( 65 );
            if ( Lansa.Number.gt( ref.GASYNCTRANSFORMINDEXES.getItemCount(), 0 ) )
            {

               //
               // #COM_SELF.TransformNextItemAsync
               //
               rtn.Line( 66 );
               this.mthTRANSFORMNEXTITEMASYNC();

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_SELF.ConvertToJsonAndDispatchAsyncCompletion
               //
               rtn.Line( 68 );
               this.mthCONVERTTOJSONANDDISPATCHASYNCCOMPLETION();

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 70 );
         rtn.end();
      }
   };

   //
   // mthCONVERTTOJSON - ConvertToJson
   //
   COM_OWNER.mthCONVERTTOJSON = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ConvertToJson", 73 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_WEB.Json) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonArray) Name(#JsonArray) Reference(*DYNAMIC)
      //
      var JSONARRAY = rtn.createDynamicReference( "JSONARRAY" );

      //
      // DEFINE_COM Class(#XLib_INT64) Name(#I)
      //
      var I = rtn.createFieldReference( "I", Fields.XLB00051.DataClass );

      // -------------------
      // -- Initialize #I --
      // -------------------
      I.initialize();

      //
      // MTHROUTINE Name(ConvertToJson) Access(*PRIVATE)
      //
      rtn.Line( 73 );
      {

         //
         // #Result <= *New #PRIM_WEB.Json
         //
         rtn.Line( 79 );
         RESULT = rtn.setref( "RESULT", Lansa.createComponent( "PRIM_WEB", "Json" ) );

         //
         // #JsonArray <= #Result.CreateRootArray
         //
         rtn.Line( 80 );
         JSONARRAY = rtn.setref( "JSONARRAY", RESULT.mthCREATEROOTARRAY() );

         //
         // FOR Each(#Value) In(#gValues)
         //
         rtn.Line( 82 );
         {
            var l1 = ref.GVALUES.createIterator();

            while( l1.step() )
            {
               var VALUE = rtn.setref( "VALUE", l1.item() );

               //
               // IF (#Value *Is #PRIM_DC.UnicodeString)
               //
               rtn.Line( 83 );
               if ( Lansa.isInstanceOf( VALUE, "PRIM_DC.UnicodeString" ) )
               {

                  //
                  // #JsonArray.InsertString String(#Value *As #PRIM_DC.UnicodeString)
                  //
                  rtn.Line( 84 );
                  JSONARRAY.mthINSERTSTRING( Lansa.cast( VALUE, "PRIM_DC.UnicodeString" ).get() );

               //
               // ELSE 
               //
               }
               else
               {

                  //
                  // IF (#Value *Is #XLib_NUMBER)
                  //
                  rtn.Line( 86 );
                  if ( Lansa.isInstanceOf( VALUE, "XLB00047" ) )
                  {

                     //
                     // #JsonArray.InsertNumber Number(#Value *As #XLib_NUMBER)
                     //
                     rtn.Line( 87 );
                     JSONARRAY.mthINSERTNUMBER( Lansa.cast( VALUE, "XLB00047" ).get() );

                  //
                  // ELSE 
                  //
                  }
                  else
                  {

                     //
                     // IF (#Value *Is #PRIM_BOLN)
                     //
                     rtn.Line( 89 );
                     if ( Lansa.isInstanceOf( VALUE, "PRIM_BOLN" ) )
                     {

                        //
                        // #JsonArray.InsertBoolean Boolean(#Value *As #PRIM_BOLN)
                        //
                        rtn.Line( 90 );
                        JSONARRAY.mthINSERTBOOLEAN( Lansa.cast( VALUE, "PRIM_BOLN" ).get() );

                     //
                     // ENDIF 
                     //
                     }

                  //
                  // ENDIF 
                  //
                  }

               //
               // ENDIF 
               //
               }

            //
            // ENDFOR 
            //
            rtn.Line( 94 );
            }

            l1.end();
            rtn.deleteReference( "VALUE" );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 95 );
      return rtn.retRef( RESULT );
   };

   //
   // mthCONVERTTOJSONANDDISPATCHASYNCCOMPLETION - ConvertToJsonAndDispatchAsyncCompletion
   //
   COM_OWNER.mthCONVERTTOJSONANDDISPATCHASYNCCOMPLETION = function()
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ConvertToJsonAndDispatchAsyncCompletion", 97 );

      //
      // DEFINE_COM Class(#PRIM_WEB.Json) Name(#Json) Reference(*DYNAMIC)
      //
      var JSON = rtn.createDynamicReference( "JSON" );

      //
      // MTHROUTINE Name(ConvertToJsonAndDispatchAsyncCompletion) Access(*PRIVATE)
      //
      rtn.Line( 97 );
      {

         //
         // #Json <= #COM_SELF.ConvertToJson
         //
         rtn.Line( 100 );
         JSON = rtn.setref( "JSON", this.mthCONVERTTOJSON() );

         //
         // SIGNAL Event(AsyncCompleted) Result(#Json)
         //
         rtn.Line( 102 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createReference( "RESULT", "PRIM_WEB", "Json" );

            evtParms.ref( "RESULT" ).set( JSON.get() );

            this.fireEvent( "ASYNCCOMPLETED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 103 );
      rtn.end();
   };

   // -----------------------------
   // -- XLB00051 Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.XLB00051.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.XLB00051 );
      };

      Lansa.createFieldClass( { co: Fields.XLB00051.DataClass, an: "PRIM_FLD", fn: "XLB00051" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_LCOL", "PRIM_FLD" ],
   dp: [ "PRIM_OBJT", "PRIM_WEB.BlobReader", "PRIM_DC.UnicodeString", "PRIM_WEB.JsonArray", "PRIM_WEB.Json" ]
});

//# sourceURL=xlba0103.js
