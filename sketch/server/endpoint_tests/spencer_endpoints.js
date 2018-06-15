//endpoint #1:

// http://localhost:6000/user/login

//REQ.BODY: {
// 	"user": {
// 		"email": "robinsonspencerm@gmail.com"
// 	}
// }

// const responseJSON = pm.response.json();
// pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });

// let expectedObject = {
//     "uid": 10,
//     "email": "robinsonspencerm@gmail.com",
//     "password": "$2a$10$hIs072yyJawFMBPXn4IquecCABtZNvAWJboLp3IbZrpiZ0zUkTeFW",
//     "first_name": "Spencer",
//     "last_name": "Robinson"
// }


// pm.test("returning signed in user", () => {
//     console.log(responseJSON)
//     pm.expect( responseJSON ).eql( expectedObject)
// })



//endpoint #2: 
//http://localhost:6000/user/get

// const responseJSON = pm.response.json();


// pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });

// pm.test("will get an array of users", () => {
//     pm.expect( responseJSON.length > 2).to.be.true;
// })


// endpoint #3: 

// http://localhost:6000//sketchpads/:id/:name/:pad_id

//REQ.PARAMS:
// USED: id: 737, name: puppy, pad_id: 31

//const responseJSON = pm.response.json();



// pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });

// let Obj = [
//     {
//         "id": 737,
//         "e_name": "puppy",
//         "e_type": "circle",
//         "pad_id": 31,
//         "body": {
//             "id": 737,
//             "top": 156,
//             "left": 282,
//             "type": "circle",
//             "width": 150,
//             "height": 150,
//             "zIndex": 0,
//             "position": "absolute",
//             "className": "shape_737",
//             "borderRadius": "50%",
//             "backgroundColor": "#D3D3D3"
//         }
//     }
// ]

// pm.test("can change element name", () => {
//   pm.expect(responseJSON).to.eql(Obj)
// })


//endpoint #4: 

// http://localhost:6000/sketchpads/:id/:pad
//REQ.PARAMS: id: 743, pad: 32

// const responseJSON = pm.response.json();

// pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });


// pm.test('delete an element', () => {
    
//   pm.expect(Array.isArray(responseJSON)).to.eql(true)

// })


//endpoint #5:

// http://localhost:6000/sketchpads/:id/elements
//REQ.PARAMS: id: 35

// const responseJSON = pm.response.json();



// pm.test("Status code is 200", function () {
//     pm.response.to.have.status(200);
// });

// pm.test('getting an array of elements', () => {
//     pm.expect(Array.isArray(responseJSON)).to.eql(true)
// })


