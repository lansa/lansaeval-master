// --------------------------
// -- Web Widget: XLBA0089 --
// --------------------------
LANSA.addComponent(
{
   id: "XLBA0089", 
   nm: "XInternal_Google_Recaptcha_Widget_V2", 
   ot: "ww", 
   tp: "Widget", 
   de: "[pkg-integration-lib]", 
   tl: 14000101, 
   cl: 14020401
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // -------------------------------------
   // -- Helper functions to fire events --
   // -------------------------------------
   var fnEvents = function( PROTOTYPE )
   {
      PROTOTYPE.fireOnError = function( parm_Message )
      {
         var evtParms = Lansa.evtParms();

         evtParms.addStringParm( "MESSAGE", parm_Message );

         Lansa.fireEvent( this, "ONERROR", evtParms );
      };
   };

   // -----------------------------------
   // -- Define Methods and Properties --
   // -----------------------------------
   var fnWidget = 

      (function (PROTOTYPE, WIDGET) {
          window["googleServices_onRecaptchaScriptLoaded"] = function () {
              WIDGET.Finalize();
          };
          PROTOTYPE.onCreateInstance = function () {
              this._siteKey = "";
          };
          PROTOTYPE.onRealizeControl = function (parentElement) {
              this._parentElement = parentElement;
          };
          PROTOTYPE.setSiteKey = function (value) {
              this._siteKey = value;
          };
          PROTOTYPE.getSiteKey = function () {
              return this._siteKey;
          };
          PROTOTYPE.GetResponse = function () {
              return this._recaptchaId !== undefined ?
                  grecaptcha.getResponse(this._recaptchaId) :
                  "";
          };
          PROTOTYPE.Setup = function () {
              try {
                  this._recaptchaId = grecaptcha.render(this._parentElement, {
                      "sitekey": this._siteKey,
                      "theme": "light"
                  });
              }
              catch (e) {
                  var el = this._parentElement;
                  el.textContent = e.toString();
                  el.style.backgroundColor = "red";
                  el.style.color = "white";
                  el.style.verticalAlign = "middle";
                  el.style.padding = "10px";
                  //
                  this.fireOnError(e.toString());
              }
          };
          // Done
          return WIDGET.Loading;
      });
      
   ;

   // ---------------------
   // -- Register Widget --
   // ---------------------
   Lansa.registerWidget(
   {
      nm: "XLBA0089", 
      fe: fnEvents, 
      fn: fnWidget
   });

   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_WDGT", 
      at: "Control", 

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
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setSITEKEY( "" );
      }
   });

   // --------------------
   // -- RDMLX routines --
   // --------------------

   COM_OWNER.getSITEKEY = function()
   {
      return Lansa.toString( this.get( "SiteKey" ) );
   };

   COM_OWNER.setSITEKEY = function( value )
   {
      this.set( "SiteKey", Lansa.toString( value ) );
   };

   COM_OWNER.mthSETUP = function()
   {
      this.invoke( "Setup" );
   };

   COM_OWNER.mthGETRESPONSE = function()
   {
      return Lansa.toString( this.invoke( "GetResponse" ) );
   };

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_WDGT.Control" ]
});

//# sourceURL=xlba0089.js
