import React, { useState } from "react";

import { Title } from "./title";
import { AppContext } from "../hooks/use-app-context";

import "./stress-pane.scss";

interface IStressPane {
  ac: AppContext;
  high: boolean;
}
export const StressPane = ({ ac, high }: IStressPane) => {
  const [lowStressExample, setLowStressExample] = useState("");
  const [highStressExample, setHighStressExample] = useState("");

  const id = `${high ? "high" : "low"}-stress-input`;
  return (
    <div className="stress-pane">
      <Title ac={ac} text={ac.t("STRESSTITLE")} />
      <div className="details-box">
        <div>{ ac.t(high ? "HIGHSTRESSINTRO" : "LOWSTRESSINTRO") }</div>
        <div className="stress-example">{ ac.t(high ? "HIGHSTRESSEXAMPLE" : "LOWSTRESSEXAMPLE") }</div>
        <div className="stress-prompt">
          <label htmlFor={id}>
            { ac.t(high ? "HIGHSTRESSPROMPT" : "LOWSTRESSPROMPT") }
          </label>
        </div>
        <textarea
          className="stress-entry"
          id={id}
          cols={54}
          rows={3}
          onChange={(event: any) => {
            if (high) {
              setHighStressExample(event.target.value);
            } else {
              setLowStressExample(event.target.value);
            }
          }}
          value={high ? highStressExample : lowStressExample}
        />
      </div>
    </div>
  );
};
