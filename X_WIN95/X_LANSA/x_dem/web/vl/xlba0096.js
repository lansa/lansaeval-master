// -----------------------------
// -- Reusable Part: XLBA0096 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0096", 
   nm: "XDevice_SqlDb_QueryResult", 
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
      STD_INT:
      {
         ic: 0,
         nm: "STD_INT",
         ft: "I",
         ln: 4,
         dc: 0,
         ec: "J",
         lb: "Std Integer",
         h1: "Standard",
         h2: "Integer",
         h3: "Field",
         de: "Standard Integer field",
         dv: 0,
         ia: [ "FE", "RB" ]
      },
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

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         RowCount: 
         {
            da: "na"
         },

         RowAt: 
         {
            da: "na"
         },

         ResultCount: 
         {
            da: "na"
         },

         ResultAt: 
         {
            da: "na"
         },

         Status: 
         {
            da: "r"
         },

         Message: 
         {
            da: "r"
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
         this.addFields( "XLBA0096", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_LCOL<#XDevice_SqlDb_QueryResult_Row>) Name(#gRows)
         //
         var GROWS = this.createReference( "GROWS", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#XDevice_SqlDb_QueryResult>) Name(#gChildResults) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GCHILDRESULTS" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gStatus)
         //
         var GSTATUS = this.createReference( "GSTATUS", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gMessage)
         //
         var GMESSAGE = this.createReference( "GMESSAGE", "PRIM_DC", "UnicodeString" );

         // -----------------------
         // -- Initialize #GROWS --
         // -----------------------
         GROWS.setCollects( "XLBA0095" );
         GROWS.initialize();

         // -------------------------
         // -- Initialize #GSTATUS --
         // -------------------------
         GSTATUS.initialize();

         // --------------------------
         // -- Initialize #GMESSAGE --
         // --------------------------
         GMESSAGE.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_JSON, parm_CHILDRESULTS, parm_STATUS, parm_MESSAGE )
   {
      var ref = this.REF, rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_WEB.Json) Name(#Json) Pass(*BY_REFERENCE)
      //
      var JSON = rtn.createDynamicParameter( "JSON" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_LCOL<#XDevice_SqlDb_QueryResult>) Name(#ChildResults) Pass(*BY_REFERENCE)
      //
      var CHILDRESULTS = rtn.createDynamicParameter( "CHILDRESULTS" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Status)
      //
      var STATUS = rtn.createParameter( "STATUS", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Message)
      //
      var MESSAGE = rtn.createParameter( "MESSAGE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      JSON = parm_JSON;
      CHILDRESULTS = parm_CHILDRESULTS;
      STATUS.set( parm_STATUS );
      MESSAGE.set( parm_MESSAGE );

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

         //
         // IF (#Json *IsNot *Null)
         //
         rtn.Line( 22 );
         if ( ( JSON != null ) )
         {

            //
            // FOR Each(#JsonRow) In(#Json.RootItem)
            //
            rtn.Line( 23 );
            {
               var l1 = JSON.getRootItem().createIterator();

               while( l1.step() )
               {
                  var JSONROW = rtn.setref( "JSONROW", l1.item() );

                  //
                  // #gRows.Insert Item(*New #XDevice_SqlDb_QueryResult_Row.Create( (#JsonRow *As #PRIM_WEB.JsonArray) ))
                  //
                  rtn.Line( 24 );
                  ref.GROWS.mthINSERT( Lansa.createAs( "XLBA0095", undefined, "mthCREATE", [ Lansa.cast( JSONROW, "PRIM_WEB.JsonArray" ) ] ) );

               //
               // ENDFOR 
               //
               rtn.Line( 25 );
               }

               l1.end();
               rtn.deleteReference( "JSONROW" );
            }

         //
         // ENDIF 
         //
         }

         //
         // IF (#ChildResults *IsNot *NUll)
         //
         rtn.Line( 28 );
         if ( ( CHILDRESULTS != null ) )
         {

            //
            // #gChildResults <= #ChildResults
            //
            rtn.Line( 29 );
            this.setrefGCHILDRESULTS( CHILDRESULTS );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // #gChildResults <= *New #PRIM_LCOL<#XDevice_SqlDb_QueryResult>
            //
            rtn.Line( 31 );
            this.setrefGCHILDRESULTS( Lansa.createComponent( "PRIM_LCOL" ).typedBy( [ type1 ] ) );

         //
         // ENDIF 
         //
         }

         //
         // #gStatus := #Status
         //
         rtn.Line( 34 );
         ref.GSTATUS.set( STATUS.get() );

         //
         // #gMessage := #Message
         //
         rtn.Line( 35 );
         ref.GMESSAGE.set( MESSAGE.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 36 );
      return rtn.retNew( this );
   };

   //
   // mthGETROWCOUNT - GetRowCount
   //
   COM_OWNER.mthGETROWCOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetRowCount", 38 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#STD_INT) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.STD_INT.DataClass );

      //
      // PTYROUTINE Name(GetRowCount)
      //
      rtn.Line( 38 );
      {

         //
         // #Result := #gRows.ItemCount
         //
         rtn.Line( 41 );
         RESULT.set( ref.GROWS.getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETROWAT - GetRowAt
   //
   COM_OWNER.mthGETROWAT = function( parm_INDEX )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetRowAt", 44 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XDevice_SqlDb_QueryResult_Row) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Index)
      //
      var INDEX = rtn.createFieldParameter( "INDEX", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      INDEX.set( parm_INDEX );

      //
      // PTYROUTINE Name(GetRowAt)
      //
      rtn.Line( 44 );
      {

         //
         // IF ((#Index < 1) *Or (#Index > #gRows.ItemCount))
         //
         rtn.Line( 48 );
         if ( Lansa.or( Lansa.Number.lt( INDEX.get(), 1 ), Lansa.Number.gt( INDEX.get(), ref.GROWS.getItemCount() ) ) )
         {

            //
            // #COM_SELF.FatalError Text('Row ' + #Index.AsString + ' is out-of-bounds, valid row is 1 to ' + #gRows.ItemCount.AsString)
            //
            rtn.Line( 49 );
            this.mthFATALERROR( Lansa.cat( Lansa.cat( Lansa.cat( "Row ", Lansa.Number.AsString( INDEX.get() ) ), " is out-of-bounds, valid row is 1 to " ), Lansa.Number.AsString( ref.GROWS.getItemCount() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // #Result <= #gRows<#Index>
         //
         rtn.Line( 52 );
         RESULT = rtn.setref( "RESULT", ref.GROWS.get( INDEX.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 53 );
      return rtn.retRef( RESULT );
   };

   //
   // mthGETRESULTCOUNT - GetResultCount
   //
   COM_OWNER.mthGETRESULTCOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetResultCount", 55 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XLib_INT64) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.XLB00051.DataClass );

      //
      // PTYROUTINE Name(GetResultCount)
      //
      rtn.Line( 55 );
      {

         //
         // #Result := #gChildResults.ItemCount
         //
         rtn.Line( 58 );
         RESULT.set( ref.GCHILDRESULTS.getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETRESULTAT - GetResultAt
   //
   COM_OWNER.mthGETRESULTAT = function( parm_INDEX )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetResultAt", 61 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XDevice_SqlDb_QueryResult) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Index)
      //
      var INDEX = rtn.createFieldParameter( "INDEX", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      INDEX.set( parm_INDEX );

      //
      // PTYROUTINE Name(GetResultAt)
      //
      rtn.Line( 61 );
      {

         //
         // IF ((#Index < 1) *Or (#Index > #gChildResults.ItemCount))
         //
         rtn.Line( 65 );
         if ( Lansa.or( Lansa.Number.lt( INDEX.get(), 1 ), Lansa.Number.gt( INDEX.get(), ref.GCHILDRESULTS.getItemCount() ) ) )
         {

            //
            // #COM_SELF.FatalError Text('Result ' + #Index.AsString + ' is out-of-bounds, valid row is 1 to ' + #gChildResults.ItemCount.AsString)
            //
            rtn.Line( 66 );
            this.mthFATALERROR( Lansa.cat( Lansa.cat( Lansa.cat( "Result ", Lansa.Number.AsString( INDEX.get() ) ), " is out-of-bounds, valid row is 1 to " ), Lansa.Number.AsString( ref.GCHILDRESULTS.getItemCount() ) ) );

         //
         // ENDIF 
         //
         }

         //
         // #Result <= #gChildResults<#Index>
         //
         rtn.Line( 69 );
         RESULT = rtn.setref( "RESULT", ref.GCHILDRESULTS.get( INDEX.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 70 );
      return rtn.retRef( RESULT );
   };

   //
   // DEFINE_PTY Name(RowCount) Get(GetRowCount)
   //
   COM_OWNER.getROWCOUNT = function()
   {
      return this.mthGETROWCOUNT();
   };

   //
   // DEFINE_PTY Name(RowAt) Get(GetRowAt)
   //
   COM_OWNER.get = COM_OWNER.getROWAT = function( KEY_1 )
   {
      return this.mthGETROWAT( KEY_1 );
   };

   //
   // DEFINE_PTY Name(ResultCount) Get(GetResultCount)
   //
   COM_OWNER.getRESULTCOUNT = function()
   {
      return this.mthGETRESULTCOUNT();
   };

   //
   // DEFINE_PTY Name(ResultAt) Get(GetResultAt)
   //
   COM_OWNER.getRESULTAT = function( KEY_1 )
   {
      return this.mthGETRESULTAT( KEY_1 );
   };

   //
   // DEFINE_PTY Name(Status) Get(*AUTO #gStatus)
   //
   COM_OWNER.getSTATUS = function()
   {
      return this.REF.GSTATUS.get();
   };

   //
   // DEFINE_PTY Name(Message) Get(*Auto #gMessage)
   //
   COM_OWNER.getMESSAGE = function()
   {
      return this.REF.GMESSAGE.get();
   };

   // ----------------------------
   // -- STD_INT Member Classes --
   // ----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_INT.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_INT );
      };

      Lansa.createFieldClass( { co: Fields.STD_INT.DataClass, an: "PRIM_FLD", fn: "STD_INT" } );
   }

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

   // -----------------------------------
   // -- Parameterized Type Parameters --
   // -----------------------------------
   var 
      type1 = { p: "XLBA0096" };

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGCHILDRESULTS = function( refNew )
   {
      this.setref( "GCHILDRESULTS", refNew );

      if ( this.REF.GCHILDRESULTS != null )
      {
         // -------------------------------
         // -- Initialize #GCHILDRESULTS --
         // -------------------------------
         this.REF.GCHILDRESULTS.setCollects( "XLBA0096" );
      }
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_LCOL", "PRIM_DC.UnicodeString", "PRIM_FLD" ],
   dc: [ "XLBA0095", "XLBA0096" ],
   dp: [ "PRIM_LCOL" ]
});

//# sourceURL=xlba0096.js
