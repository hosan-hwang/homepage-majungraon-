/**
 * 마중라온 홈페이지의 모든 노출 텍스트를 모아둔 파일입니다.
 * 문구/전화번호/사업자정보/브랜드 목록은 이 파일만 수정하면 전 페이지에 반영됩니다.
 * (※ 카카오 채널 주소만 아직 예시 값입니다. 도메인이 생기면 site.url도 바꿔 주세요.)
 */

export type ServiceOwner = "direct" | "partner";

export const site = {
  name: "마중라온",
  legalName: "㈜마중라온",
  englishName: "MAJUNGRAON Corp.",
  tagline: "KT 대리점 기반 매장 창업 원스톱 서비스",
  description:
    "간판부터 인테리어, 네트워크·CCTV, POS·VAN·키오스크, 세무·노무, 통신 개통까지. 매장 오픈에 필요한 모든 과정을 마중라온 담당자 한 명이 끝까지 챙깁니다.",
  phone: "1533-4530",
  phoneHref: "tel:1533-4530",
  kakaoLabel: "카카오톡 상담",
  kakaoHref: "https://pf.kakao.com/_example",
  email: "majungraon@naver.com",
  address: "서울시 성북구 동소문로 83-1, B1 (강북미디어빌딩)",
  hours: "평일 10:00 – 17:00 (주말·공휴일 휴무)",
  // 도메인 연결 전까지는 로컬 주소 사용
  url: "http://localhost:3000",
};

export const nav = {
  items: [
    { label: "서비스", href: "#services" },
    { label: "오픈 절차", href: "#timeline" },
    { label: "취급 상품", href: "#brands" },
    { label: "자주 묻는 질문", href: "#faq" },
  ],
  cta: { label: "무료 상담 신청", href: "#contact" },
};

export const hero = {
  eyebrow: "KT 공식 대리점 기반 매장 창업 파트너",
  title: "매장 오픈,\n한 사람에게만 연락하세요.",
  description:
    "간판 업체 따로, 인테리어 업체 따로, 인터넷 개통 따로 알아보지 마세요. 마중라온이 통신을 중심으로 매장 오픈에 필요한 모든 공정을 한 번에 설계하고 일정까지 맞춰 드립니다.",
  primaryCta: { label: "무료 창업 상담 신청", href: "#contact" },
  secondaryCta: { label: "오픈 절차 6단계 보기", href: "#timeline" },
  bullets: [
    "상담부터 오픈까지 담당자 1명 전담",
    "통신·CCTV·POS 일정 통합 관리",
    "오픈 이후 장애 대응까지 사후관리",
  ],
  stats: [
    { value: "6단계", label: "표준화된 오픈 프로세스" },
    { value: "1:1", label: "전담 매니저 배정" },
    { value: "무상", label: "현장 실측 및 견적" },
  ],
  noticeBadge: "상담 비용 0원 · 계약 전 견적 무료",
};

export const situations = {
  eyebrow: "상황별 안내",
  title: "지금 어떤 상황이신가요?",
  description: "선택하신 상황에 맞춰 필요한 절차와 준비물만 골라서 보여 드립니다.",
  items: [
    {
      id: "startup",
      label: "창업 준비 중",
      summary: "점포 계약 전후, 무엇부터 해야 할지 막막한 예비 사장님",
      points: [
        "업종·평수·예산에 맞는 오픈 체크리스트 제공",
        "간판·인테리어·통신 일정을 한 장의 공정표로 정리",
        "오픈일 역산 스케줄링으로 개업일 지연 방지",
      ],
      cta: { label: "창업 상담 신청하기", href: "#contact" },
    },
    {
      id: "operating",
      label: "매장 운영 중",
      summary: "이미 영업 중이지만 통신비·장비·보안을 정비하고 싶은 사장님",
      points: [
        "현재 통신 요금제 진단 및 결합 재설계",
        "노후 CCTV·POS·키오스크 교체 및 증설",
        "지점 이전·확장 시 회선 이설 원스톱 처리",
      ],
      cta: { label: "운영 점검 요청하기", href: "#contact" },
    },
    {
      id: "b2b",
      label: "B2B · 다지점",
      summary: "프랜차이즈 본사, 다지점 운영사, 법인 사무실 담당자",
      points: [
        "다회선 일괄 계약 및 청구 통합 관리",
        "신규 가맹점 오픈 표준 패키지 설계",
        "본사 전담 창구 지정 및 정기 리포트 제공",
      ],
      cta: { label: "B2B 제휴 문의하기", href: "#contact" },
    },
  ],
};

export const timeline = {
  eyebrow: "오픈 프로세스",
  title: "개업까지 6단계, 순서대로 챙겨 드립니다",
  description:
    "각 단계는 마중라온이 직접 수행하거나 검증된 파트너사가 진행하며, 모든 일정은 전담 매니저가 통합 관리합니다.",
  steps: [
    {
      step: "01",
      title: "간판",
      owner: "partner" as ServiceOwner,
      duration: "약 5 – 10일",
      summary: "상권과 건물 규정에 맞는 간판 디자인·제작·설치",
      details: ["현장 실측 및 시안 제작", "옥외광고물 신고 대행", "채널·LED·어닝 등 유형별 견적 비교"],
    },
    {
      step: "02",
      title: "인테리어",
      owner: "partner" as ServiceOwner,
      duration: "약 2 – 5주",
      summary: "업종 동선에 맞춘 설계와 시공, 예산 구간별 제안",
      details: ["평수·업종별 표준 견적 제공", "전기·통신 배선 위치 사전 협의", "공정별 진행 사진 공유"],
    },
    {
      step: "03",
      title: "네트워크 · CCTV",
      owner: "direct" as ServiceOwner,
      duration: "약 1 – 3일",
      summary: "매장 전용 유무선 네트워크와 보안 카메라 구축",
      details: ["매장 규모별 공유기·AP 설계", "CCTV 화각 설계 및 설치", "원격 모니터링 앱 설정 지원"],
    },
    {
      step: "04",
      title: "POS · VAN · 키오스크",
      owner: "partner" as ServiceOwner,
      duration: "약 3 – 7일",
      summary: "결제 인프라 세팅과 카드 가맹점 신청까지 한 번에",
      details: ["업종별 POS 프로그램 선정", "VAN·카드 가맹 신청 대행", "키오스크·테이블오더 연동 테스트"],
    },
    {
      step: "05",
      title: "세무 · 노무",
      owner: "partner" as ServiceOwner,
      duration: "약 3 – 5일",
      summary: "사업자등록부터 4대보험, 근로계약까지 개업 행정 정리",
      details: ["사업자등록 및 업종 인허가 안내", "제휴 세무사·노무사 연결", "근로계약서·급여 관리 초기 세팅"],
    },
    {
      step: "06",
      title: "통신 개통",
      owner: "direct" as ServiceOwner,
      duration: "오픈일 맞춤",
      summary: "KT 인터넷·전화·TV·모바일을 오픈일에 맞춰 개통",
      details: ["매장 결합 상품으로 월 통신비 최적화", "대표번호·인터넷전화 세팅", "개통 당일 현장 동행 및 최종 점검"],
    },
  ],
  footnote: "※ 소요 기간은 업종·평수·현장 여건에 따라 달라질 수 있으며, 상담 시 실제 일정표를 드립니다.",
};

export const services = {
  eyebrow: "서비스 안내",
  title: "필요한 것만 골라도, 전부 맡겨도 됩니다",
  description:
    "마중라온이 직접 수행하는 영역과 검증된 파트너사가 수행하는 영역을 구분해 표기합니다. 어느 쪽이든 창구와 일정 관리는 마중라온이 책임집니다.",
  badgeLabels: {
    direct: "직접서비스",
    partner: "파트너",
  },
  legend: [
    { owner: "direct" as ServiceOwner, text: "마중라온이 직접 상담·설치·사후관리까지 수행합니다." },
    { owner: "partner" as ServiceOwner, text: "검증된 협력사가 시공하고, 일정과 품질은 마중라온이 관리합니다." },
  ],
  items: [
    {
      title: "KT 인터넷 · 전화 · TV",
      owner: "direct" as ServiceOwner,
      description: "매장 규모와 이용 패턴에 맞춘 회선 설계 및 결합 할인 적용.",
      features: ["기가 인터넷 개통", "대표번호·인터넷전화", "매장용 TV 상품"],
    },
    {
      title: "매장 모바일 · 다회선",
      owner: "direct" as ServiceOwner,
      description: "사장님과 직원 회선을 묶어 통신비를 한 번에 정리합니다.",
      features: ["법인·개인사업자 회선", "인터넷 결합 할인", "청구서 통합 관리"],
    },
    {
      title: "CCTV · 매장 보안",
      owner: "direct" as ServiceOwner,
      description: "사각지대 없는 화각 설계와 모바일 원격 관제 세팅.",
      features: ["실내외 카메라 설치", "원격 모니터링", "저장장치 용량 진단"],
    },
    {
      title: "네트워크 · 무선 AP",
      owner: "direct" as ServiceOwner,
      description: "결제 단말과 고객 와이파이가 끊기지 않도록 구간별 설계.",
      features: ["매장 전용 AP 배치", "결제망 분리", "속도 저하 현장 점검"],
    },
    {
      title: "간판 · 사인물",
      owner: "partner" as ServiceOwner,
      description: "상권 분석을 반영한 디자인과 옥외광고물 신고까지 대행.",
      features: ["채널·LED 간판", "어닝·배너·시트지", "인허가 신고 대행"],
    },
    {
      title: "인테리어 · 시공",
      owner: "partner" as ServiceOwner,
      description: "업종별 동선 설계와 예산 구간별 시공 제안.",
      features: ["설계·3D 시안", "전기·통신 배선 협의", "공정 사진 리포트"],
    },
    {
      title: "POS · VAN · 키오스크",
      owner: "partner" as ServiceOwner,
      description: "주문부터 결제, 정산까지 이어지는 매장 결제 인프라 구성.",
      features: ["업종별 POS 선정", "카드 가맹 신청", "테이블오더 연동"],
    },
    {
      title: "세무 · 노무",
      owner: "partner" as ServiceOwner,
      description: "개업 초기에 놓치기 쉬운 행정 절차를 전문가와 함께 정리.",
      features: ["사업자등록 안내", "4대보험 신고", "근로계약·급여 세팅"],
    },
    {
      title: "오픈 후 사후관리",
      owner: "direct" as ServiceOwner,
      description: "개통이 끝이 아닙니다. 장애 접수와 요금 점검을 계속 지원합니다.",
      features: ["장애 접수 대행", "정기 요금 진단", "이전·증설 지원"],
    },
    {
      title: "렌탈 상품",
      owner: "partner" as ServiceOwner,
      description: "쿠쿠 정수기·생활가전을 매장과 가정에 렌탈로 부담 없이.",
      features: ["쿠쿠 상품 렌탈", "설치·정기 관리", "통신 상품과 함께 상담"],
    },
  ],
};

export const brands = {
  eyebrow: "취급 상품",
  title: "마중라온이 직접 취급하는 상품",
  description:
    "매장 운영에 꼭 필요한 통신·결제 장비부터 렌탈 상품까지, 한 곳에서 상담하고 설치까지 진행합니다.",
  // 로고 이미지를 쓰려면 /public/brands/ 에 넣고 logo 필드에 경로를 지정하세요.
  // logo를 비워 두면 이름 텍스트로 표시됩니다.
  groups: [
    {
      category: "통신",
      items: [
        { name: "인터넷", logo: "" },
        { name: "CCTV", logo: "" },
        { name: "네트워크 공사", logo: "" },
      ],
    },
    {
      category: "결제",
      items: [
        { name: "VAN", logo: "" },
        { name: "POS", logo: "" },
        { name: "키오스크", logo: "" },
        { name: "무선단말기", logo: "" },
      ],
    },
    {
      category: "렌탈",
      items: [{ name: "쿠쿠 상품 렌탈", logo: "" }],
    },
  ],
  footnote: "※ 취급 상품은 계속 늘려 가고 있습니다. 목록에 없는 품목도 상담 시 문의해 주세요.",
};

export const contact = {
  eyebrow: "상담 신청",
  title: "3분이면 충분합니다",
  description:
    "남겨 주신 정보를 바탕으로 담당 매니저가 영업시간 내 순차적으로 연락드립니다. 상담과 견적은 무료이며, 계약 의무는 없습니다.",
  sideNote: {
    title: "전화 상담이 더 편하시다면",
    description: "바로 연결해 드립니다. 상담 시간 외에는 문의를 남겨 주시면 다음 영업일에 연락드립니다.",
  },
  fields: {
    name: { label: "이름", placeholder: "홍길동", required: true },
    phone: { label: "연락처", placeholder: "010-0000-0000", required: true },
    industry: { label: "업종", placeholder: "업종을 선택해 주세요", required: true },
    region: { label: "지역", placeholder: "지역을 선택해 주세요", required: true },
    message: {
      label: "문의 내용",
      placeholder: "예) 9월 중순 오픈 예정인 15평 카페입니다. 간판과 인터넷, POS까지 한 번에 상담받고 싶습니다.",
      required: false,
    },
  },
  industries: [
    "카페 · 디저트",
    "음식점 · 주점",
    "편의점 · 소매",
    "미용 · 뷰티",
    "학원 · 교육",
    "병원 · 약국",
    "사무실 · 법인",
    "기타",
  ],
  regions: [
    "서울",
    "경기",
    "인천",
    "강원",
    "대전 · 충청",
    "대구 · 경북",
    "부산 · 울산 · 경남",
    "광주 · 전라",
    "제주",
  ],
  consent: {
    label: "개인정보 수집 및 이용에 동의합니다. (필수)",
    detail:
      "수집 항목: 이름, 연락처, 업종, 지역, 문의 내용 / 이용 목적: 상담 및 견적 안내 / 보유 기간: 상담 종료 후 1년",
    linkLabel: "개인정보처리방침 전문 보기",
    linkHref: "/privacy",
  },
  submit: { idle: "무료 상담 신청하기", loading: "전송 중..." },
  successTitle: "상담 신청이 접수되었습니다",
  successMessage: "담당 매니저가 영업시간 내에 남겨 주신 연락처로 전화드리겠습니다.",
  errorMessage: "전송 중 문제가 발생했습니다. 잠시 후 다시 시도하시거나 전화로 문의해 주세요.",
  validation: {
    name: "이름을 입력해 주세요.",
    phone: "연락 가능한 연락처를 입력해 주세요.",
    industry: "업종을 선택해 주세요.",
    region: "지역을 선택해 주세요.",
    consent: "개인정보 수집 및 이용에 동의해 주세요.",
  },
};

export const faq = {
  eyebrow: "자주 묻는 질문",
  title: "궁금한 점을 먼저 확인해 보세요",
  description: "여기에 없는 내용은 상담 신청이나 전화로 편하게 물어보셔도 됩니다.",
  items: [
    {
      question: "상담이나 견적에 비용이 드나요?",
      answer:
        "상담과 현장 실측, 견적 제공까지는 모두 무료입니다. 실제 시공이나 개통을 진행하기로 결정하신 이후에만 비용이 발생하며, 항목별 금액은 계약 전에 안내드립니다.",
    },
    {
      question: "통신만, 또는 간판만 따로 맡길 수도 있나요?",
      answer:
        "가능합니다. 필요한 항목만 선택해 진행하실 수 있으며, 여러 항목을 함께 진행하실 경우 일정 조율과 견적 측면에서 유리한 경우가 많습니다.",
    },
    {
      question: "이미 영업 중인 매장도 이용할 수 있나요?",
      answer:
        "네. 통신 요금제 재설계, 노후 CCTV·POS 교체, 회선 증설이나 매장 이전에 따른 이설 등 운영 중인 매장을 위한 서비스도 함께 제공합니다.",
    },
    {
      question: "파트너사가 진행하는 공사도 마중라온이 책임지나요?",
      answer:
        "시공은 해당 분야 협력사가 수행하지만, 업체 선정과 일정 조율, 진행 상황 확인은 마중라온 전담 매니저가 맡습니다. 문제가 생기면 사장님이 여러 업체에 각각 연락하실 필요 없이 저희에게 알려 주시면 됩니다.",
    },
    {
      question: "오픈까지 전체 기간은 얼마나 걸리나요?",
      answer:
        "업종과 평수, 인테리어 범위에 따라 다르지만 일반적으로 점포 계약 후 3~6주 정도가 소요됩니다. 상담 시 오픈 희망일을 기준으로 역산한 일정표를 드립니다.",
    },
    {
      question: "서비스 가능한 지역은 어디인가요?",
      answer:
        "통신 개통은 전국에서 가능하며, 간판·인테리어 등 시공이 필요한 항목은 협력사 네트워크에 따라 지역별로 차이가 있을 수 있습니다. 상담 시 해당 지역 진행 가능 여부를 먼저 확인해 드립니다.",
    },
  ],
};

export const footer = {
  description:
    "마중라온은 KT 대리점을 기반으로 매장 창업에 필요한 모든 과정을 하나의 창구에서 지원합니다.",
  business: {
    heading: "사업자 정보",
    rows: [
      { label: "상호", value: site.legalName },
      { label: "대표자", value: "황호산" },
      { label: "사업자등록번호", value: "739-86-02283" },
      { label: "주소", value: site.address },
      { label: "대표전화", value: site.phone },
      { label: "이메일", value: site.email },
    ],
  },
  linkGroups: [
    {
      heading: "서비스",
      links: [
        { label: "오픈 절차 6단계", href: "#timeline" },
        { label: "서비스 전체 보기", href: "#services" },
        { label: "취급 상품", href: "#brands" },
        { label: "상담 신청", href: "#contact" },
      ],
    },
    {
      heading: "안내",
      links: [
        { label: "자주 묻는 질문", href: "#faq" },
        { label: "개인정보처리방침", href: "/privacy" },
      ],
    },
  ],
  disclaimer:
    "본 사이트는 KT 공식 대리점으로서 통신 상품을 안내하며, 간판·인테리어·POS·세무 등 일부 항목은 협력사를 통해 제공됩니다. 게시된 요금과 일정은 현장 여건에 따라 달라질 수 있습니다.",
  copyright: `© ${new Date().getFullYear()} ${site.legalName} All rights reserved.`,
};

export const mobileBar = {
  call: { label: "전화 상담", href: site.phoneHref },
  form: { label: "상담 신청", href: "#contact" },
  note: site.hours,
};
