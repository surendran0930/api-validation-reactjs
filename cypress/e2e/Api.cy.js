describe("template spec", () => {
  // it('passes', () => {
  //   cy.visit('http://localhost:5173')
  //   cy.get('[data-cy="cy-apply-button"]').should('be.visible').click()

  //   //form1
  //   cy.get('[data-cy="cy-header-text"]').should('be.visible')
  //   cy.get('[data-cy="cy-input-job-Title"]').should('be.visible').type('Raja')
  //   cy.get('[data-cy="cy-input-Company-Name"]').should('be.visible').type('flyerssoft')
  //   cy.get('[data-cy="cy-input-Industry"]').should('be.visible').type('development')
  //   cy.get('[data-cy="cy-input-Location"]').should('be.visible').type('Chennai')
  //   cy.get('[data-cy="cy-input-Remote-type"]').should('be.visible').type('WorkFromHome')
  //   cy.get('[data-cy="cy-next-button"]').should('be.visible').click()

  //   //form2
  //   cy.get('[data-cy="cy-header-text-form2"]').should('be.visible')

  //   cy.get('[data-cy="cy-input-experience-min"]').should('be.visible').type('1')
  //   cy.get('[data-cy="cy-input-experience-max"]').should('be.visible').type('10')
  //   cy.get('[data-cy="cy-input-salary-min"]').should('be.visible').type('10000')
  //   cy.get('[data-cy="cy-input-salary-max"]').should('be.visible').type('25000')
  //   cy.get('[data-cy="cy-input-total-employee"]').should('be.visible').type('100')
  //   cy.get('[type="radio"]').first().check()
  //   cy.get('[data-cy="cy-submit-button"]').should('be.visible').click()
  // })
  it("validation", () => {
    // cy.get('[data-cy="cy-header-text"]').should('have.text',"Enter the")
    cy.visit("http://localhost:5173");
    cy.get('[data-cy="cy-apply-button"]').should("be.visible").click();
    cy.get('[data-cy="cy-header-text"]').should("be.visible");
    cy.get('[data-cy="cy-input-job-Title"]')
      .should("be.visible")
      .type("suresh");
    cy.get('[data-cy="cy-input-job-Title"]').should("be.visible").clear();
    cy.get('[data-cy="cy-job-title-error"]').should(
      "have.text",
      "Enter Tittle Name"
    );
    cy.get('[data-cy="cy-input-Company-Name"]')
      .should("be.visible")
      .type("flyerssoft");
    cy.get('[data-cy="cy-input-Company-Name"]').should("be.visible").clear();
    cy.get('[data-cy="cy-company-Name-error"]').should("have.text","Enter Company Name")
   cy.get('[data-cy="cy-input-Industry"]').should('be.visible').type('development')
   cy.get('[data-cy="cy-input-Industry"]').should('be.visible').clear();
   cy.get('[data-cy="cy-industry-error"]').should("have.text","Enter Industry Name")
   cy.get('[data-cy="cy-input-Location"]').should('be.visible').type('Chennai')
   cy.get('[data-cy="cy-input-Location"]').should('be.visible').clear()
   cy.get('[data-cy="cy-Location-error"]').should("have.text","Enter Location Name")
   cy.get('[data-cy="cy-input-Remote-type"]').should('be.visible').type('WorkFromHome')
   cy.get('[data-cy="cy-input-Remote-type"]').should('be.visible').clear()
   cy.get('[data-cy="cy-remoteType-error"]').should("have.text","Enter Remote Name")
   cy.get('[data-cy="cy-next-button"]').should('be.disabled')





  });
});
