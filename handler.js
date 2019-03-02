'use strict';
const models = require('./model');


module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.createEmployee = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeName": parseParameter.employeeName,
    "employeeEmail": parseParameter.employeeEmail,
    "employeeCity": parseParameter.employeeCity,
    "employeeSalary": parseParameter.employeeSalary,
    "employeeProfile": parseParameter.employeeProfile
  };
  console.log("event id is :", parseParameter.employeeId);
  console.log("event name is: ", parseParameter.employeeName);
  console.log("event email is: ", parseParameter.employeeEmail);
  console.log("event city  is: ", parseParameter.employeeCity);
  console.log("event salary is: ", parseParameter.employeeSalary);
  console.log("event profile is: ", parseParameter.employeeProfile);

  var employResult = await models.createEmployeProfile(requestObject);
  console.log("246---handler---employresult : " + JSON.stringify(employResult));

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successfully created employe profile' }),
  };
  console.log("Response:" + JSON.stringify(response));
  return response;
};


module.exports.updateName = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeName": parseParameter.employeeName
  }
  console.log("event name is :", parseParameter.employeeName);

  var employResult = await models.updatEmployeeName(requestObject);
  console.log("267---handler---employresult : " + JSON.stringify(employResult));

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successfully updated employe name' }),
  };
  console.log("Response:" + JSON.stringify(response));
  return response;
};

module.exports.updateEmail = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeEmail": parseParameter.employeeEmail
  }
  console.log("event email is :", parseParameter.employeeEmail);

  var employResult = await models.updatEmployEmail(requestObject);
  console.log("284---handler---employresult : " + JSON.stringify(employResult));

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successfully updated employe email' }),
  };
  console.log("Response:" + JSON.stringify(response));
  return response;
};


module.exports.updateCity = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeCity": parseParameter.employeeCity
  }
  console.log("event city is :", parseParameter.employeeCity);

  var employResult = await models.updateEmployeeCity(requestObject);
  console.log("303--handler---employresult : ", employResult);

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successdully updated employ city' }),
  };
  console.log("Response :" + JSON.stringify(response));
  return response;
};

module.exports.updateSalary = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeSalary": parseParameter.employeeSalary
  }
  console.log("event salary is :", parseParameter.employeeSalary);

  var employResult = await models.updateEmployeeSalary(requestObject);
  console.log("321--handler---employresult : ", employResult);

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successdully updated employ salary' }),
  };
  console.log("Response :" + JSON.stringify(response));
  return response;
};


module.exports.updateProfile = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId,
    "employeeProfile": parseParameter.employeeProfile
  }
  console.log("event profile is :", parseParameter.employeeProfile);

  var employResult = await models.updateEmployeeProfile(requestObject);
  console.log("340--handler---employresult : ", employResult);

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successdully updated employ profile' })
  };
  console.log("Response :" + JSON.stringify(response));
  return response;
};

module.exports.selectEmployee = async () => {
  var result = await models.selectAllEmploy();
  console.log("353--handler---Result :" + JSON.stringify(result));
  console.log("148----handler----result length : ", result.length);

  //for (i = 0; i <= result.length; i++) {
    // var obj = {
    //   "employeeEmail": result.Items.employeeEmail.S,
    //   "employeeSalary": result.Items.employeeSalary.S,
    //   "employeeName": result.Items.employeeName.S,
    //   "employeeProfile": result.Items.employeeProfile.S,
    //   "employeeId": result.Items.employeeId.S,
    //   "employeeCity": result.Items.employeeCity.S
    // }
 // }

  var response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};


module.exports.deleteItem = async (event) => {
  var parseParameter = JSON.parse(event.body);
  var requestObject = {
    "employeeId": parseParameter.employeeId
  };
  console.log("event id is : ", parseParameter.employeeId);
  var employResult = await models.deleteItem(requestObject);
  console.log("370---handler----employresult : ", employResult);

  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'successdully deleted item' })
  };
  console.log("Response :" + JSON.stringify(response));
  return response;
};


module.exports.selectSpecificEmployee = async (event) => {
  var parseParameter = JSON.parse(event.body);
  console.log("ecent id is :", parseParameter.employeeId);
  var requestObject = {
    employeeId: parseParameter.employeeId
  };
  var employResult = await models.getSpecificEmployee(requestObject);
  console.log("182----handler----employeresult :", employResult);
  var response = {
    statusCode: 200,
    body: JSON.stringify({ 'msg': 'success' })
  }
  // if (employResult === {} || employResult === " " || employResult === null) {
  //   response.body = JSON.stringify({ 'msg': 'This is is not present in database' })
  // } else {
  var obj = {
    "employeeEmail": employResult.Item.employeeEmail.S,
    "employeeSalary": employResult.Item.employeeSalary.S,
    "employeeName": employResult.Item.employeeName.S,
    "employeeProfile": employResult.Item.employeeProfile.S,
    "employeeId": employResult.Item.employeeId.S,
    "employeeCity": employResult.Item.employeeCity.S
  }
  response.body = JSON.stringify(obj);
  //}
  return response;
}
