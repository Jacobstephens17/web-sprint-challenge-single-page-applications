describe("Lambda Eats App", () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000/')
  })

  const submitButton = () => cy.get('#submit');
  const sauceClick = () => cy.get('#sauce');

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it('submitButton', () => {
      submitButton().should('exist')
      submitButton().click()
      sauceClick().click()
      sauceClick().should('be.enabled')
  })
 
})
