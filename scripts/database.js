

var db;
 var dbReq = indexedDB.open('mydatabase', 1);

  dbReq.onupgradeneeded = function(event) {
    // Set the db variable to our database so we can use it!  
    db = event.target.result;
  
    // Create an object store named notes. Object stores
    // in databases are where data are stored.
    let users = db.createObjectStore('users', {autoIncrement: true});
  }
  dbReq.onsuccess = function(event) {
    db = event.target.result;
  }
  dbReq.onerror = function(event) {
    alert('error opening database ' + event.target.errorCode);
  }

  //******************************************************************* */

 function addUser(db, login, password) {
    // Start a database transaction and get the notes object store
    let tx = db.transaction(['users'], 'readwrite');
    let store = tx.objectStore('users');
    // Put the sticky note into the object store
    let user = {login: login, password: password};
    store.add(user);
    // Wait for the database transaction to complete
    tx.oncomplete = function() { console.log('stored user!') }
    tx.onerror = function(event) {
      alert('error storing note ' + event.target.errorCode);
    }
  }

  /*
  // Set up an object store and transaction
let tx = db.transaction(['notes'], 'readonly');
let store = tx.objectStore('notes');
// Set up a request to get the sticky note with the key 1
let req = store.get(1);
// We can use the note if the request succeeds, getting it in the
// onsuccess handler
req.onsuccess = function(event) {
  let note = event.target.result;
  if (note) {
    console.log(note);
  } else {
    console.log("note 1 not found")
  }
}
// If we get an error, like that the note wasn't in the object
// store, we handle the error in the onerror handler
req.onerror = function(event) {
  alert('error getting note 1 ' + event.target.errorCode);
}
  */
