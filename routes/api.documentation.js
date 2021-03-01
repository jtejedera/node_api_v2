/**
 * @api {post} /login Get Token
 * @apiHeader {String} authentication Bearer Token
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEyOTgsImV4cCI6MTU5NDkwMjA5OH0.DlyVa8cAcrb5N8HgZ-1eakyChNJ9zGN6vRgttAnS9Xs"
 *     }
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {username} String Must be the username of the client.
 * @apiParam {password} String Must be the password of the client.
 * 
 * @apiSuccess {String} Type Type of the Token.
 * @apiSuccess {String} Token  JWT Token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc",
 *           "type": "Bearer"
 *       }
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 401 KO
 *     {
 *         
 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {

 *     }
 */

/**
 * @api {get} /clients Get the list of clients.
 * @apiDescription This API endpoint will retrieve a full list of clients.
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName clientData
 * @apiGroup Client
 *
 * @apiSuccess {ObjectId} id ID of the client.
 * @apiSuccess {String} name  Name of the client.
 * @apiSuccess {String} email  Email of the client.
 * @apiSuccess {role} role  Role of the client.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *           {
 *               "id": "a0ece5db-cd14-4f21-812f-966633e7be86",
 *               "name": "Britney",
 *               "email": "britneyblankenship@quotezart.com",
 *               "role": "admin"
 *           },
 *           {
 *               "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
 *               "name": "Manning",
 *               "email": "manningblankenship@quotezart.com",
 *               "role": "admin"
 *           },
 *           ...
 *       ]
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {

 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {
 *     }
 */

 /**
 * @api {get} /policies Get the list of policies.
 * @apiDescription This API endpoint will retrieve a full list of clients.
 * @apiHeader {String} authentication Bearer Token.
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc"
 *     }
 * @apiName policyData
 * @apiGroup Policy
 *
 * @apiSuccess {ObjectId} id ID of the policy.
 * @apiSuccess {String} amountInsured  Amount Insured of the policy.
 * @apiSuccess {String} email  Email of the client.
 * @apiSuccess {Date} inceptionDate  Inception installment of the policy.
 * @apiSuccess {ObjectId} clientId  ID of the Client.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *           {
 *               "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
 *               "amountInsured": "1825.89",
 *               "email": "inesblankenship@quotezart.com",
 *               "inceptionDate": "2016-06-01T03:33:32Z",
 *               "installmentPayment": true,
 *               "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
 *           },
 *           {
 *               "id": "7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
 *               "amountInsured": "399.89",
 *               "email": "inesblankenship@quotezart.com",
 *               "inceptionDate": "2015-07-06T06:55:49Z",
 *               "installmentPayment": true,
 *               "clientId": "a0ece5db-cd14-4f21-812f-966633e7be86"
 *           },
 *             ...
 *     ]
 *
 * @apiSuccessExample Success-Response No Data:
 *     HTTP/1.1 200 OK
 *     {
 *     }
 *
 * @apiError unexpectedError Unexpected error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Unexpected Error
 *     {
 *     }
 */

