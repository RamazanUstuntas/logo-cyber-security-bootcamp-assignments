// What is XMLHttpRequest?
/* XMLHttpRequest (XHR) objects are used to interact with servers. 
You can retrieve data from a URL without having to do a full page refresh. 
This enables a Web page to update just part of a page without disrupting what the user is doing. */

// in this project, we will send a request to a remote server with xmlhttprequest and print its response on the console screen.
// To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request.
// After the transaction completes,the object will contain useful information such as the response body and the HTTP status of the result.
// the required module : npm i xmlhttprequest

import { XMLHttpRequest } from "xmlhttprequest";

// create an XMLHttpRequest object
var dataReq = new XMLHttpRequest();

// we should prefer the "load" event. Because the data on the fully-loaded-page will return as an response.
// Also, you can use dataReq.onload = function () {...}
dataReq.addEventListener("load", function () {
  if (dataReq.readyState == 4 && dataReq.status == 200) {
    console.log(JSON.parse(dataReq.responseText));
  }
});
//defining response type as JSON
dataReq.responseType = "JSON";

// to open the url where we will send a request
dataReq.open("GET", "https://jsonplaceholder.typicode.com/users");

// to send the request
dataReq.send();

// Output:
/* [
   {
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   ...
   ...
   ...
   ...
   {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ] */
