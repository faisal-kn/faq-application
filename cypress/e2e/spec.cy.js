describe("Faq application Testing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should display the FAQ page", () => {
    cy.get("h1").should("contain", "Frequently");
  });
  it("should open answers on click", () => {
    cy.get("#faq-container")
      .children()
      .each(($el, index, $list) => {
        cy.wrap($el).click();
        cy.get(`#answer-${index + 1}`).should("be.visible");
      });
  });
  it("should close answers on click", () => {
    cy.get("#faq-container")
      .children()
      .each(($el, index, $list) => {
        cy.wrap($el).click();
        cy.get(`#answer-${index + 1}`).should("be.visible");
        cy.get(`#question-${index + 1}`).click();
        cy.get(`#answer-${index + 1}`).should("not.exist");
      });
  });
});
