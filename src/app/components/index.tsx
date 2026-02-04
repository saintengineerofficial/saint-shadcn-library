import type React from "react";

import BackgroundSectionEntry from "./global/BackgroundSection/entry";
import BaseDialogEntry from "./global/BaseDialog/entry";
import DataEmptyErrorEntry from "./global/DataEmptyError/entry";
import DataWrapperEntry from "./global/DataWrapper/entry";
import DecorateAvatarEntry from "./global/DecorateAvatar/entry";
import DecorateContainerEntry from "./global/DecorateContainer/entry";
import GradientBoxEntry from "./global/GradientBox/entry";
import InfiniteListEntry from "./global/InfiniteList/entry";
import InternalImageEntry from "./global/InternalImage/entry";
import LazyImageEntry from "./global/LazyImage/entry";
import MarqueeEntry from "./global/Marquee/entry";
import RouterWrapperEntry from "./global/RouterWrapper/entry";
import SpaceEntry from "./global/Spacing/entry";
import SvgaVideoEntry from "./global/SvgaVideo/entry";
import TransitionShadowEntry from "./global/TransitionShadow/entry";
import VideoPlayerEntry from "./global/VideoPlayer/entry";

export type ComponentDemoEntry = {
  key: string;
  title: string;
  description: string;
  Demo: () => React.ReactNode;
  Doc?: () => React.ReactNode;
  demoPath?: string;
  componentPath?: string;
};

export const componentDemos: ComponentDemoEntry[] = [
  BackgroundSectionEntry,
  SvgaVideoEntry,
  InternalImageEntry,
  LazyImageEntry,
  SpaceEntry,
  VideoPlayerEntry,
  TransitionShadowEntry,
  DecorateAvatarEntry,
  DecorateContainerEntry,
  GradientBoxEntry,
  RouterWrapperEntry,
  InfiniteListEntry,
  MarqueeEntry,
  BaseDialogEntry,

  // DataEmptyErrorEntry,
  // DataWrapperEntry,
];
