/* endpoint test 1:
##

http://localhost:6000/user/get

const responseJSON = pm.response.json();

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Returned data is an Array", function () {
    pm.expect(Array.isArray(responseJSON)).to.eql(true);
    
});


endpoint test 2:
##

http://localhost:6000/user/login

const responseJSON = pm.response.json();


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200)
});

let expectedPassword =
    "$2a$10$roGgG9KkL6Ec8kNtCZmdduxWcz2QmT8bsjIhk8/joiulENJypBsBi"


pm.test("Returned salt/hashed password", function () {
    pm.expect(responseJSON.password).to.eql(expectedPassword);
});

endpoint test 3:
##

http://localhost:6000//sketchpads/:id/:name/:pad_id


params =  id: 737, name: bob, pad_id: 31

const responseJSON = pm.response.json();



pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const changedElement = [
    {
        "id": 737,
        "e_name": "bob",
        "e_type": "circle",
        "pad_id": 31,
        "body": {
            "id": 737,
            "top": 156,
            "left": 282,
            "type": "circle",
            "width": 150,
            "height": 150,
            "zIndex": 0,
            "position": "absolute",
            "className": "shape_737",
            "borderRadius": "50%",
            "backgroundColor": "#D3D3D3"
        }
    }
]

pm.test("can change element name", () => {
  pm.expect(responseJSON).to.eql(changedElement)
})

endpoint test 4:
##

http://localhost:6000/user/get

const responseJSON = pm.response.json();


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("user array has correct # of users", () => {
    pm.expect(responseJSON.length).to.eql(11);
})


endpoint test 5:
##

http://localhost:6000/user/get

const responseJSON = pm.response.json();


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Returned user id is a number", function () {
    pm.expect(typeof responseJSON[0].uid).to.eql("number");
});

*/