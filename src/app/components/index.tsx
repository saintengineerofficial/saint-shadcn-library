import type React from "react";

import BackgroundSectionEntry from "./global/BackgroundSection/entry";
import BaseDialogEntry from "./global/BaseDialog/entry";
import BaseImageEntry from "./global/BaseImage/entry";
import DataEmptyErrorEntry from "./global/DataEmptyError/entry";
import DataWrapperEntry from "./global/DataWrapper/entry";
import GradientBoxEntry from "./global/GradientBox/entry";
import GridEntry from "./global/Grid/entry";
import InfiniteListEntry from "./global/InfiniteList/entry";
import InternalImageEntry from "./global/InternalImage/entry";
import LazyImageEntry from "./global/LazyImage/entry";
import LoadingEntry from "./global/Loading/entry";
import RouterWrapperEntry from "./global/RouterWrapper/entry";
import SafeLinkEntry from "./global/SafeLink/entry";
import SkeletonGridEntry from "./global/SkeletonGrid/entry";
import SpaceEntry from "./global/Space/entry";
import SvgaVideoEntry from "./global/SvgaVideo/entry";
import TransitionMotionEntry from "./global/TransitionMotion/entry";
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
  SpaceEntry,
  SkeletonGridEntry,
  BackgroundSectionEntry,
  BaseDialogEntry,
  BaseImageEntry,
  DataEmptyErrorEntry,
  DataWrapperEntry,
  GradientBoxEntry,
  GridEntry,
  InfiniteListEntry,
  InternalImageEntry,
  LazyImageEntry,
  LoadingEntry,
  RouterWrapperEntry,
  SafeLinkEntry,
  SvgaVideoEntry,
  TransitionMotionEntry,
  TransitionShadowEntry,
  VideoPlayerEntry,
];
