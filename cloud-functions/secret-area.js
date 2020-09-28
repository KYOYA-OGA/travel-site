exports.handler = function (event, context, callback) {
  let body;

  if (event.body) {
    body = json.parse(event.body);
  } else {
    body = {};
  }

  if (body.password) {
    callback(null, {
      statusCode: 200,
      body: 'Welcome to the super secret area',
    });
  } else {
    callback(null, {
      statusCode: 401,
    });
  }
};
