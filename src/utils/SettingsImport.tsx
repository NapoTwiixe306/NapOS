import React from "react";
import Wifi from "../Components/Application/Settings/Wifi";
import Bluetooth from "../Components/Application/Settings/Bluetooth";
import Network from "../Components/Application/Settings/Network";
import Notification from "../Components/Application/Settings/Notification";
import Sound from "../Components/Application/Settings/Sound";
import Focus from "../Components/Application/Settings/Focus";
import Screen from "../Components/Application/Settings/Screen";
import General from "../Components/Application/Settings/General";
import Themes from "../Components/Application/Settings/Themes";

interface TabComponents {
  Wifi: () => React.JSX.Element;
  Bluetooth: () => React.JSX.Element;
  Réseau: () => React.JSX.Element;
  Notifications: () => React.JSX.Element;
  Son: () => React.JSX.Element;
  Concentration: () => React.JSX.Element;
  'Temps d\'écran': () => React.JSX.Element;
  Général: () => React.JSX.Element;
  Themes: () => React.JSX.Element;
  [key: string]: () => React.JSX.Element; 
}

const tabComponents: TabComponents = {
  Wifi,
  Bluetooth,
  Réseau: Network,
  Notifications: Notification,
  Son: Sound,
  Concentration: Focus,
  'Temps d\'écran': Screen,
  Général: General,
  Themes,
};

export const renderSelectedComponent = (selectedTab: string | null): JSX.Element => {
  if (selectedTab && tabComponents[selectedTab]) {
    const Component = tabComponents[selectedTab] as React.ComponentType;
    return <Component />;
  }
  return <Wifi />;
};
