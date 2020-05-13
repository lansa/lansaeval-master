// -----------------------------
// -- Reusable Part: XLBA0113 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0113", 
   nm: "XMsg_Stomp_WebClient", 
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
         Connect: 
         {
            ps: 
            {
               "Url":
               {
                  pt: "i"
               }
            }
         },

         Send: 
         {
            ps: 
            {
               "Destination":
               {
                  pt: "i"
               },

               "Body":
               {
                  pt: "i"
               }
            }
         },

         Subscribe: 
         {
            ps: 
            {
               "Destination":
               {
                  pt: "i"
               }
            }
         },

         Unsubscribe: 
         {
            ps: 
            {
               "SubscriptionID":
               {
                  pt: "i"
               }
            }
         },

         Disconnect: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         Connected: 
         {
         },

         ConnectFailed: 
         {
         },

         Disconnected: 
         {
         },

         MessageReceived: 
         {
            ps: 
            {
               "MessageId":
               {
                  pt: "i"
               },

               "Body":
               {
                  pt: "i"
               },

               "ReceivedFrom":
               {
                  pt: "i"
               },

               "SentTo":
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
         // DEFINE_COM Class(#XInternal_Stomp_WebClient_Widget) Name(#Widget)
         //
         var WIDGET = this.createReference( "WIDGET", "XLBA0112" );

         // ------------------------
         // -- Initialize #WIDGET --
         // ------------------------
         WIDGET.initialize();

         // ------------------------------------
         // -- Add Event Handlers for #WIDGET --
         // ------------------------------------
         WIDGET.addEventHandler( "CONNECTED", this, evtRoutine1 );
         WIDGET.addEventHandler( "CONNECTFAILED", this, evtRoutine2 );
         WIDGET.addEventHandler( "DISCONNECTED", this, evtRoutine3 );
         WIDGET.addEventHandler( "RECEIVEMESSAGE", this, evtRoutine4 );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthCONNECT - Connect
   //
   COM_OWNER.mthCONNECT = function( parm_URL )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Connect", 15 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Url)
      //
      var URL = rtn.createParameter( "URL", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      URL.set( parm_URL );

      //
      // MTHROUTINE Name(Connect)
      //
      rtn.Line( 15 );
      {

         //
         // #Widget.Connect Url(#Url)
         //
         rtn.Line( 18 );
         ref.WIDGET.mthCONNECT( URL.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 19 );
      rtn.end();
   };

   //
   // mthSEND - Send
   //
   COM_OWNER.mthSEND = function( parm_DESTINATION, parm_BODY )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Send", 21 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Destination)
      //
      var DESTINATION = rtn.createParameter( "DESTINATION", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Body)
      //
      var BODY = rtn.createParameter( "BODY", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      DESTINATION.set( parm_DESTINATION );
      BODY.set( parm_BODY );

      //
      // MTHROUTINE Name(Send)
      //
      rtn.Line( 21 );
      {

         //
         // #Widget.Send Body(#Body) Destination(#Destination)
         //
         rtn.Line( 25 );
         ref.WIDGET.mthSEND( DESTINATION.get(), BODY.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 26 );
      rtn.end();
   };

   //
   // mthSUBSCRIBE - Subscribe
   //
   COM_OWNER.mthSUBSCRIBE = function( parm_DESTINATION )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Subscribe", 28 );

      //
      // DEFINE_MAP For(*RESULT) Class(#PRIM_DC.UnicodeString) Name(#SubscriptionID)
      //
      var SUBSCRIPTIONID = rtn.createParameter( "SUBSCRIPTIONID", "PRIM_DC", "UnicodeString" );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#Destination)
      //
      var DESTINATION = rtn.createParameter( "DESTINATION", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      DESTINATION.set( parm_DESTINATION );

      //
      // MTHROUTINE Name(Subscribe)
      //
      rtn.Line( 28 );
      {

         //
         // #Widget.Subscribe Destination(#Destination) Result(#SubscriptionID)
         //
         rtn.Line( 32 );
         SUBSCRIPTIONID.set( ref.WIDGET.mthSUBSCRIBE( DESTINATION.get() ) );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 33 );
      return rtn.retVal( SUBSCRIPTIONID.get() );
   };

   //
   // mthUNSUBSCRIBE - Unsubscribe
   //
   COM_OWNER.mthUNSUBSCRIBE = function( parm_SUBSCRIPTIONID )
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Unsubscribe", 35 );

      //
      // DEFINE_MAP For(*INPUT) Class(#PRIM_DC.UnicodeString) Name(#SubscriptionID)
      //
      var SUBSCRIPTIONID = rtn.createParameter( "SUBSCRIPTIONID", "PRIM_DC", "UnicodeString" );

      // ---------------------------
      // -- Initialize Parameters --
      // ---------------------------
      SUBSCRIPTIONID.set( parm_SUBSCRIPTIONID );

      //
      // MTHROUTINE Name(Unsubscribe)
      //
      rtn.Line( 35 );
      {

         //
         // #Widget.Unsubscribe SubscriptionId(#SubscriptionID)
         //
         rtn.Line( 38 );
         ref.WIDGET.mthUNSUBSCRIBE( SUBSCRIPTIONID.get() );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 39 );
      rtn.end();
   };

   //
   // mthDISCONNECT - Disconnect
   //
   COM_OWNER.mthDISCONNECT = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "Disconnect", 41 );

      //
      // MTHROUTINE Name(Disconnect)
      //
      rtn.Line( 41 );
      {

         //
         // #Widget.Disconnect
         //
         rtn.Line( 42 );
         ref.WIDGET.mthDISCONNECT();

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 43 );
      rtn.end();
   };

   //
   // evtRoutine1 - #Widget.Connected
   //
   function evtRoutine1( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.Connected", 45 );

      //
      // EVTROUTINE Handling(#Widget.Connected)
      //
      rtn.Line( 45 );
      {

         //
         // SIGNAL Event(Connected)
         //
         rtn.Line( 46 );
         this.fireEvent( "CONNECTED" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 47 );
      rtn.end();
   };

   //
   // evtRoutine2 - #Widget.ConnectFailed
   //
   function evtRoutine2( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.ConnectFailed", 49 );

      //
      // EVTROUTINE Handling(#Widget.ConnectFailed)
      //
      rtn.Line( 49 );
      {

         //
         // SIGNAL Event(ConnectFailed)
         //
         rtn.Line( 50 );
         this.fireEvent( "CONNECTFAILED" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 51 );
      rtn.end();
   };

   //
   // evtRoutine3 - #Widget.Disconnected
   //
   function evtRoutine3( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.Disconnected", 53 );

      //
      // EVTROUTINE Handling(#Widget.Disconnected)
      //
      rtn.Line( 53 );
      {

         //
         // SIGNAL Event(Disconnected)
         //
         rtn.Line( 54 );
         this.fireEvent( "DISCONNECTED" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 55 );
      rtn.end();
   };

   //
   // evtRoutine4 - #Widget.ReceiveMessage
   //
   function evtRoutine4( sender, parms )
   {
      var rtn = Lansa.evtRoutine( this, COM_OWNER, "#Widget.ReceiveMessage", 57 );

      // ---------------------------
      // -- Parameter Definitions --
      // ---------------------------
      var BODY = parms.ref( "BODY" );
      var MESSAGEID = parms.ref( "MESSAGEID" );
      var RECEIVEDFROM = parms.ref( "RECEIVEDFROM" );
      var SENTTO = parms.ref( "SENTTO" );

      //
      // EVTROUTINE Handling(#Widget.ReceiveMessage) Body(#Body) MessageId(#MessageId) ReceivedFrom(#ReceivedFrom) SentTo(#SentTo)
      //
      rtn.Line( 57 );
      {

         //
         // SIGNAL Event(MessageReceived) Body(#Body) MessageId(#MessageId) ReceivedFrom(#ReceivedFrom) SentTo(#SentTo)
         //
         rtn.Line( 58 );
         {
            var evtParms = Lansa.evtParms();

            evtParms.createReference( "MESSAGEID", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "BODY", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "RECEIVEDFROM", "PRIM_DC", "UnicodeString" );
            evtParms.createReference( "SENTTO", "PRIM_DC", "UnicodeString" );

            evtParms.ref( "MESSAGEID" ).set( MESSAGEID.get() );
            evtParms.ref( "BODY" ).set( BODY.get() );
            evtParms.ref( "RECEIVEDFROM" ).set( RECEIVEDFROM.get() );
            evtParms.ref( "SENTTO" ).set( SENTTO.get() );

            this.fireEvent( "MESSAGERECEIVED", evtParms );

            evtParms.end();
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 59 );
      rtn.end();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0112" ],
   rp: [ "PRIM_OBJT" ]
});

//# sourceURL=xlba0113.js
