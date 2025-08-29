import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: "首页",
		url: "/",
	},
	[LinkPreset.About]: {
		name: "关于",
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: "历程",
		url: "/archive/",
	},
	[LinkPreset.Top]: {
		name: "通知",
		url: "/messages/",
	},
};
