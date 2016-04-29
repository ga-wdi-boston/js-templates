'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
  $('#signup_form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    authApi.signUp(authUi.success, authUi.failure, data);
  });

  $('#signin_form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('sign-in' + data);
    authApi.signIn(authUi.success, authUi.failure, data);
  });




};

module.exports = {
  addHandlers,
};
