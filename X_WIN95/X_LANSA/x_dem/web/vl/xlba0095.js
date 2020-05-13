// -----------------------------
// -- Reusable Part: XLBA0095 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0095", 
   nm: "XDevice_SqlDb_QueryResult_Row", 
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
      },
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
      },
      STD_BLOB:
      {
         ic: 0,
         nm: "STD_BLOB",
         ft: "BL",
         ln: 0,
         dc: 0,
         lb: "Standard BLOB",
         h1: "Standard",
         h2: "BLOB",
         h3: " ",
         de: "Standard BLOB",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "LC" ]
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
         ColumnCount: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         ReadString: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               }
            }
         },

         ReadNumber: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               }
            }
         },

         ReadBoolean: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               }
            }
         },

         ReadBitmap: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               },

               "MimeType":
               {
                  pt: "i"
               }
            }
         },

         IsNull: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               }
            }
         },

         ReadBlob: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               },

               "MimeType":
               {
                  pt: "i"
               }
            }
         },

         GetColumn: 
         {
            ps: 
            {
               "Column":
               {
                  pt: "i"
               }
            }
         },

         AssertColumnExists: 
         {
            ps: 
            {
               "Column":
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
         this.addFields( "XLBA0095", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_WEB.JsonArray) Name(#gJsonArray) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GJSONARRAY" );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_JSONARRAY )
   {
      var ref = this.REF, rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_WEB.JsonArray) Name(#JsonArray) Pass(*BY_REFERENCE)
      //
      var JSONARRAY = rtn.createDynamicParameter( "JSONARRAY" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      JSONARRAY = parm_JSONARRAY;

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

         //
         // #gJsonArray <= #JsonArray
         //
         rtn.Line( 11 );
         this.setrefGJSONARRAY( JSONARRAY );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 12 );
      return rtn.retNew( this );
   };

   //
   // mthREADSTRING - ReadString
   //
   COM_OWNER.mthREADSTRING = function( parm_COLUMN )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadString", 14 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_DC.UnicodeString) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonElement) Name(#Element) Reference(*DYNAMIC)
      //
      var ELEMENT = rtn.createDynamicReference( "ELEMENT" );

      //
      // MTHROUTINE Name(ReadString)
      //
      rtn.Line( 14 );
      {

         //
         // #Element <= #COM_SELF.GetColumn( #Column )
         //
         rtn.Line( 20 );
         ELEMENT = rtn.setref( "ELEMENT", this.mthGETCOLUMN( COLUMN.get() ) );

         //
         // IF (#Element *IsNot #PRIM_WEB.JsonNull)
         //
         rtn.Line( 21 );
         if ( Lansa.isNotInstanceOf( ELEMENT, "PRIM_WEB.JsonNull" ) )
         {

            //
            // #Result := #Element.AsString
            //
            rtn.Line( 22 );
            RESULT.set( ELEMENT.mthASSTRING() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthREADNUMBER - ReadNumber
   //
   COM_OWNER.mthREADNUMBER = function( parm_COLUMN )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadNumber", 26 );

      //
      // DEFINE_MAP For(*RESULT) Class(#XLib_NUMBER) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.XLB00047.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonElement) Name(#Element) Reference(*DYNAMIC)
      //
      var ELEMENT = rtn.createDynamicReference( "ELEMENT" );

      //
      // MTHROUTINE Name(ReadNumber)
      //
      rtn.Line( 26 );
      {

         //
         // #Element <= #COM_SELF.GetColumn( #Column )
         //
         rtn.Line( 32 );
         ELEMENT = rtn.setref( "ELEMENT", this.mthGETCOLUMN( COLUMN.get() ) );

         //
         // IF (#Element *IsNot #PRIM_WEB.JsonNull)
         //
         rtn.Line( 33 );
         if ( Lansa.isNotInstanceOf( ELEMENT, "PRIM_WEB.JsonNull" ) )
         {

            //
            // #Result := #Element.AsNumber
            //
            rtn.Line( 34 );
            RESULT.set( ELEMENT.mthASNUMBER() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 36 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthREADBOOLEAN - ReadBoolean
   //
   COM_OWNER.mthREADBOOLEAN = function( parm_COLUMN )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadBoolean", 38 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BOLN) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonElement) Name(#Element) Reference(*DYNAMIC)
      //
      var ELEMENT = rtn.createDynamicReference( "ELEMENT" );

      //
      // MTHROUTINE Name(ReadBoolean)
      //
      rtn.Line( 38 );
      {

         //
         // #Element <= #COM_SELF.GetColumn( #Column )
         //
         rtn.Line( 44 );
         ELEMENT = rtn.setref( "ELEMENT", this.mthGETCOLUMN( COLUMN.get() ) );

         //
         // IF (#Element *IsNot #PRIM_WEB.JsonNull)
         //
         rtn.Line( 45 );
         if ( Lansa.isNotInstanceOf( ELEMENT, "PRIM_WEB.JsonNull" ) )
         {

            //
            // #Result := #Element.AsBoolean
            //
            rtn.Line( 46 );
            RESULT.set( ELEMENT.mthASBOOLEAN() );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 48 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthREADBITMAP - ReadBitmap
   //
   COM_OWNER.mthREADBITMAP = function( parm_COLUMN, parm_MIMETYPE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadBitmap", 50 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BMP) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MimeType)
      //
      var MIMETYPE = rtn.createParameter( "MIMETYPE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );
      MIMETYPE.set( parm_MIMETYPE );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonElement) Name(#Element) Reference(*DYNAMIC)
      //
      var ELEMENT = rtn.createDynamicReference( "ELEMENT" );

      //
      // MTHROUTINE Name(ReadBitmap)
      //
      rtn.Line( 50 );
      {

         //
         // #Element <= #COM_SELF.GetColumn( #Column )
         //
         rtn.Line( 57 );
         ELEMENT = rtn.setref( "ELEMENT", this.mthGETCOLUMN( COLUMN.get() ) );

         //
         // IF (#Element *IsNot #PRIM_WEB.JsonNull)
         //
         rtn.Line( 58 );
         if ( Lansa.isNotInstanceOf( ELEMENT, "PRIM_WEB.JsonNull" ) )
         {

            //
            // #Result <= #sys_appln.CreateBitmap( #SYS_WEB.CreateBlob( #Element.AsString #MimeType ) )
            //
            rtn.Line( 59 );
            RESULT = rtn.setref( "RESULT", Lansa.APPL().mthCREATEBITMAP( Lansa.WEB().mthCREATEBLOB( ELEMENT.mthASSTRING(), MIMETYPE.get() ) ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 61 );
      return rtn.retRef( RESULT );
   };

   //
   // mthISNULL - IsNull
   //
   COM_OWNER.mthISNULL = function( parm_COLUMN )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "IsNull", 63 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_BOLN) Name(#Result)
      //
      var RESULT = rtn.createParameter( "RESULT", "PRIM_BOLN" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // MTHROUTINE Name(IsNull)
      //
      rtn.Line( 63 );
      {

         //
         // #Result := #COM_SELF.GetColumn( #Column ) *Is #PRIM_WEB.JsonNull
         //
         rtn.Line( 67 );
         RESULT.set( Lansa.isInstanceOf( this.mthGETCOLUMN( COLUMN.get() ), "PRIM_WEB.JsonNull" ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 68 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthREADBLOB - ReadBlob
   //
   COM_OWNER.mthREADBLOB = function( parm_COLUMN, parm_MIMETYPE )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadBlob", 70 );

      //
      // DEFINE_MAP For(*RESULT) Class(#STD_BLOB) Name(#Result) Mandatory(*NULL) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#MimeType)
      //
      var MIMETYPE = rtn.createParameter( "MIMETYPE", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      RESULT = null;
      COLUMN.set( parm_COLUMN );
      MIMETYPE.set( parm_MIMETYPE );

      //
      // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#Base64String)
      //
      var BASE64STRING = rtn.createReference( "BASE64STRING", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_COM Class(#PRIM_WEB.JsonElement) Name(#Element) Reference(*DYNAMIC)
      //
      var ELEMENT = rtn.createDynamicReference( "ELEMENT" );

      // ------------------------------
      // -- Initialize #BASE64STRING --
      // ------------------------------
      BASE64STRING.initialize();

      //
      // MTHROUTINE Name(ReadBlob)
      //
      rtn.Line( 70 );
      {

         //
         // #Element <= #COM_SELF.GetColumn( #Column )
         //
         rtn.Line( 78 );
         ELEMENT = rtn.setref( "ELEMENT", this.mthGETCOLUMN( COLUMN.get() ) );

         //
         // IF (#Element *IsNot #PRIM_WEB.JsonNull)
         //
         rtn.Line( 79 );
         if ( Lansa.isNotInstanceOf( ELEMENT, "PRIM_WEB.JsonNull" ) )
         {

            //
            // #Result <= *New #STD_BLOB
            //
            rtn.Line( 80 );
            RESULT = rtn.setref( "RESULT", new Fields.STD_BLOB.DataClass() );

            //
            // #Result := #SYS_WEB.CreateBlob( #Element.AsString #MimeType )
            //
            rtn.Line( 81 );
            RESULT.set( Lansa.WEB().mthCREATEBLOB( ELEMENT.mthASSTRING(), MIMETYPE.get() ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 84 );
      return rtn.retRef( RESULT );
   };

   //
   // mthGETCOLUMNCOUNT - GetColumnCount
   //
   COM_OWNER.mthGETCOLUMNCOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetColumnCount", 86 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XLib_INT64) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.XLB00051.DataClass );

      //
      // PTYROUTINE Name(GetColumnCount)
      //
      rtn.Line( 86 );
      {

         //
         // #Result := #gJsonArray.ItemCount
         //
         rtn.Line( 89 );
         RESULT.set( ref.GJSONARRAY.getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 90 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETCOLUMN - GetColumn
   //
   COM_OWNER.mthGETCOLUMN = function( parm_COLUMN )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "GetColumn", 92 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_WEB.JsonElement) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // MTHROUTINE Name(GetColumn) Access(*PROTECT)
      //
      rtn.Line( 92 );
      {

         //
         // #COM_SELF.AssertColumnExists Column(#Column)
         //
         rtn.Line( 96 );
         this.mthASSERTCOLUMNEXISTS( COLUMN.get() );

         //
         // #Result <= #gJsonArray.ItemAt<#Column>
         //
         rtn.Line( 98 );
         RESULT = rtn.setref( "RESULT", ref.GJSONARRAY.getItemAt( COLUMN.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 99 );
      return rtn.retRef( RESULT );
   };

   //
   // mthASSERTCOLUMNEXISTS - AssertColumnExists
   //
   COM_OWNER.mthASSERTCOLUMNEXISTS = function( parm_COLUMN )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "AssertColumnExists", 101 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_INT64) Name(#Column)
      //
      var COLUMN = rtn.createFieldParameter( "COLUMN", Fields.XLB00051.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      COLUMN.set( parm_COLUMN );

      //
      // MTHROUTINE Name(AssertColumnExists) Access(*PROTECT)
      //
      rtn.Line( 101 );
      {

         //
         // IF ((#Column < 1) *Or (#Column > #COM_SELF.ColumnCount))
         //
         rtn.Line( 104 );
         if ( Lansa.or( Lansa.Number.lt( COLUMN.get(), 1 ), Lansa.Number.gt( COLUMN.get(), this.getCOLUMNCOUNT() ) ) )
         {

            //
            // #COM_SELF.FatalError Text('Column must be 1 to ' + #COM_SELF.ColumnCount.AsString)
            //
            rtn.Line( 105 );
            this.mthFATALERROR( Lansa.cat( "Column must be 1 to ", Lansa.Number.AsString( this.getCOLUMNCOUNT() ) ) );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 107 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(ColumnCount) Get(GetColumnCount)
   //
   COM_OWNER.getCOLUMNCOUNT = function()
   {
      return this.mthGETCOLUMNCOUNT();
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

   // -----------------------------
   // -- STD_BLOB Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_BLOB.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_BLOB );
      };

      Lansa.createFieldClass( { co: Fields.STD_BLOB.DataClass, an: "PRIM_FLD", fn: "STD_BLOB" } );
   }

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGJSONARRAY = function( refNew )
   {
      this.setref( "GJSONARRAY", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_FLD" ],
   dp: [ "PRIM_WEB.JsonArray", "PRIM_WEB.JsonElement", "PRIM_DC.UnicodeString" ]
});

//# sourceURL=xlba0095.js
