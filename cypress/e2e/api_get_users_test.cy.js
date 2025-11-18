describe('API Test - Get Users', () => {
  it('Fetch users list', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body.data.length).to.be.greaterThan(0);

        // Перевірка email
        response.body.data.forEach(user => {
          expect(user.email).to.include('@');
        });
    });
  });
});
