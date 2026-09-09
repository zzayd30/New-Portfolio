import type { IconType } from "react-icons";
import {
  SiAngular,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPaypal,
  SiPm2,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { LuMessageSquareCode, LuSparkles } from "react-icons/lu";

import type { SkillIconName } from "@/types/skill";

export const skillIcons: Record<SkillIconName, IconType> = {
  angular: SiAngular,
  api: SiOpenapiinitiative,
  express: SiExpress,
  git: SiGit,
  github: SiGithub,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  nextjs: SiNextdotjs,
  nginx: SiNginx,
  nodejs: SiNodedotjs,
  pm2: SiPm2,
  postgresql: SiPostgresql,
  postman: SiPostman,
  prompt: LuMessageSquareCode,
  react: SiReact,
  sparkles: LuSparkles,
  stripe: SiStripe,
  supabase: SiSupabase,
  typescript: SiTypescript,
  paypal: SiPaypal,
};
