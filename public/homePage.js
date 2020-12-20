'use strict'

const exitObject = new LogoutButton();

exitObject.action = function() {
	let callback = (response) => {
		if (response.success) {
			location.reload();
		}
	}
	ApiConnector.logout(callback);
}


let callback = (response) => {
	if (response.success) {
		ProfileWidget.showProfile(response.data);
	}
}
ApiConnector.current(callback);


let refresh = () => {
	let rateCallback = (response) => {
		if (response.success) {
			let getRate = new RatesBoard();
			getRate.clearTable();
			getRate.fillTable(response.data);
		}
	}
	ApiConnector.getStocks(rateCallback);
};

refresh();
setInterval(refresh, 60000);

const moneyObject = new MoneyManager();

let addingFunds = (data) => {

	let callback = (response) => {
	if (response.success) {
		ProfileWidget.showProfile(response.data);
		moneyObject.setMessage(true, 'Счет пополнен!');
	} else {
		moneyObject.setMessage(false, response.error);
	}
};
	ApiConnector.addMoney(data, callback);
};

moneyObject.addMoneyCallback = addingFunds;