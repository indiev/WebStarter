/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authQuester4a6ae59bUserPoolId = process.env.AUTH_QUESTER4A6AE59B_USERPOOLID
var apiQuesterGraphQLAPIIdOutput = process.env.API_QUESTER_GRAPHQLAPIIDOUTPUT
var apiQuesterGraphQLAPIEndpointOutput = process.env.API_QUESTER_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = async (event, context, callback) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify({ event, context, callback })
  };
  return response;
};
