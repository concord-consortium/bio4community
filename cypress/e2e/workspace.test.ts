import textDict from "../../src/utils/translation/lang/en-us.json";

enum Modes {
  animation = "animation",
  simulation = "simulation"
}
enum Organs {
  brain = "brain",
  heart = "heart",
  nose = "nose"
}

context("Test the overall app", () => {
  const visitPage = (mode: string, organ: string) => {
    cy.visit(`/?mode=${mode}&organ=${organ}`);
  };
  const getPlayButton = (first: boolean) => {
    const gpb = () => cy.get(".app .video-view .app-button.play-button");
    if (first) {
      return gpb().first();
    } else {
      return gpb().last();
    }
  };

  interface PageInfo {
    mode: string;
    organ: string;
    title: string;
  }
  const allPages: PageInfo[] = [
    {mode: Modes.animation, organ: Organs.heart, title: "Plaque Animation"},
    {mode: Modes.animation, organ: Organs.nose, title: "Immune Response Animation"},
    {mode: Modes.animation, organ: Organs.brain, title: "Focus Animation"},
    {mode: Modes.simulation, organ: Organs.heart, title: "Plaque Model Simulator"},
    {mode: Modes.simulation, organ: Organs.nose, title: "Immune Response Model Simulator"},
    {mode: Modes.simulation, organ: Organs.brain, title: "Focus Model Simulator"},
  ];
  const modePages: PageInfo[] = [
    {mode: Modes.animation, organ: Organs.heart, title: "Plaque Animation"},
    {mode: Modes.simulation, organ: Organs.heart, title: "Plaque Model Simulator"}
  ];
  describe("Titles are correct", () => {
    allPages.forEach(({ mode, organ, title }: PageInfo) => {
      it(`renders the title for the ${organ} ${mode}`, () => {
        visitPage(mode, organ);
        if (mode === Modes.animation) {
          cy.get(".app .title-box").first().should("have.text", title);
        } else {
          cy.get(".app .simulation-settings .settings-header").first().should("have.text", `${title}: Settings`);
        }
      });
    });
  });

  // TODO: Turn this back on when the new simulation videos have been set up
  describe.skip("Simulation tissue video", () => {
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

  describe("Animation videos", () => {
    it(`can't play tissue video until zooming`, () => {
      visitPage("animation", "heart");
      getPlayButton(true).should("not.be.visible");
      cy.get(".app .silhouette-button").click();
      getPlayButton(true).should("be.visible").click();
      getPlayButton(true).should("have.text", "Pause");
    });
    it(`can't play cell video while tissue video is playing`, () => {
      visitPage("animation", "heart");
      cy.get(".app .silhouette-button").click();
      getPlayButton(false).should("not.be.visible"); // can't play cell video
      getPlayButton(true).click();
      getPlayButton(false).should("not.be.visible"); // still can't play cell video
      getPlayButton(true).should("have.text", "Pause").click();
      getPlayButton(false).should("be.visible").click(); // now you can
      getPlayButton(false).should("have.text", "Pause");
    });
  });

  describe("Animation stress input", () => {
    // Only works for brain animation! Other animations should get the first toggle-control.
    const getStressControl = () => cy.get(".app .toggle-control").last(); 

    beforeEach(() => {
      visitPage("animation", "brain");
    });
    it(`renders the correct stress text`, () => {
      const getStressExampleText = () => cy.get(".app .stress-example");
      getStressExampleText().should("have.text", textDict.LOWSTRESSEXAMPLE);
      getStressControl().click();
      getStressExampleText().should("have.text", textDict.HIGHSTRESSEXAMPLE);
    });
    it(`saves examples`, () => {
      const getTextArea = () => cy.get(".app .stress-pane textarea");
      const exampleText = "example text";
      const exampleText2 = "example2";
      getTextArea().type(exampleText);
      getTextArea().blur();
      getTextArea().should("have.text", exampleText);
      getStressControl().click().wait(760);
      getTextArea().should("have.text", "");
      getTextArea().type(exampleText2);
      getStressControl().click().wait(760);
      getTextArea().should("have.text", exampleText);
      getStressControl().click();
      getTextArea().should("have.text", exampleText2);
    });
  });

  describe("Key works", () => {
    const getKeyButton = (mode) => {
      if (mode === Modes.animation) return cy.get(".app .key-button");
      return cy.get(".app .simulation-button.key");
    };
    const getKey = () => cy.get(".app .app-key");
    const getKeyTitle = () => cy.get(".app .app-key .title-box");
    const getCloseKeyButton = () => cy.get(".app .title-close-button");
    modePages.forEach(({ mode, organ }: PageInfo) => {
      it(`${mode} key can be displayed and hidden`, () => {
        visitPage(mode, organ);
        getKeyButton(mode).click();
        getKey().should("be.visible");
          // Test using the key button to hide the key, which only works in the animation
          if (mode === Modes.animation) {
          // Move the key so it's not blocking the key button
          const targetX = 700;
          const targetY = 200;
          getKeyTitle()
            .trigger("mousedown", {which: 1})
            .trigger("mousemove", {clientX: targetX, clientY: targetY})
            .trigger("mouseup", {force: true});
          getKeyButton(mode).click();
          getKey().should("not.be.visible");
          getKeyButton(mode).click();
          getKey().should("be.visible");
        }
        getCloseKeyButton().click();
        getKey().should("not.be.visible");
      });
    });
  });
});
