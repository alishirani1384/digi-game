import { useRouter } from "next/router";
import {en} from "../locales/en-US";
import {fa} from "../locales/fa-IR";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en-US" ? en : fa;
  return { t, locale };
};
