define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Get Token",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>Bearer Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"authentication\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEyOTgsImV4cCI6MTU5NDkwMjA5OH0.DlyVa8cAcrb5N8HgZ-1eakyChNJ9zGN6vRgttAnS9Xs\"\n}",
          "type": "json"
        }
      ]
    },
    "name": "Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>Type of the Token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>JWT Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc\",\n      \"type\": \"Bearer\"\n  }",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 401 KO\n{\n    \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/clients",
    "title": "Get the list of clients.",
    "description": "<p>This API endpoint will retrieve a full list of clients.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"authentication\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc\"\n}",
          "type": "json"
        }
      ]
    },
    "name": "clientData",
    "group": "Client",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "role",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the client.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n      {\n          \"id\": \"a0ece5db-cd14-4f21-812f-966633e7be86\",\n          \"name\": \"Britney\",\n          \"email\": \"britneyblankenship@quotezart.com\",\n          \"role\": \"admin\"\n      },\n      {\n          \"id\": \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\",\n          \"name\": \"Manning\",\n          \"email\": \"manningblankenship@quotezart.com\",\n          \"role\": \"admin\"\n      },\n      ...\n  ]",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "Client"
  },
  {
    "type": "get",
    "url": "/policies",
    "title": "Get the list of policies.",
    "description": "<p>This API endpoint will retrieve a full list of clients.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authentication",
            "description": "<p>Bearer Token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"authentication\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyaXRuZXlibGFua2Vuc2hpcEBxdW90ZXphcnQuY29tIiwiaWQiOiJhMGVjZTVkYi1jZDE0LTRmMjEtODEyZi05NjY2MzNlN2JlODYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTQ4OTEwMjUsImV4cCI6MTU5NDkwMTgyNX0.KOvfkcGZc2KPqp0X9Kdft4jHpN1kwqvvz2aym4qk8xc\"\n}",
          "type": "json"
        }
      ]
    },
    "name": "policyData",
    "group": "Policy",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the policy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "amountInsured",
            "description": "<p>Amount Insured of the policy.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the client.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "inceptionDate",
            "description": "<p>Inception installment of the policy.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "clientId",
            "description": "<p>ID of the Client.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n      {\n          \"id\": \"64cceef9-3a01-49ae-a23b-3761b604800b\",\n          \"amountInsured\": \"1825.89\",\n          \"email\": \"inesblankenship@quotezart.com\",\n          \"inceptionDate\": \"2016-06-01T03:33:32Z\",\n          \"installmentPayment\": true,\n          \"clientId\": \"e8fd159b-57c4-4d36-9bd7-a59ca13057bb\"\n      },\n      {\n          \"id\": \"7b624ed3-00d5-4c1b-9ab8-c265067ef58b\",\n          \"amountInsured\": \"399.89\",\n          \"email\": \"inesblankenship@quotezart.com\",\n          \"inceptionDate\": \"2015-07-06T06:55:49Z\",\n          \"installmentPayment\": true,\n          \"clientId\": \"a0ece5db-cd14-4f21-812f-966633e7be86\"\n      },\n        ...\n]",
          "type": "json"
        },
        {
          "title": "Success-Response No Data:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unexpectedError",
            "description": "<p>Unexpected error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Unexpected Error\n{\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.documentation.js",
    "groupTitle": "Policy"
  }
] });
