'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = function(loginData) {
	let loginCollback = (loginResponse) => {
			if (!loginResponse.success) {
				this.setLoginErrorMessage('Пользователь не существует!');
			} 
				location.reload();
	};
	ApiConnector.login(loginData, loginCollback);
}

userForm.registerFormCallback = function(registerData) {
	let registerCollback = (registerResponse) => {
			if (!registerResponse.success) {
				this.setRegisterErrorMessage('Данные введены некорректно!');
			}
			location.reload();			
			};
	ApiConnector.register(registerData, registerCollback);
}