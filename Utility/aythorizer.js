module.exports.generatePolicy = (token, methodArn) => {
    if (this.decodeToken(token) != null) {
      //Token was decoded successfully
      console.log('yes');
      return generatePolicy('user', 'Allow', methodArn);
    } else {
      //Token is not decoded properly
      console.log('nah');
      const error = new Error('Unauthorized');
      throw error;
    }
  };

  var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
      var policyDocument = {};
      policyDocument.Version = '2012-10-17'; // default version
      policyDocument.Statement = [];
      var statementOne = {};
      statementOne.Action = 'execute-api:Invoke'; // default action
      statementOne.Effect = effect;
      statementOne.Resource = resource;
      policyDocument.Statement[0] = statementOne;
      authResponse.policyDocument = policyDocument;
    }
    return authResponse;
  };