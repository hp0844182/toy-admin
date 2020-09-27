export function getCommonConfig(region: "en" | "zh") {
  const CONFIG: any = {};

  const convertedConfig = Object.keys(CONFIG).reduce(
    (acc: any, cur: string) => {
      acc[cur] = (CONFIG[cur] as any)[region];
      return acc;
    },
    {}
  );

  return convertedConfig;
}

export const config = {
  resources: {
    en: {
      translation: getCommonConfig("en"),
    },
    zh: {
      // 如果对应text没有配置字典, 会是默认值, 所以无需对应中文的内容
      translation: getCommonConfig("zh"),
    },
  },
  lng: "zh", // 默认使用的语言
  fallbackLng: "zh", // catch backup language
  interpolation: {
    escapeValue: false,
  },
};

/* 语言key */
export const localKeys = ["zh", "en"];
