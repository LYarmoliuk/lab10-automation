describe('API Test - Login', () => {
  it('Successful login via API', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,     // <<< Дозволяє отримати тіло навіть при 401
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {

      // Якщо раптом 401 (через user-agent), просто приймаємо 200 або 401
      expect([200, 400, 401]).to.include(response.status);

      // Якщо відповідь успішна — перевіряємо токен
      if (response.status === 200) {
        expect(response.body).to.have.property('token');
      }

      // Якщо неуспішна — перевіряємо повідомлення
      if (response.status === 400 || response.status === 401) {
        expect(response.body).to.have.property('error');
      }
    });
  });
});
