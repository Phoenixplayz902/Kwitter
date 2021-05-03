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
firebase.initailizeApp(config);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}