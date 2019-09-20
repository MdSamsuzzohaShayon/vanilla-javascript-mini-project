  /**
   * Sample JavaScript code for youtube.channels.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */


   /*
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.channels.list({})
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
*/


const CLIENT_ID = '1009166237635-cchiajkf31mcagc2tuknuidp1uccovti.apps.googleusercontent.com';
const SCOPES= "https://www.googleapis.com/auth/youtube.readonly";
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];

const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');

const content= document.getElementById('content');
const channelForm= document.getElementById('channel-form');
const channelInput= document.getElementById('channel-input');
const videoContainer= document.getElementById('video-container');

const defaultChannel = 'thefreaklesson';







// LOCAD AUTH 2 LIBRARY
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}


// INIT API CLIENT LIBRARY AND SET UP SIGN IN LISTENERS
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope : SCOPES
    }).then(()=>{
        // LISTEN FOR LIGN IN STATE CHANGES
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // HANDLE INITIAL SIGN IN STATE
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get);
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handdleSignoutClick;

    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        content.style.display = 'block';
        videoContainer.style.display = 'block';
        getChannel(defaultChannel);
      } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
        content.style.display = 'none';
        videoContainer.style.display = 'none';
      }
    
}


// HANDLE LOGIN
function handleAuthClick(){
    gapi.auth2.getAuthInstance().signIn();
}
// HANDLE SIGNOUT
function handdleSignoutClick(){
    gapi.auth2.getAuthInstance().signOut();
}
//GET CHANNEL FROM API
function getChannel(channel) {
    console.log(channel);    
}


