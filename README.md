# 마중라온 홈페이지

KT 대리점 기반 매장 창업 원스톱 서비스 **마중라온**의 메인 페이지입니다.
Next.js(App Router) + TypeScript + Tailwind CSS v4로 구성했습니다.

## 실행 방법

Node.js 20 이상이 필요합니다. (현재 PC에는 설치돼 있지 않아 아래 명령을 직접 실행해 주세요.)

```bash
npm install
```

```bash
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 문구 수정

화면에 보이는 모든 텍스트는 [`content/home.ts`](content/home.ts) 한 파일에 모여 있습니다.
전화번호, 사업자정보, 서비스 목록, FAQ, 취급 상품 등은 이 파일만 고치면 전체 페이지에 반영됩니다.

교체가 필요한 예시 값:

- `site.phone` / `site.phoneHref` — 대표전화
- `site.kakaoHref` — 카카오톡 채널 주소
- `footer.business.rows` — 상호·대표자·사업자등록번호·주소
- `brands.groups` — 취급 상품 목록 (로고 이미지는 `public/brands/`에 넣고 `logo` 필드에 경로 지정)

## 구조

```
app/
  layout.tsx            공통 레이아웃, 메타데이터
  page.tsx              메인 페이지 (섹션 조립만 담당)
  globals.css           Tailwind + 브랜드 색상 토큰
  privacy/page.tsx      개인정보처리방침
  api/contact/route.ts  상담 신청 접수 API
components/
  Header.tsx            상단 내비게이션
  Footer.tsx            푸터 (사업자정보)
  MobileCallBar.tsx     모바일 하단 전화걸기 고정바
  Accordion.tsx         FAQ 아코디언 (재사용 가능)
  ServiceCard.tsx       서비스 카드
  TimelineStep.tsx      타임라인 한 단계
  sections/             페이지 섹션 (Hero, SituationPicker, Timeline, ServiceGrid, BrandLogos, ContactForm, Faq)
  ui/                   Container, Section, Button, Badge, Field 등 프리미티브
content/home.ts         모든 노출 텍스트
lib/cn.ts               클래스 병합 유틸
```

## 섹션 순서

1. Hero (헤드라인 + CTA)
2. 상황 선택 3버튼 (창업준비 / 매장운영 / B2B) — 탭으로 동작
3. 개업 타임라인 6단계 (간판 → 인테리어 → 네트워크·CCTV → POS·VAN·키오스크 → 세무·노무 → 통신)
4. 서비스 카드 그리드 — 각 카드에 `직접서비스` / `파트너` 뱃지
5. 취급 상품
6. 상담신청 폼 (이름 / 연락처 / 업종 / 지역 / 내용 + 개인정보 동의)
7. FAQ 아코디언
8. 푸터 (사업자정보, 개인정보처리방침 링크)

모바일(768px 미만)에서는 하단에 전화걸기 고정바가 항상 노출됩니다.

## 상담 신청 연동

`app/api/contact/route.ts`는 현재 접수 내용을 서버 콘솔에 기록만 합니다.
운영 시에는 파일 내 `TODO` 위치에 메일 발송, 구글 시트 저장, CRM 연동, 알림톡 발송 등
원하는 처리 로직을 연결하세요.

## 배포 전 체크리스트

- [x] 상호·대표자·대표전화·이메일·주소 반영 (명함 기준), 로고·브랜드 컬러(#C87932 / #24242B) 적용
- [x] 사업자등록번호·영업시간(평일 10–17시)·취급 상품 반영
- [ ] 카카오톡 채널 주소 교체, 도메인 생기면 `site.url` 변경
- [x] 개인정보 보호책임자 지정 (황호산)
- [ ] 개인정보처리방침 내용 검토 (현재 초안)
- [ ] 브랜드 로고는 사용 권한이 확인된 것만 게시
- [ ] 상담 신청 API에 실제 접수 처리 연결
