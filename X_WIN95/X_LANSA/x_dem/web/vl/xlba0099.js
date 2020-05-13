// -----------------------------
// -- Reusable Part: XLBA0099 --
// -----------------------------
LANSA.addComponent(
{
   id: "XLBA0099", 
   nm: "XDevice_FeatureBase", 
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
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "XLBA0092", 

      // ----------------
      // -- Properties --
      // ----------------
      pt: 
      {
         IsReady: 
         {
            da: "r"
         }
      },

      // -------------
      // -- Methods --
      // -------------
      mt: 
      {
         SignalReady: 
         {
         },

         AssertIsReady: 
         {
         }
      },

      // -------------
      // -- Events --
      // -------------
      ev: 
      {
         Ready: 
         {
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
         // DEFINE_COM Class(#PRIM_BOLN) Name(#gIsReady)
         //
         var GISREADY = this.createReference( "GISREADY", "PRIM_BOLN" );

         // --------------------------
         // -- Initialize #GISREADY --
         // --------------------------
         GISREADY.initialize();
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   //
   // mthSIGNALREADY - SignalReady
   //
   COM_OWNER.mthSIGNALREADY = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "SignalReady", 9 );

      //
      // MTHROUTINE Name(SignalReady) Options(*FINAL) Access(*PROTECT)
      //
      rtn.Line( 9 );
      {

         //
         // IF (#gIsReady)
         //
         rtn.Line( 10 );
         if ( Lansa.toBool( ref.GISREADY.get() ) )
         {

            //
            // #COM_SELF.FatalError Text("Feature was ready, you can't make it ready AGAIN")
            //
            rtn.Line( 11 );
            this.mthFATALERROR( "Feature was ready, you can't make it ready AGAIN" );

         //
         // ENDIF 
         //
         }

         //
         // #gIsReady := True
         //
         rtn.Line( 14 );
         ref.GISREADY.set( true );

         //
         // SIGNAL Event(Ready)
         //
         rtn.Line( 16 );
         this.fireEvent( "READY" );

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 17 );
      rtn.end();
   };

   //
   // mthASSERTISREADY - AssertIsReady
   //
   COM_OWNER.mthASSERTISREADY = function()
   {
      var ref = this.REF, rtn = Lansa.mthRoutine( this, COM_OWNER, "AssertIsReady", 19 );

      //
      // MTHROUTINE Name(AssertIsReady) Options(*FINAL) Access(*PROTECT)
      //
      rtn.Line( 19 );
      {

         //
         // IF (*Not #gIsReady)
         //
         rtn.Line( 20 );
         if ( Lansa.toBool( Lansa.not( ref.GISREADY.get() ) ) )
         {

            //
            // #COM_SELF.FatalError Text("Feature is not ready yet. Wait for the 'OnReady' event before you start using this feature.")
            //
            rtn.Line( 21 );
            this.mthFATALERROR( "Feature is not ready yet. Wait for the 'OnReady' event before you start using this feature." );

         //
         // ENDIF 
         //
         }

      }

      //
      // ENDROUTINE
      //
      rtn.Line( 24 );
      rtn.end();
   };

   //
   // DEFINE_PTY Name(IsReady) Get(*AUTO #gIsReady)
   //
   COM_OWNER.getISREADY = function()
   {
      return this.REF.GISREADY.get();
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rc: [ "XLBA0092" ],
   rp: [ "PRIM_BOLN" ]
});

//# sourceURL=xlba0099.js
