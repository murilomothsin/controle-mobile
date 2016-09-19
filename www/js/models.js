var baseUrl = "http://127.0.0.1:3000";

var getUrl = function(path) {
	return baseUrl + path;
};

var app = angular.module("app.models", ["ionic", "ngResource"]);

app.factory("Users", function($resource) {
	return $resource(getUrl("/v1/users/:id"), null, {
			login: {
				url: getUrl("/users/sign_in"),
				method: "POST"
			},
			register: {
				url: getUrl("/users/sign_up"),
				method: "POST"
			},
			validToken: {
				url: getUrl("/users/valid_token"),
				method: "POST"
			}
	});
});


app.factory("Clients", function($resource) {
	return $resource(getUrl("/clients"));
});