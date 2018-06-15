// {
// 	"info": {
// 		"_postman_id": "abe7534b-106c-4107-9047-0ec9c4f7e788",
// 		"name": "SketchApp Clone",
// 		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
// 	},
// 	"item": [
// 		{
// 			"name": "http://localhost:6000/user/get",
// 			"event": [
// 				{
// 					"listen": "test",
// 					"script": {
// 						"id": "7df53bf7-08f8-4784-8b7b-7bf5f3f54ad4",
// 						"type": "text/javascript",
// 						"exec": [
// 							"pm.test(\"Status code is 200\", function () {",
// 							"    pm.response.to.have.status(200);",
// 							"});",
// 							"",
// 							"pm.test(\"Response has users in an array\", function(){",
// 							"    let res = pm.response.json();",
// 							"    ",
// 							"    let result = res.length",
// 							"    ",
// 							"    pm.expect(result).to.be.above(0)",
// 							"})",
// 							"",
// 							"pm.test('Each value of array should be an object', function(){",
// 							"    let res = pm.response.json();",
// 							"    let result = false;",
// 							"    if(typeof res[0] === \"object\"){",
// 							"        result = true;",
// 							"    }",
// 							"    pm.expect(result).to.eql(true)",
// 							"})"
// 						]
// 					}
// 				}
// 			],
// 			"request": {
// 				"method": "GET",
// 				"header": [],
// 				"body": {},
// 				"url": {
// 					"raw": "http://localhost:6000/user/get",
// 					"protocol": "http",
// 					"host": [
// 						"localhost"
// 					],
// 					"port": "6000",
// 					"path": [
// 						"user",
// 						"get"
// 					]
// 				}
// 			},
// 			"response": []
// 		}
// 	]
// }