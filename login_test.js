Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','teste@teste.com.br')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)

}).tag('@sucesso')

Scenario('Tentativa de login com e-mail inválido',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','teste!@#$#!$#!')
    I.fillField('#password','123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',5)


}).tag('@negativo1')

Scenario('Tentativa de login com senha incorreta',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','teste@teste.com.br')
    I.fillField('#password','12345')
    I.click('#btnLogin')
    I.waitForText('Senha inválida',5)

}).tag('@negativo2')

Scenario('Deixando um ou mais campos vazios',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','0')
    I.fillField('#password','12345')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido',5)

}).tag('@negativo3')

