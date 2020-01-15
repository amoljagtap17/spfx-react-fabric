import * as React from "react";
import {
  Stack,
  IStackStyles,
  IStackTokens,
  IStackItemStyles
} from "office-ui-fabric-react/lib/Stack";

import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Icon } from "../UI";
import styles from "./Search.module.scss";

const stackStyles: IStackStyles = {
  root: {
    width: "80%"
  }
};

const stackItemStyles: IStackItemStyles = {
  root: {
    textAlign: "center"
  }
};

const containerStackTokens: IStackTokens = { childrenGap: 20 };

export const Search = () => (
  <div className={styles.search}>
    <Stack tokens={containerStackTokens} styles={stackStyles}>
      <Stack.Item align="stretch" styles={stackItemStyles}>
        <SearchBox
          className={styles.searchBox}
          placeholder="Search Something"
          onSearch={newValue => console.log("value is " + newValue)}
          onChange={() => console.log("onChange called")}
        />
      </Stack.Item>
      <Stack.Item align="stretch" styles={stackItemStyles}>
        <div className={styles.iconList}>
          <Icon iconName="Add" />
          <Icon iconName="Trending12" />
          <Icon iconName="HeartFill" />
        </div>
      </Stack.Item>
    </Stack>
  </div>
);
