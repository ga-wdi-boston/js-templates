'use strict';

const appURL = require('../app-url');



const showAll = (success, failure, data) => {
  $.ajax({
    method: 'GET',
    url: appURL.link + '/stories/',
    data,
  }).done(success)
    .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: appURL.link + '/sign-in',
    data,
  }).done(success)
    .fail(failure);
};

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: appURL.link + '/sign-up',
    data,
  }).done(success)
    .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: 'DELETE',
    url: appURL.link + '/sign-out/' + appURL.user.id,
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

const changePassword = (success, failure, data) => {
  console.log(appURL.user.token);
  $.ajax({
    method: 'PATCH',
    url: appURL.link + '/change-password/' + appURL.user.id,
    data: {
        "passwords": {
          "old": data.credentials.old_password,
          "new": data.credentials.password
      }
    },
    headers: {
      Authorization: 'Token token=' + appURL.user.token,
    },
  }).done(success)
    .fail(failure);
};

module.exports = {
  showAll,
  signUp,
  signIn,
  signOut,
  changePassword,
};
