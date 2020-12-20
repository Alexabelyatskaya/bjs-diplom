'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = function(loginData) {
	let loginCallback = (loginResponse) => {
			if (!loginResponse.success) {
				this.setLoginErrorMessage('Пользователь не существует!');
			} else location.reload();
	};
	ApiConnector.login(loginData, loginCallback);
}

userForm.registerFormCallback = function(registerData) {
	let registerCallback = (registerResponse) => {
			if (!registerResponse.success) {
				this.setRegisterErrorMessage('Данные введены некорректно!');
			} else location.reload();
			};
	ApiConnector.register(registerData, registerCallback);
}