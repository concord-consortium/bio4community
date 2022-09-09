context("Test the overall app", () => {
  interface pageInfo {
    mode: string;
    organ: string;
    title: string;
  }
  const pages: pageInfo[] = [
    {mode: "animation", organ: "heart", title: "Plaque Animation"},
    {mode: "animation", organ: "nose", title: "Immune Response Animation"},
    {mode: "animation", organ: "brain", title: "Focus Animation"},
    {mode: "simulation", organ: "heart", title: "Plaque Model Simulator"},
    {mode: "simulation", organ: "nose", title: "Immune Response Model Simulator"},
    {mode: "simulation", organ: "brain", title: "Focus Model Simulator"},
  ];
  describe("Titles are correct", () => {
    pages.forEach(({ mode, organ, title }: pageInfo) => {
      it(`renders the title for the ${organ} ${mode}`, () => {
        cy.visit(`/?mode=${mode}&organ=${organ}`);
        cy.get(".app .title-box").first().should("have.text", title);
      });
    });
  });
});
