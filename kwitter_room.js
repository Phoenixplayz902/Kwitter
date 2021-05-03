// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
      apiKey: "AIzaSyDJ4gBuCuN039Dodunm8DPRgoQNN6sBvaE",
      authDomain: "kwitter-418b4.firebaseapp.com",
      databaseURL: "https://kwitter-418b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-418b4",
      storageBucket: "kwitter-418b4.appspot.com",
      messagingSenderId: "1004860763959",
      appId: "1:1004860763959:web:22c7c1a165b63ec0e9f4b2",
      measurementId: "G-KZL8B0MMSP"
};
// Initialize Firebase
firebase.initializeApp(config);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "i";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  
            });
      });
}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}