// -----------------------------
// -- Reusable Part: XLBA0098 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0098", 
   nm: "XDevice_SqlDb_Query", 
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

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         QueryCount: 
         {
            da: "na"
         },

         QueryAt: 
         {
            da: "na"
         },

         Sql: 
         {
            da: "rw"
         },

         Arguments: 
         {
            da: "r"
         },

         Tag: 
         {
            da: "rw"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         AddQuery: 
         {
            ps: 
            {
               "Query":
               {
                  pt: "i"
               }
            }
         },

         AddQueryString: 
         {
            ps: 
            {
               "String":
               {
                  pt: "i"
               },

               "Tag":
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
         this.addFields( "XLBA0098", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XDevice_SqlDb) Name(#gDb) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GDB" );

         //
         // DEFINE_COM Class(#PRIM_LCOL<#XDevice_SqlDb_Query>) Name(#gChildQueries)
         //
         var GCHILDQUERIES = this.createReference( "GCHILDQUERIES", "PRIM_LCOL" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gSql)
         //
         var GSQL = this.createReference( "GSQL", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#XDevice_SqlDb_QueryArguments) Name(#gArgs) Reference(*DYNAMIC)
         //
         this.createDynamicReference( "GARGS" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gTag)
         //
         var GTAG = this.createReference( "GTAG", "PRIM_DC", "UnicodeString" );

         // -------------------------------
         // -- Initialize #GCHILDQUERIES --
         // -------------------------------
         GCHILDQUERIES.setCollects( "XLBA0098" );
         GCHILDQUERIES.initialize();

         // ----------------------
         // -- Initialize #GSQL --
         // ----------------------
         GSQL.initialize();

         // ----------------------
         // -- Initialize #GTAG --
         // ----------------------
         GTAG.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCREATE - Create
   //
   COM_OWNER.mthCREATE = function( parm_DB )
   {
      var ref = this.REF, rtn = Lansa.conRoutine( this, COM_OWNER, "Create" );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb) Name(#Db) Pass(*BY_REFERENCE)
      //
      var DB = rtn.createDynamicParameter( "DB" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      DB = parm_DB;

      //
      // MTHROUTINE Name(Create) Options(*CONSTRUCTOR *REQUIRED)
      //
      {

         //
         // #gDb <= #Db
         //
         rtn.Line( 20 );
         this.setrefGDB( DB );

         //
         // #gArgs <= *New #XDevice_SqlDb_QueryArguments
         //
         rtn.Line( 21 );
         this.setrefGARGS( Lansa.createAs( "XLBA0097", undefined, "mthCREATE", [  ] ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 22 );
      return rtn.retNew( this );
   };

   //
   // mthADDQUERY - AddQuery
   //
   COM_OWNER.mthADDQUERY = function( parm_QUERY )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddQuery", 24 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_Query) Name(#Query) Pass(*BY_REFERENCE)
      //
      var QUERY = rtn.createDynamicParameter( "QUERY" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUERY = parm_QUERY;

      //
      // MTHROUTINE Name(AddQuery)
      //
      rtn.Line( 24 );
      {

         //
         // #gChildQueries.Insert Item(#Query)
         //
         rtn.Line( 27 );
         ref.GCHILDQUERIES.mthINSERT( QUERY );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 28 );
      rtn.end();
   };

   //
   // mthADDQUERYSTRING - AddQueryString
   //
   COM_OWNER.mthADDQUERYSTRING = function( parm_STRING, parm_TAG )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AddQueryString", 30 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#String)
      //
      var STRING = rtn.createParameter( "STRING", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Tag) Mandatory('')
      //
      var TAG = rtn.createParameter( "TAG", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      STRING.set( parm_STRING );
      TAG.set( ( parm_TAG === undefined )  ?  ( "" ) : ( parm_TAG ) );

      //
      // DEFINE_COM Class(#XDevice_SqlDb_Query) Name(#Query) Reference(*DYNAMIC)
      //
      var QUERY = rtn.createDynamicReference( "QUERY" );

      //
      // MTHROUTINE Name(AddQueryString)
      //
      rtn.Line( 30 );
      {

         //
         // #gDb.CreateQuery Sql(#String) Tag(#Tag) Result(#Query)
         //
         rtn.Line( 36 );
         QUERY = rtn.setref( "QUERY", ref.GDB.mthCREATEQUERY( STRING.get(), TAG.get() ) );

         //
         // #COM_SELF.AddQuery Query(#Query)
         //
         rtn.Line( 38 );
         this.mthADDQUERY( QUERY );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
      rtn.end();
   };

   //
   // mthGETQUERYCOUNT - GetQueryCount
   //
   COM_OWNER.mthGETQUERYCOUNT = function()
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetQueryCount", 41 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XLib_INT64) Name(#Result)
      //
      var RESULT = rtn.createFieldParameter( "RESULT", Fields.XLB00051.DataClass );

      //
      // PTYROUTINE Name(GetQueryCount)
      //
      rtn.Line( 41 );
      {

         //
         // #Result := #gChildQueries.ItemCount
         //
         rtn.Line( 44 );
         RESULT.set( ref.GCHILDQUERIES.getItemCount() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 45 );
      return rtn.retVal( RESULT.get() );
   };

   //
   // mthGETQUERYATINDEX - GetQueryAtIndex
   //
   COM_OWNER.mthGETQUERYATINDEX = function( parm_INDEX )
   {
      var ref = this.REF, rtn = Lansa.ptyRoutine( this, COM_OWNER, "GetQueryAtIndex", 47 );

      //
      // DEFINE_MAP For(*OUTPUT) Class(#XDevice_SqlDb_Query) Name(#Result) Pass(*BY_REFERENCE)
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
      // PTYROUTINE Name(GetQueryAtIndex)
      //
      rtn.Line( 47 );
      {

         //
         // #Result <= #gChildQueries<#Index>
         //
         rtn.Line( 51 );
         RESULT = rtn.setref( "RESULT", ref.GCHILDQUERIES.get( INDEX.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 52 );
      return rtn.retRef( RESULT );
   };

   //
   // DEFINE_PTY Name(QueryCount) Get(GetQueryCount)
   //
   COM_OWNER.getQUERYCOUNT = function()
   {
      return this.mthGETQUERYCOUNT();
   };

   //
   // DEFINE_PTY Name(QueryAt) Get(GetQueryAtIndex)
   //
   COM_OWNER.getQUERYAT = function( KEY_1 )
   {
      return this.mthGETQUERYATINDEX( KEY_1 );
   };

   //
   // DEFINE_PTY Name(Sql) Get(*AUTO #gSql) Set(*AUTO #gSql)
   //
   COM_OWNER.getSQL = function()
   {
      return this.REF.GSQL.get();
   };

   COM_OWNER.setSQL = function( value )
   {
      this.REF.GSQL.set( value );
   };

   //
   // DEFINE_PTY Name(Arguments) Get(*REFERENCE #gArgs)
   //
   COM_OWNER.getARGUMENTS = function()
   {
      return this.REF.GARGS;
   };

   //
   // DEFINE_PTY Name(Tag) Get(*AUTO #gTag) Set(*AUTO #gTag)
   //
   COM_OWNER.getTAG = function()
   {
      return this.REF.GTAG.get();
   };

   COM_OWNER.setTAG = function( value )
   {
      this.REF.GTAG.set( value );
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

   // ----------------------
   // -- HELPER FUNCTIONS --
   // ----------------------

   COM_OWNER.setrefGDB = function( refNew )
   {
      this.setref( "GDB", refNew );
   };

   COM_OWNER.setrefGARGS = function( refNew )
   {
      this.setref( "GARGS", refNew );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_LCOL", "PRIM_DC.UnicodeString", "PRIM_FLD" ],
   dc: [ "XLBA0094", "XLBA0097", "XLBA0098" ]
});

//# sourceURL=xlba0098.js
