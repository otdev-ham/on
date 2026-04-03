/** 협력 단체 로고 — `src` 없으면 텍스트만 표시 */
export type PartnerLogo = {
  id: string;
  name: string;
  shortLabel: string;
  src?: string;
  alt?: string;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: "seongdong",
    name: "성동구장애인가족지원센터",
    shortLabel: "성동구립 성동장애인가족지원센터",
    src: "/branding/seongdong-center-logo.png",
    alt: "성동구립 성동장애인가족지원센터 로고",
  },
  {
    id: "seoul-ot",
    name: "서울특별시작업치료사회",
    shortLabel: "서울특별시작업치료사회",
  },
  {
    id: "byeolbyeol",
    name: "별별생활체육센터",
    shortLabel: "별별생활체육센터",
    src: "/branding/byeolbyeol-sports-center-logo.png",
    alt: "별별생활체육센터 로고",
  },
];
