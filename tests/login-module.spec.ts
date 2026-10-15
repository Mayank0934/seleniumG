import { test } from './fixtures/common-fixtures.js';
import { expect } from '@playwright/test';

import loginmoduledata
  from './datafiles/login-module-data.json'
  with { type: 'json' };

test.use({
  storageState: {
    cookies: [],
    origins: []
  }
});

test(
  '[Login] verify user cannot login with invalid password',
  async ({ loginpage, commonUtils }) => {

    await loginpage.openOrangehrm();

    const username = commonUtils.decryptData(
      process.env.USER_NAME!
    );

    await loginpage.loginOrangeHrm(
      username,
      loginmoduledata.wrong_password
    );

    await expect(loginpage.invalidcrederrorpopup)
      .toHaveText(loginmoduledata.invalidcred);
  }
);

test(
  '[Login] verify user cannot login with invalid username',
  async ({ loginpage, commonUtils }) => {

    await loginpage.openOrangehrm();

    const password = commonUtils.decryptData(
      process.env.PASSWORD!
    );

    await loginpage.loginOrangeHrm(
      "Admin",
      password
    );

    await expect(loginpage.invalidcrederrorpopup)
      .toHaveText(loginmoduledata.invalidcred);

    await expect(loginpage.usernameInput)
      .toBeVisible();
  }
);

test(
  '[Login] verify user cannot login with invalid username and invalid password',
  async ({ loginpage }) => {

    await loginpage.openOrangehrm();

    await loginpage.loginOrangeHrm(
      loginmoduledata.wrong_username,
      loginmoduledata.wrong_password
    );

    await expect(loginpage.invalidcrederrorpopup)
      .toHaveText(loginmoduledata.invalidcred);

    await expect(loginpage.usernameInput)
      .toBeVisible();
  }
);