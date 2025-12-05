export interface LoadMoreRes<T> {
  limitCount?: number;
  hasMore: boolean;
  scroll?: string;
  list: T[];
}

// 获取活动配置
export interface ActConfigParams {
  activitiesId: number;
  langKey?: string;
}

export interface ActConfigRes {
  id: number;
  subActivitiesTypes: string;
  startTime: number;
  endTime: number;
  isPartition: boolean;
  isNationalDay: boolean;
  userRegion: string;
  regionList: string[];
  giftInfoList: unknown;
  extConfig: string;
  isWhite: boolean;
}

// 获取翻译
export interface TranslationsParams {
  translateId: number;
}

export type TranslationsRes = {
  string: Record<string, string>;
};

// 获取奖励配置
export interface RewardConfigV3Res {
  userSendGiftRank?: RewardConfigV3ResUserConfig;
  userReceiveGiftRank?: RewardConfigV3ResUserConfig;
  userRechargeRank?: RewardConfigV3ResUserConfig;
  ordinaryRoomRank?: RewardConfigV3ResRoomConfig;
}

export type RewardConfigV3ResType = keyof RewardConfigV3Res;

export interface RewardConfigV3ResUserConfig {
  userConfig: ActivitiesReward[];
}
export interface RewardConfigV3ResRoomConfig {
  roomConfig: ActivitiesReward[];
}

export interface ActivitiesReward {
  id: number;
  name: string;
  sort: number;
  displayStyle: number;
  nameI18n: Record<string, string>;
  activityGiftConfigGroupGiftList: RewardGift[];
  displayStyleExtJson?: string;
}

export interface RewardGift {
  cover: string;
  expireType: number;
  id: number;
  itemType: number;
  name: string;
  nameI18n: Record<string, string>;
  prizeId: number;
  sort: number;
  svga: string;
}

export interface ExtConfig {
  web: WebConfig;
  templateConfig: TemplateConfig;
}

export interface WebConfig {
  pageConfig: PageConfig;
  activityUrl: string;
}

export interface PageConfig {
  translateId: number;
}

export interface TemplateConfig {
  templateProject: string;
  templateType: string;
  templateName: string;
  templateTheme: string;
  mergeRankActivityType: boolean;
  mergeTaskActivityType: boolean;
  rank: TemplateConfigRank;
  dataConfig: DataConfig;
  themeConfig: ThemeConfig;
}

export interface TemplateConfigRank {
  userRechargeHiddenScore: boolean;
}

export interface DataConfig {
  banner: DataConfigBanner;
  task: DataConfigTask;
}

export interface DataConfigBanner {
  cover: string;
  title: DataConfigBannerTitle;
  webp: string;
}

export interface DataConfigBannerTitle {
  AR: string;
  EN: string;
  TR: string;
  ES: string;
}

export interface DataConfigTask {
  scoreIntroImage: string;
  scoreIcon: string;
}

export interface ThemeConfig {
  body: ThemeConfigBody;
  task: ThemeConfigTask;
}

export interface ThemeConfigBody {
  background: string;
  mainColor: string;
}

export interface ThemeConfigTask {
  dailyTaskItemBg: string;
  stepsTaskItemProgressBg: string;
}

// 获取服务器时间

export interface ServerTimeRes {
  weekstart: string;
  weekend: string;
  remaintime214: number;
  weekstartts: number;
  today: number;
  yestoday: number;
  thismonth: number;
  lastmonth: number;
  now: number;
  friday: number;
  weekendts: number;
  weekendts2: number;
  weekendts3: number;
  weekendts4: number;
  weekendts5: number;
  weekendts6: number;
  weekendts7: number;
}
