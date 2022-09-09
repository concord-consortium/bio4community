context("Test the overall app", () => {
  beforeEach(() => {
    cy.visit("/?mode=animation&organ=heart");
  });

  describe("Desktop functionalities", () => {
    it("renders with text", () => {
      cy.get(".app .title-box").first().should("have.text", "Plaque Animation");
    });
  });
});
