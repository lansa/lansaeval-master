// -----------------------------
// -- Reusable Part: XLBA0097 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0097", 
   nm: "XDevice_SqlDb_QueryArguments", 
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
         ItemCount: 
         {
            da: "na"
         },

         ItemAt: 
         {
            da: "na"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddString: 
         {
            ps: 
            {
               "String":
               {
                  pt: "i"
               }
            }
         },

         AddNumber: 
         {
            ps: 
            {
               "Number":
               {
                  pt: "i"
               }
            }
         },

         AddBoolean: 
         {
            ps: 
            {
               "Boolean":
               {
                  pt: "i"
               }
            }
         },

         AddBlob: 
         {
            ps: 
            {
               "Blob":
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
         this.addFields( "XLBA0097", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_LCOL<#PRIM_OBJT>) Name(#gValues)
         //
         var GVALUES = this.createReference( "GVALUES", "PRIM_LCOL" );

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
   COM_OWNER.mthCREATE = function()
   {
      var rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 10 );
      return rtn.retNew( this );
   };

   //
   // mthADDSTRING - AddString
   //
   COM_OWNER.mthADDSTRING = function( parm_STRING )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddString", 12 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#String)
      //
      var STRING = rtn.createParameter( "STRING", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      STRING.set( parm_STRING );

      //
      // MTHROUTINE Name(AddString)
      //
      rtn.Line( 12 );
      {

         //
         // #gValues.Insert( #String )
         //
         rtn.Line( 15 );
         ref.GVALUES.mthINSERT( STRING );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 16 );
      rtn.end();
   };

   //
   // mthADDNUMBER - AddNumber
   //
   COM_OWNER.mthADDNUMBER = function( parm_NUMBER )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddNumber", 18 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XLib_NUMBER) Name(#Number)
      //
      var NUMBER = rtn.createFieldParameter( "NUMBER", Fields.XLB00047.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      NUMBER.set( parm_NUMBER );

      //
      // MTHROUTINE Name(AddNumber)
      //
      rtn.Line( 18 );
      {

         //
         // #gValues.Insert( #Number )
         //
         rtn.Line( 21 );
         ref.GVALUES.mthINSERT( NUMBER );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      rtn.end();
   };

   //
   // mthADDBOOLEAN - AddBoolean
   //
   COM_OWNER.mthADDBOOLEAN = function( parm_BOOLEAN )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddBoolean", 24 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_BOLN) Name(#Boolean)
      //
      var BOOLEAN = rtn.createParameter( "BOOLEAN", "PRIM_BOLN" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      BOOLEAN.set( parm_BOOLEAN );

      //
      // MTHROUTINE Name(AddBoolean)
      //
      rtn.Line( 24 );
      {

         //
         // #gValues.Insert( #Boolean )
         //
         rtn.Line( 27 );
         ref.GVALUES.mthINSERT( BOOLEAN );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      rtn.end();
   };

   //
   // mthADDBLOB - AddBlob
   //
   COM_OWNER.mthADDBLOB = function( parm_BLOB )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddBlob", 30 );

      //
      // DEFINE_MAP For(*INPUT) Class(#STD_BLOB) Name(#Blob)
      //
      var BLOB = rtn.createFieldParameter( "BLOB", Fields.STD_BLOB.DataClass );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      BLOB.set( parm_BLOB );

      //
      // MTHROUTINE Name(AddBlob)
      //
      rtn.Line( 30 );
      {

         //
         // #gValues.Insert( #Blob )
         //
         rtn.Line( 33 );
         ref.GVALUES.mthINSERT( BLOB );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 34 );
      rtn.end();
   };

   //
   // mthGETITEMCOUNT - GetItemCount
   //
   COM_OWNER.mthGETITEMCOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetItemCount", 36 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XLib_INT64) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.XLB00051.DataClass );

      //
      // PTYROUTINE Name(GetItemCount)
      //
      rtn.Line( 36 );
      {

         //
         // #Result := #gValues.ItemCount
         //
         rtn.Line( 39 );
         RESULT.set( ref.GVALUES.getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 40 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETITEMATINDEX - GetItemAtIndex
   //
   COM_OWNER.mthGETITEMATINDEX = function( parm_INDEX )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetItemAtIndex", 42 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#PRIM_OBJT) Name(#Result) Pass(*BY_REFERENCE)
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
      // PTYROUTINE Name(GetItemAtIndex)
      //
      rtn.Line( 42 );
      {

         //
         // #Result <= #gValues<#Index>
         //
         rtn.Line( 46 );
         RESULT = rtn.setref( "RESULT", ref.GVALUES.get( INDEX.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 47 );
      return rtn.retRef( RESULT );
   };

   //
   // DEFINE_PTY Name(ItemCount) Get(GetItemCount)
   //
   COM_OWNER.getITEMCOUNT = function()
   {
      return this.mthGETITEMCOUNT();
   };

   //
   // DEFINE_PTY Name(ItemAt) Get(GetItemAtIndex)
   //
   COM_OWNER.getITEMAT = function( KEY_1 )
   {
      return this.mthGETITEMATINDEX( KEY_1 );
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
   rp: [ "PRIM_LCOL", "PRIM_FLD" ]
});

//# sourceURL=xlba0097.js
