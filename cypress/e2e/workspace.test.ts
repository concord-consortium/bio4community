
context("Test the overall app", () => {
  const visitPage = (mode: string, organ: string) => {
    cy.visit(`/?mode=${mode}&organ=${organ}`);
  };
  const getPlayButton = (first: boolean) => {
    const gpb = () => cy.get(".app .video-view .video-view-button");
    if (first) {
      return gpb().first();
    } else {
      return gpb().last();
    }
  };

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
        visitPage(mode, organ);
        cy.get(".app .title-box").first().should("have.text", title);
      });
    });
  });

  describe("Simulation tissue video", () => {
    beforeEach(() => {
      visitPage("simulation", "heart");
    });
    it(`renders the video title`, () => {
      cy.get(".app .video-view .video-title").first().should("have.text", "Simulated Artery");
    });
    it(`play button works`, () => {
      getPlayButton(true).should("have.text", "Play");
      getPlayButton(true).click();
      getPlayButton(true).should("have.text", "Pause");
      getPlayButton(true).click();
      getPlayButton(true).should("have.text", "Play");
    });
    it(`can skip by clicking timeline mark label`, () => {
      const getLastLabel = () => cy.get(".app .video-view").first().find(".rc-slider-mark-text").last();
      getPlayButton(true).click();
      getPlayButton(true).should("have.text", "Pause");
      getLastLabel().click();
      getPlayButton(true).should("have.text", "Play");
    });
  });
});