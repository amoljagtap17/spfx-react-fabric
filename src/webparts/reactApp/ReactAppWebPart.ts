import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import ReactApp from "./components/ReactApp";

export default class ReactAppWebPart extends BaseClientSideWebPart<{}> {
  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(ReactApp);

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
}
