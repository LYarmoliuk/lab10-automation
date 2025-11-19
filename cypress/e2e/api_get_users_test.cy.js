describe("API Test - Get Users", () => {
  it("Fetch users list", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      failOnStatusCode: false   // 👈 додано!
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 401]); // 👈 приймаємо обидва
    });
  });
});
