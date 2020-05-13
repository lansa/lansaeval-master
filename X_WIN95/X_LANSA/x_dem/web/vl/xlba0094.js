// -----------------------------
// -- Reusable Part: XLBA0094 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0094", 
   nm: "XDevice_SqlDb", 
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
      STD_CLOB:
      {
         ic: 0,
         nm: "STD_CLOB",
         ft: "CL",
         ln: 0,
         dc: 0,
         lb: "Standard CLOB",
         h1: "Standard",
         h2: "CLOB",
         h3: " ",
         de: "Standard CLOB",
         dv: Lansa.SqlNull,
         ia: [ "ASQN", "FE", "LC" ]
      }
   };

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0099", 
      fd: Fields, 

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         Open: 
         {
            ps: 
            {
               "Schema":
               {
                  pt: "i"
               }
            }
         },

         CreateQuery: 
         {
            ps: 
            {
               "Sql":
               {
                  pt: "i"
               },

               "Tag":
               {
                  pt: "i"
               }
            }
         },

         AdvanceState: 
         {
         },

         LoadSchema: 
         {
         },

         ApplySchema: 
         {
            ps: 
            {
               "SchemaName":
               {
                  pt: "i"
               }
            }
         },

         ReadSchemaFromClob: 
         {
            ps: 
            {
               "Input":
               {
                  pt: "i"
               }
            }
         },

         ExecuteQuery: 
         {
            ps: 
            {
               "Query":
               {
                  pt: "i"
               }
            }
         },

         ExecuteQueryString: 
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
         },

         DownloadData: 
         {
            ps: 
            {
               "Url":
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

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         ExecQueryCompleted: 
         {
            ps: 
            {
               "Result":
               {
                  pt: "i"
               },

               "Query":
               {
                  pt: "i"
               },

               "Tag":
               {
                  pt: "i"
               }
            }
         },

         DownloadDataCompleted: 
         {
            ps: 
            {
               "Status":
               {
                  pt: "i"
               },

               "Message":
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
         this.addFields( "XLBA0094", Fields );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_Widget) Name(#Widget)
         //
         var WIDGET = this.createReference( "WIDGET", "XLBA0093" );

         //
         // DEFINE_COM Class(#PRIM_DC.UnicodeString) Name(#gSchemaName)
         //
         var GSCHEMANAME = this.createReference( "GSCHEMANAME", "PRIM_DC", "UnicodeString" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gOpenInvoked)
         //
         var GOPENINVOKED = this.createReference( "GOPENINVOKED", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gSchemaLoadInitiated)
         //
         var GSCHEMALOADINITIATED = this.createReference( "GSCHEMALOADINITIATED", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gSchemaIsReady)
         //
         var GSCHEMAISREADY = this.createReference( "GSCHEMAISREADY", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gWidgetIsReady)
         //
         var GWIDGETISREADY = this.createReference( "GWIDGETISREADY", "PRIM_BOLN" );

         //
         // DEFINE_COM Class(#XInternal_DeviceSqlDb_QueryExecutionQueue) Name(#ExecQueue)
         //
         var EXECQUEUE = this.createReference( "EXECQUEUE", "XLBA0101" );

         // ------------------------
         // -- Initialize #WIDGET --
         // ------------------------
         WIDGET.initialize();

         // -----------------------------
         // -- Initialize #GSCHEMANAME --
         // -----------------------------
         GSCHEMANAME.initialize();

         // ------------------------------
         // -- Initialize #GOPENINVOKED --
         // ------------------------------
         GOPENINVOKED.initialize();

         // --------------------------------------
         // -- Initialize #GSCHEMALOADINITIATED --
         // --------------------------------------
         GSCHEMALOADINITIATED.initialize();

         // --------------------------------
         // -- Initialize #GSCHEMAISREADY --
         // --------------------------------
         GSCHEMAISREADY.initialize();

         // --------------------------------
         // -- Initialize #GWIDGETISREADY --
         // --------------------------------
         GWIDGETISREADY.initialize();

         // ---------------------------
         // -- Initialize #EXECQUEUE --
         // ---------------------------
         EXECQUEUE.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #WIDGET --
         // ------------------------------------
         WIDGET.addEventHandler( "INITIALIZE", this, evtRoutine3 );
         WIDGET.addEventHandler( "APPLYSCHEMACOMPLETED", this, evtRoutine4 );
         WIDGET.addEventHandler( "DOWNLOADDATACOMPLETED", this, evtRoutine8 );

         // ---------------------------------------
         // -- Add Event Handlers for #EXECQUEUE --
         // ---------------------------------------
         EXECQUEUE.addEventHandler( "QUERYCOMPLETED", this, evtRoutine2 );

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
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#COM_OWNER.CreateInstance", 22 );

      //
      // EVTROUTINE Handling(#COM_OWNER.CreateInstance)
      //
      rtn.Line( 22 );
      {

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 23 );
      rtn.end();
   };

   //
   // evtRoutine2 - #ExecQueue.QueryCompleted
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#ExecQueue.QueryCompleted", 25 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var CONTEXT = parms.ref( "CONTEXT" );
      var RESULT = parms.ref( "RESULT" );

      //
      // EVTROUTINE Handling(#ExecQueue.QueryCompleted) Context(#Context) Result(#Result)
      //
      rtn.Line( 25 );
      {

         //
         // IF (#Context.ParentContext *Is *Null)
         //
         rtn.Line( 26 );
         if ( ( CONTEXT.getPARENTCONTEXT() == null ) )
         {

            //
            // SIGNAL Event(ExecQueryCompleted) Query(#Context.Query) Result(#Result) Tag(#Context.Query.Tag)
            //
            rtn.Line( 27 );
            {
               var evtParms = Lansa.evtParms();

               evtParms.createDynamicReference( "RESULT" );
               evtParms.createDynamicReference( "QUERY" );
               evtParms.createReference( "TAG", "PRIM_DC", "UnicodeString" );

               evtParms.setref( "RESULT", RESULT );
               evtParms.setref( "QUERY", CONTEXT.getQUERY() );
               evtParms.ref( "TAG" ).set( CONTEXT.getQUERY().getTAG() );

               this.fireEvent( "EXECQUERYCOMPLETED", evtParms );

               evtParms.end();
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 29 );
      rtn.end();
   };

   //
   // mthOPEN - Open
   //
   COM_OWNER.mthOPEN = function( parm_SCHEMA )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Open", 31 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Schema) Mandatory('')
      //
      var SCHEMA = rtn.createParameter( "SCHEMA", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SCHEMA.set( ( parm_SCHEMA === undefined )  ?  ( "" ) : ( parm_SCHEMA ) );

      //
      // MTHROUTINE Name(Open)
      //
      rtn.Line( 31 );
      {

         //
         // IF (#gOpenInvoked)
         //
         rtn.Line( 34 );
         if ( Lansa.toBool( ref.GOPENINVOKED.get() ) )
         {

            //
            // #COM_SELF.FatalError Text("'Open' has previously been invoked, should be invoked once only")
            //
            rtn.Line( 35 );
            this.mthFATALERROR( "'Open' has previously been invoked, should be invoked once only" );

         //
         // ENDIF 
         //
         }

         //
         // #gOpenInvoked := True
         //
         rtn.Line( 38 );
         ref.GOPENINVOKED.set( true );

         //
         // #gSchemaName := #Schema
         //
         rtn.Line( 39 );
         ref.GSCHEMANAME.set( SCHEMA.get() );

         //
         // #COM_SELF.AdvanceState
         //
         rtn.Line( 41 );
         this.mthADVANCESTATE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 42 );
      rtn.end();
   };

   //
   // mthCREATEQUERY - CreateQuery
   //
   COM_OWNER.mthCREATEQUERY = function( parm_SQL, parm_TAG )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "CreateQuery", 44 );

      //
      // DEFINE_MAP For(*RESULT) Class(#XDevice_SqlDb_Query) Name(#Result) Pass(*BY_REFERENCE)
      //
      var RESULT = rtn.createDynamicParameter( "RESULT" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Sql) Mandatory('')
      //
      var SQL = rtn.createParameter( "SQL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Tag) Mandatory('')
      //
      var TAG = rtn.createParameter( "TAG", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SQL.set( ( parm_SQL === undefined )  ?  ( "" ) : ( parm_SQL ) );
      TAG.set( ( parm_TAG === undefined )  ?  ( "" ) : ( parm_TAG ) );

      //
      // MTHROUTINE Name(CreateQuery)
      //
      rtn.Line( 44 );
      {

         //
         // #COM_SELF.AssertIsReady
         //
         rtn.Line( 49 );
         this.mthASSERTISREADY();

         //
         // #Result <= *New #XDevice_SqlDb_Query.Create( #COM_OWNER )
         //
         rtn.Line( 51 );
         RESULT = rtn.setref( "RESULT", Lansa.createAs( "XLBA0098", undefined, "mthCREATE", [ this ] ) );

         //
         // #Result.Sql := #Sql
         //
         rtn.Line( 52 );
         RESULT.setSQL( SQL.get() );

         //
         // #Result.Tag := #Tag
         //
         rtn.Line( 53 );
         RESULT.setTAG( TAG.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 54 );
      return rtn.retRef( RESULT );
   };

   //
   // evtRoutine3 - #Widget.Initialize
   //
   function evtRoutine3( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.Initialize", 56 );

      //
      // EVTROUTINE Handling(#Widget.Initialize)
      //
      rtn.Line( 56 );
      {

         //
         // #gWidgetIsReady := True
         //
         rtn.Line( 57 );
         ref.GWIDGETISREADY.set( true );

         //
         // #COM_SELF.AdvanceState
         //
         rtn.Line( 59 );
         this.mthADVANCESTATE();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 60 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Widget.ApplySchemaCompleted
   //
   function evtRoutine4( sender, parms )
   {
      var ref = this.REF, rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.ApplySchemaCompleted", 62 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var STATUS = parms.ref( "STATUS" );
      var MESSAGE = parms.ref( "MESSAGE" );

      //
      // EVTROUTINE Handling(#Widget.ApplySchemaCompleted) Status(#Status) Message(#Message)
      //
      rtn.Line( 62 );
      {

         //
         // CASE Of_Field(#Status)
         //
         rtn.Line( 63 );
         {
            var value1 = STATUS.get();

            //
            // WHEN Value_Is(= APPLY_FAILED)
            //
            if ( rtn.Line( 65 ), Lansa.String.eq( value1, "APPLY_FAILED" ) )
            {

               //
               // #COM_SELF.FatalError Text('Failed to apply database schema: ' + #Message)
               //
               rtn.Line( 66 );
               this.mthFATALERROR( Lansa.cat( "Failed to apply database schema: ", MESSAGE.get() ) );
            }

            //
            // OTHERWISE 
            //
            else
            {

               //
               // #gSchemaIsReady := True
               //
               rtn.Line( 69 );
               ref.GSCHEMAISREADY.set( true );

               //
               // #COM_SELF.LogInfo Text('Asynchronous schema loading completed')
               //
               rtn.Line( 71 );
               this.mthLOGINFO( "Asynchronous schema loading completed" );

               //
               // #COM_SELF.AdvanceState
               //
               rtn.Line( 72 );
               this.mthADVANCESTATE();
            }

         //
         // ENDCASE 
         //
         rtn.Line( 73 );
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 75 );
      rtn.end();
   };

   //
   // mthADVANCESTATE - AdvanceState
   //
   COM_OWNER.mthADVANCESTATE = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AdvanceState", 77 );

      //
      // MTHROUTINE Name(AdvanceState) Access(*PRIVATE)
      //
      rtn.Line( 77 );
      {

         //
         // IF (#gWidgetIsReady)
         //
         rtn.Line( 78 );
         if ( Lansa.toBool( ref.GWIDGETISREADY.get() ) )
         {

            //
            // IF (*Not #gSchemaLoadInitiated)
            //
            rtn.Line( 79 );
            if ( Lansa.toBool( Lansa.not( ref.GSCHEMALOADINITIATED.get() ) ) )
            {

               //
               // #COM_SELF.LoadSchema
               //
               rtn.Line( 80 );
               this.mthLOADSCHEMA();

            //
            // ELSE 
            //
            }
            else
            {

               //
               // IF (#gSchemaIsReady *And (*Not #COM_SELF.IsReady))
               //
               rtn.Line( 82 );
               if ( Lansa.toBool( Lansa.and( ref.GSCHEMAISREADY.get(), Lansa.not( this.getISREADY() ) ) ) )
               {

                  //
                  // #COM_SELF.LogInfo Text('Ready')
                  //
                  rtn.Line( 83 );
                  this.mthLOGINFO( "Ready" );

                  //
                  // #COM_SELF.SignalReady
                  //
                  rtn.Line( 84 );
                  this.mthSIGNALREADY();

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

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 88 );
      rtn.end();
   };

   //
   // mthLOADSCHEMA - LoadSchema
   //
   COM_OWNER.mthLOADSCHEMA = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "LoadSchema", 90 );

      //
      // MTHROUTINE Name(LoadSchema) Access(*PRIVATE)
      //
      rtn.Line( 90 );
      {

         //
         // IF (#gOpenInvoked *And #gWidgetIsReady)
         //
         rtn.Line( 91 );
         if ( Lansa.toBool( Lansa.and( ref.GOPENINVOKED.get(), ref.GWIDGETISREADY.get() ) ) )
         {

            //
            // IF (#gSchemaLoadInitiated)
            //
            rtn.Line( 92 );
            if ( Lansa.toBool( ref.GSCHEMALOADINITIATED.get() ) )
            {

               //
               // #COM_SELF.FatalError Text("Schema has begin loading")
               //
               rtn.Line( 93 );
               this.mthFATALERROR( "Schema has begin loading" );

            //
            // ENDIF 
            //
            }

            //
            // #gSchemaLoadInitiated := True
            //
            rtn.Line( 96 );
            ref.GSCHEMALOADINITIATED.set( true );

            //
            // #COM_SELF.LogInfo Text('Begin loading schema')
            //
            rtn.Line( 97 );
            this.mthLOGINFO( "Begin loading schema" );

            //
            // IF (#gSchemaName <> '')
            //
            rtn.Line( 99 );
            if ( Lansa.toBool( Lansa.String.ne( ref.GSCHEMANAME.get(), "" ) ) )
            {

               //
               // #COM_SELF.ApplySchema Schemaname(#gSchemaName)
               //
               rtn.Line( 100 );
               this.mthAPPLYSCHEMA( ref.GSCHEMANAME.get() );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #gSchemaIsReady := True
               //
               rtn.Line( 102 );
               ref.GSCHEMAISREADY.set( true );

               //
               // #COM_SELF.LogInfo Text('Using null schema')
               //
               rtn.Line( 104 );
               this.mthLOGINFO( "Using null schema" );

               //
               // #COM_SELF.AdvanceState
               //
               rtn.Line( 105 );
               this.mthADVANCESTATE();

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 108 );
      rtn.end();
   };

   //
   // mthAPPLYSCHEMA - ApplySchema
   //
   COM_OWNER.mthAPPLYSCHEMA = function( parm_SCHEMANAME )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ApplySchema", 110 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#SchemaName)
      //
      var SCHEMANAME = rtn.createParameter( "SCHEMANAME", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SCHEMANAME.set( parm_SCHEMANAME );

      //
      // DEFINE_COM Class(#STD_CLOB) Name(#SchemaContent)
      //
      var SCHEMACONTENT = rtn.createFieldReference( "SCHEMACONTENT", Fields.STD_CLOB.DataClass );

      //
      // DEFINE_COM Class(#XDevice_SqlDb_ServerModule.FetchSchema) Name(#Server)
      //
      var SERVER = rtn.createDataRequest( "SERVER", "XLBA0100", "FETCHSCHEMA" );

      // -------------------------------
      // -- Initialize #SCHEMACONTENT --
      // -------------------------------
      SCHEMACONTENT.initialize();

      // ------------------------
      // -- Initialize #SERVER --
      // ------------------------
      SERVER.initialize();

      // ------------------------------------
      // -- Add Event Handlers for #SERVER --
      // ------------------------------------
      SERVER.addEventHandler( "COMPLETED", this, evtRoutine5 );
      SERVER.addEventHandler( "FAILED", this, evtRoutine6 );

      //
      // MTHROUTINE Name(ApplySchema) Access(*PRIVATE)
      //
      rtn.Line( 110 );
      {

         //
         // #Server.ExecuteAsync Name(#SchemaName) Result(#SchemaContent)
         //
         rtn.Line( 116 );
         SERVER.mthEXECUTEASYNC( { FLD: { "FLD_SCHEMANAME": SCHEMANAME.get() } }, { FLD: { "STD_CLOB": SCHEMACONTENT } } );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 140 );
      rtn.end();

      //
      // evtRoutine5 - #Server.Completed
      //
      function evtRoutine5( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Server.Completed", 118, mth );

         //
         // EVTROUTINE Handling(#Server.Completed)
         //
         rtn.Line( 118 );
         {

            //
            // IF (#SchemaContent <> '')
            //
            rtn.Line( 119 );
            if ( Lansa.toBool( Lansa.String.ne( SCHEMACONTENT.get(), "" ) ) )
            {

               //
               // #COM_SELF.ReadSchemaFromClob Input(#SchemaContent)
               //
               rtn.Line( 120 );
               this.mthREADSCHEMAFROMCLOB( SCHEMACONTENT );

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_SELF.FatalError Text('Schema was either blank, or not found. Ensure that the schema file ' + #SchemaName + ' is placed on the server under the partition execute folder')
               //
               rtn.Line( 122 );
               this.mthFATALERROR( Lansa.cat( Lansa.add( "Schema was either blank, or not found. Ensure that the schema file ", SCHEMANAME.get() ), " is placed on the server under the partition execute folder" ) );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 124 );
         rtn.end();
      }

      //
      // evtRoutine6 - #Server.Failed
      //
      function evtRoutine6( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Server.Failed", 126, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var REASON = parms.ref( "REASON" );
         var HANDLED = parms.ref( "HANDLED" );

         //
         // EVTROUTINE Handling(#Server.Failed) Reason(#Reason) Handled(#Handled)
         //
         rtn.Line( 126 );
         {

            //
            // IF (#Reason = ServerError)
            //
            rtn.Line( 127 );
            if ( Lansa.String.eq( REASON.get(), "SERVERERROR" ) )
            {

               //
               // #Handled := True
               //
               rtn.Line( 128 );
               HANDLED.set( true );

               //
               // #gSchemaIsReady := True
               //
               rtn.Line( 131 );
               ref.GSCHEMAISREADY.set( true );

               //
               // #COM_SELF.LogInfo Text('Failed to contact the server to retrieve schema, possibly offline')
               //
               rtn.Line( 133 );
               this.mthLOGINFO( "Failed to contact the server to retrieve schema, possibly offline" );

               //
               // #COM_SELF.AdvanceState
               //
               rtn.Line( 134 );
               this.mthADVANCESTATE();

            //
            // ELSE 
            //
            }
            else
            {

               //
               // #COM_SELF.FatalError Text('Failed to fetch schema from the server [reason = ' + #Reason + ']')
               //
               rtn.Line( 136 );
               this.mthFATALERROR( Lansa.cat( Lansa.cat( "Failed to fetch schema from the server [reason = ", REASON.get() ), "]" ) );

            //
            // ENDIF 
            //
            }

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 138 );
         rtn.end();
      }
   };

   //
   // mthREADSCHEMAFROMCLOB - ReadSchemaFromClob
   //
   COM_OWNER.mthREADSCHEMAFROMCLOB = function( parm_INPUT )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ReadSchemaFromClob", 142 ), mth = rtn;

      //
      // DEFINE_MAP For(*INPUT) Class(#STD_CLOB) Name(#Input) Pass(*BY_REFERENCE)
      //
      var INPUT = rtn.createDynamicParameter( "INPUT" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      INPUT = parm_INPUT;

      //
      // DEFINE_COM Class(#PRIM_WEB.ClobReader) Name(#Reader)
      //
      var READER = rtn.createReference( "READER", "PRIM_WEB", "ClobReader" );

      // ------------------------
      // -- Initialize #READER --
      // ------------------------
      READER.initialize();

      // ------------------------------------
      // -- Add Event Handlers for #READER --
      // ------------------------------------
      READER.addEventHandler( "COMPLETED", this, evtRoutine7 );

      //
      // MTHROUTINE Name(ReadSchemaFromClob) Access(*PRIVATE)
      //
      rtn.Line( 142 );
      {

         //
         // #Reader.Read Clob(#Input)
         //
         rtn.Line( 146 );
         READER.mthREAD( INPUT.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 152 );
      rtn.end();

      //
      // evtRoutine7 - #Reader.Completed
      //
      function evtRoutine7( sender, parms )
      {
         var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Reader.Completed", 148, mth );

         // ---------------------------
         // -- Parameter Definitions --
         // ---------------------------
         var TEXT = parms.ref( "DATA" );

         //
         // EVTROUTINE Handling(#Reader.Completed) Data(#Text)
         //
         rtn.Line( 148 );
         {

            //
            // #Widget.ApplySchema Schema(#Text)
            //
            rtn.Line( 149 );
            ref.WIDGET.mthAPPLYSCHEMA( TEXT.get() );

         }

         //
         // ENDROUTINE
         //
         rtn.Line( 150 );
         rtn.end();
      }
   };

   //
   // mthEXECUTEQUERY - ExecuteQuery
   //
   COM_OWNER.mthEXECUTEQUERY = function( parm_QUERY )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "ExecuteQuery", 154 );

      //
      // DEFINE_MAP For(*INPUT) Class(#XDevice_SqlDb_Query) Name(#Query) Pass(*BY_REFERENCE)
      //
      var QUERY = rtn.createDynamicParameter( "QUERY" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      QUERY = parm_QUERY;

      //
      // MTHROUTINE Name(ExecuteQuery)
      //
      rtn.Line( 154 );
      {

         //
         // IF ((#Query.Sql = '') *And (#Query.QueryCount = 0))
         //
         rtn.Line( 157 );
         if ( Lansa.and( Lansa.String.eq( QUERY.getSQL(), "" ), Lansa.Number.eq( QUERY.getQUERYCOUNT(), 0 ) ) )
         {

            //
            // #COM_SELF.FatalError Text("Query's SQL property has not been set and this is not a query group (no sub-queries specified)")
            //
            rtn.Line( 158 );
            this.mthFATALERROR( "Query's SQL property has not been set and this is not a query group (no sub-queries specified)" );

         //
         // ELSE 
         //
         }
         else
         {

            //
            // IF ((#Query.Sql <> '') *And (#Query.QueryCount > 0))
            //
            rtn.Line( 160 );
            if ( Lansa.and( Lansa.String.ne( QUERY.getSQL(), "" ), Lansa.Number.gt( QUERY.getQUERYCOUNT(), 0 ) ) )
            {

               //
               // #COM_SELF.FatalError Text("Query group can't have its SQL property set")
               //
               rtn.Line( 161 );
               this.mthFATALERROR( "Query group can't have its SQL property set" );

            //
            // ENDIF 
            //
            }

         //
         // ENDIF 
         //
         }

         //
         // #ExecQueue.Queue Query(#Query)
         //
         rtn.Line( 166 );
         ref.EXECQUEUE.mthQUEUE( QUERY );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 167 );
      rtn.end();
   };

   //
   // mthEXECUTEQUERYSTRING - ExecuteQueryString
   //
   COM_OWNER.mthEXECUTEQUERYSTRING = function( parm_STRING, parm_TAG )
   {
      var rtn = Lansa.mthRoutine( this, COM_OWNER, "ExecuteQueryString", 169 );

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
      // MTHROUTINE Name(ExecuteQueryString)
      //
      rtn.Line( 169 );
      {

         //
         // #COM_SELF.CreateQuery Sql(#String) Tag(#Tag) Result(#Query)
         //
         rtn.Line( 175 );
         QUERY = rtn.setref( "QUERY", this.mthCREATEQUERY( STRING.get(), TAG.get() ) );

         //
         // #COM_SELF.ExecuteQuery Query(#Query)
         //
         rtn.Line( 176 );
         this.mthEXECUTEQUERY( QUERY );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 177 );
      rtn.end();
   };

   //
   // mthDOWNLOADDATA - DownloadData
   //
   COM_OWNER.mthDOWNLOADDATA = function( parm_URL, parm_TAG )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "DownloadData", 179 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Url)
      //
      var URL = rtn.createParameter( "URL", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Tag) Mandatory('')
      //
      var TAG = rtn.createParameter( "TAG", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      URL.set( parm_URL );
      TAG.set( ( parm_TAG === undefined )  ?  ( "" ) : ( parm_TAG ) );

      //
      // MTHROUTINE Name(DownloadData)
      //
      rtn.Line( 179 );
      {

         //
         // #Widget.DownloadData Url(#Url) Tag(#Tag)
         //
         rtn.Line( 183 );
         ref.WIDGET.mthDOWNLOADDATA( URL.get(), TAG.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 184 );
      rtn.end();
   };

   //
   // evtRoutine8 - #Widget.DownloadDataCompleted
   //
   function evtRoutine8( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.DownloadDataCompleted", 186 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var STATUS = parms.ref( "STATUS" );
      var MESSAGE = parms.ref( "MESSAGE" );
      var TAG = parms.ref( "TAG" );

      //
      // EVTROUTINE Handling(#Widget.DownloadDataCompleted) Status(#Status) Message(#Message) Tag(#Tag)
      //
      rtn.Line( 186 );
      {

         //
         // SIGNAL Event(DownloadDataCompleted) Status(#Status) Message(#Message) Tag(#Tag)
         //
         rtn.Line( 187 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createReference( "STATUS", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "MESSAGE", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "TAG", "PRIM_DC", "UnicodeString" );

            evtParms.ref( "STATUS" ).set( STATUS.get() );
            evtParms.ref( "MESSAGE" ).set( MESSAGE.get() );
            evtParms.ref( "TAG" ).set( TAG.get() );

            this.fireEvent( "DOWNLOADDATACOMPLETED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 188 );
      rtn.end();
   };

   // -----------------------------
   // -- STD_CLOB Member Classes --
   // -----------------------------
   {
      // ---------------
      // -- DataClass --
      // ---------------
      Fields.STD_CLOB.DataClass = function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         this.Ancestor.call( this, Fields.STD_CLOB );
      };

      Lansa.createFieldClass( { co: Fields.STD_CLOB.DataClass, an: "PRIM_FLD", fn: "STD_CLOB" } );
   }

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0099", "XLBA0093", "XLBA0101" ],
   rp: [ "PRIM_DC.UnicodeString", "PRIM_BOLN", "PRIM_FLD", "PRIM_WEB.DataRequest" ],
   dc: [ "XLBA0098" ],
   dp: [ "PRIM_WEB.ClobReader" ]
});

//# sourceURL=xlba0094.js
