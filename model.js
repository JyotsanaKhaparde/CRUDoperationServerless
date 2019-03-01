var AWS = require("aws-sdk");
var dynamodb = new AWS.DynamoDB({ region: "us-west-2", apiVersion: "2012-08-10" });
function userModel() {

}

userModel.prototype.createEmployeProfile = (requestObject) => {
    console.log("33----models---req :", requestObject);
    console.log("144---models---req object----employee id :", requestObject.employeeId);
    console.log("144---models---req object----employee id :", requestObject.employeeName);
    console.log("144---models---req object----employee id :", requestObject.employeeEmail);
    console.log("144---models---req object----employee id :", requestObject.employeeCity);
    console.log("144---models---req object----employee id :", requestObject.employeeSalary);
    console.log("144---models---req object----employee id :", requestObject.employeeProfile);

    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Item: {
                "employeeId": {
                    S: requestObject.employeeId
                },
                "employeeName": {
                    S: requestObject.employeeName
                },
                "employeeEmail": {
                    S: requestObject.employeeEmail
                },
                "employeeCity": {
                    S: requestObject.employeeCity
                },
                "employeeSalary": {
                    S: requestObject.employeeSalary
                },
                "employeeProfile": {
                    S: requestObject.employeeProfile
                }
            }
        };
        console.log("Putting employee profile details");
        dynamodb.putItem(params, function (err, data) {
            if (err) {
                console.log("Error:" + err);
                reject(err);
            } else {
                console.log("Result:" + JSON.stringify(data));
                resolve(data);
            }
        });
    });
};


userModel.prototype.updatEmployeeName = (requestObject) => {
    console.log("191----model----req", requestObject);
    console.log("192---models---req object----employee id :", requestObject.employeeId);
    console.log("193---models---req object----employee name :", requestObject.employeeName);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId,
                },
            },
            ExpressionAttributeValues: {
                ":p": {
                    S: requestObject.employeeName
                }
            },
            UpdateExpression: "SET employeeName = :p",
            ReturnValues: "ALL_NEW"
        };
        console.log("updating employee name");
        dynamodb.updateItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};


userModel.prototype.updatEmployEmail = (requestObject) => {
    console.log("222----model----req", requestObject);
    console.log("192---models---req object----employee id :", requestObject.employeeId);
    console.log("193---models---req object----employee name :", requestObject.employeeEmail);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId,
                },
            },
            ExpressionAttributeValues: {
                ":p": {
                    S: requestObject.employeeEmail
                }
            },
            UpdateExpression: "SET employeeEmail = :p",
            ReturnValues: "ALL_NEW"
        };
        console.log("updating employee email");
        dynamodb.updateItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};

userModel.prototype.updateEmployeeCity = (requestObject) => {
    console.log("253----model----req", requestObject);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId,
                },
            },
            ExpressionAttributeValues: {
                ":p": {
                    S: requestObject.employeeCity
                }
            },
            UpdateExpression: "SET employeeCity = :p",
            ReturnValues: "ALL_NEW"
        };
        console.log("updating employee city");
        dynamodb.updateItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};

userModel.prototype.updateEmployeeSalary = (requestObject) => {
    console.log("284----model----req", requestObject);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId,
                },
            },
            ExpressionAttributeValues: {
                ":p": {
                    S: requestObject.employeeSalary
                }
            },
            UpdateExpression: "SET employeeSalary = :p",
            ReturnValues: "ALL_NEW"
        };
        console.log("updating employee salary");
        dynamodb.updateItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};

userModel.prototype.updateEmployeeProfile = (requestObject) => {
    console.log("315----model----req", requestObject);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId,
                },
            },
            ExpressionAttributeValues: {
                ":p": {
                    S: requestObject.employeeProfile
                }
            },
            UpdateExpression: "SET employeeProfile = :p",
            ReturnValues: "ALL_NEW"
        };
        console.log("updating employee profile");
        dynamodb.updateItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};

userModel.prototype.selectAllEmploy = () => {
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table
        };
        dynamodb.scan(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};


userModel.prototype.deleteItem = (requestObject) => {
    console.log("368----model----req : ", requestObject);
    return new Promise(function (resolve, reject) {
        var table = "employee";
        var params = {
            TableName: table,
            Key: {
                "employeeId": {
                    S: requestObject.employeeId
                },
            },
        };
        console.log("379---deleting item from employee");
        dynamodb.deleteItem(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
                reject(err);
            }
            else {
                console.log(JSON.stringify(data));
                resolve(data);
            }
        });
    });
};

module.exports = new userModel();

