import React, { FunctionComponent, ReactElement } from "react";

interface ErrorPageInterface {
  location?: {
    state: {
      previousPath?: string;
    };
  };
}

export const ErrorHandling: FunctionComponent<ErrorPageInterface> = ({
  location,
}): ReactElement => {
  return (
    <section>
      <div className="">
        <div>ERROR: url={location?.state?.previousPath ?? "/"}</div>
      </div>
    </section>
  );
};
