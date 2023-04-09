const firebaseConfig = {
    apiKey: "AIzaSyCK3RLW8iFKmVUgDwTVv9NAX3UcMD3rigM",
    authDomain: "smart-traffic-system-bee84.firebaseapp.com",
    databaseURL: "https://smart-traffic-system-bee84-default-rtdb.firebaseio.com",
    projectId: "smart-traffic-system-bee84",
    storageBucket: "smart-traffic-system-bee84.appspot.com",
    messagingSenderId: "336461558246",
    appId: "1:336461558246:web:fbdd81260d10abf1bae627",
  };

firebase.initializeApp(firebaseConfig);

var placeform  = firebase.database().ref('index_form');
document.getElementById('index_form').addEventListener('submit', submitform);
function submitform(e){
    e.preventDefault();
    var place  = getElementVal('place');
    var point = getElementVal('point');
    console.log(place, point);
}
const getElementById = (id) => {
    return document.getElementById(id).value;
};