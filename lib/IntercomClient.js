'use strict';

var React = require('react-native');
var {
	NativeModules
} = React;

let IntercomWrapper = NativeModules.IntercomWrapper;

/**
 * @class IntercomClient
 */

class IntercomClient {
	static Visibility = {
		VISIBLE: 'VISIBLE',
		GONE: 'GONE',
	};

	registerIdentifiedUser(options) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerIdentifiedUser(options, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	updateUser(options) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.updateUser(options, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	registerUnidentifiedUser() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerUnidentifiedUser(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	reset() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.reset(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	logEvent(eventName, metaData) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.logEvent(eventName, metaData, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	displayMessenger() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.displayMessenger(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	hideMessenger() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.hideMessenger(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	displayMessageComposer() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.displayMessageComposer(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	displayConversationsList() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.displayConversationsList(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	getUnreadConversationCount() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.getUnreadConversationCount(function(error, count) {
				if (error) {
					reject(error);
				} else {
					resolve(count);
				}
			});
		});
	}

	setLauncherVisibility(visibility: String) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setLauncherVisibility(visibility, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	setInAppMessageVisibility(visibility: String) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setInAppMessageVisibility(visibility, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve()
				}
			});
		});
	}

	setupAPN(deviceToken) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setupAPN(deviceToken, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	registerForPush() {
		return new Promise((resolve, reject) => {
			IntercomWrapper.registerForPush(function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	setHMAC(hmac, data) {
		return new Promise((resolve, reject) => {
			IntercomWrapper.setHMAC(hmac, data, function(error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}

module.exports = new IntercomClient();
