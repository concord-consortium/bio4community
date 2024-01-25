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
  const getAnimationPlayButton = (first: boolean) => {
    const gpb = () => cy.get(".app .video-view .app-button.play-button");
    if (first) {
      return gpb().first();
    } else {
      return gpb().last();
    }
  };
  const getSimulationPlayButton = () => {
    return cy.get(".app .simulation-settings .play-button");
  };

  interface PageInfo {
    mode: Modes;
    organ: Organs;
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

  describe("Simulation video", () => {
    const topVideoTitle = () => cy.get(".app .video-area .video-title.top-video-title");
    const outcomeArea = () => cy.get(".app .video-area .outcome-area");
    const closeOutcomeButton = () => outcomeArea().find(".hide-button");
    const resultButton = () => cy.get(".app .video-area .simulation-button.result");
    beforeEach(() => {
      visitPage("simulation", "nose");
    });
    it(`renders the video title`, () => {
      topVideoTitle().should("have.text", "Simulated Inside of Nose");
    });
    it(`play button works`, () => {
      getSimulationPlayButton().should("not.have.class", "playing");
      getSimulationPlayButton().click();
      getSimulationPlayButton().should("have.class", "playing");
      getSimulationPlayButton().click();
      getSimulationPlayButton().should("not.have.class", "playing");
    });
    it(`slider starts video and outcome message displays properly`, () => {
      outcomeArea().should("not.exist");
      cy.get(".app .simulation-settings .rc-slider").click("right");
      getSimulationPlayButton().should("have.class", "playing");
      cy.wait(6000);
      outcomeArea().should("exist");
      resultButton().should("not.exist");
      closeOutcomeButton().should("exist").click();
      outcomeArea().should("not.exist");
      resultButton().should("exist").click();
      resultButton().should("not.exist");
      closeOutcomeButton().should("exist");
    });
    it(`brain videos switch and start playing when brain region changes`, () => {
      visitPage("simulation", "brain");
      topVideoTitle().should("have.text", "Simulated Prefrontal Cortex");
      getSimulationPlayButton().should("not.have.class", "playing");
      cy.get(".app .simulation-settings .toggle-button").eq(1).click();
      topVideoTitle().should("have.text", "Simulated Amygdala");
      getSimulationPlayButton().should("have.class", "playing");
    });
  });

  describe("Animation videos", () => {
    it(`can't play tissue video until zooming`, () => {
      visitPage("animation", "heart");
      getAnimationPlayButton(true).should("not.be.visible");
      cy.get(".app .silhouette-button").click();
      cy.wait(2500);
      getAnimationPlayButton(true).click();
      getAnimationPlayButton(true).should("have.text", "Pause");
    });
    it(`can't play cell video while tissue video is playing`, () => {
      visitPage("animation", "heart");
      cy.get(".app .silhouette-button").click();
      getAnimationPlayButton(false).should("not.be.visible"); // can't play cell video
      getAnimationPlayButton(true).click();
      getAnimationPlayButton(false).should("not.be.visible"); // still can't play cell video
      getAnimationPlayButton(true).should("have.text", "Pause").click();
      getAnimationPlayButton(false).should("be.visible").click(); // now you can
      getAnimationPlayButton(false).should("have.text", "Pause");
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
    const getKeyButton = (mode: Modes) => {
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
