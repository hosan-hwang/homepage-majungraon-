import type { Metadata } from "next";
import Link from "next/link";
import { footer, site } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${site.name} 개인정보처리방침`,
};

/**
 * 개인정보처리방침 초안입니다.
 * 실제 게시 전 반드시 사업자 정보와 처리 항목을 검토하고, 필요 시 법률 자문을 받으세요.
 */
const sections = [
  {
    heading: "1. 수집하는 개인정보 항목",
    body: "마중라온은 상담 신청 시 다음 항목을 수집합니다. 필수 항목은 이름, 연락처, 업종, 지역이며, 선택 항목은 문의 내용입니다. 서비스 이용 과정에서 접속 로그, 쿠키, 접속 IP가 자동으로 생성되어 수집될 수 있습니다.",
  },
  {
    heading: "2. 개인정보의 수집 및 이용 목적",
    body: "수집한 개인정보는 상담 및 견적 안내, 계약 체결과 이행, 개통·설치 일정 조율, 고객 문의 응대, 서비스 품질 개선 목적으로만 이용합니다. 목적 외 용도로는 이용하지 않습니다.",
  },
  {
    heading: "3. 개인정보의 보유 및 이용 기간",
    body: "상담 종료 후 1년간 보관한 뒤 지체 없이 파기합니다. 다만 계약이 체결된 경우 관계 법령이 정한 기간(계약·청약철회 기록 5년, 대금결제 기록 5년, 소비자 불만 및 분쟁처리 기록 3년 등) 동안 보관합니다.",
  },
  {
    heading: "4. 개인정보의 제3자 제공",
    body: "원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만 간판·인테리어·POS·세무 등 이용자가 요청한 서비스를 제공하기 위해 필요한 범위에서, 사전 동의를 받은 후 해당 협력사에 최소한의 정보를 제공할 수 있습니다.",
  },
  {
    heading: "5. 개인정보 처리의 위탁",
    body: "통신 상품 개통 및 설치 업무 수행을 위해 통신사 및 설치 협력사에 업무를 위탁할 수 있으며, 위탁 시 개인정보가 안전하게 관리되도록 필요한 사항을 계약으로 규정합니다.",
  },
  {
    heading: "6. 정보주체의 권리와 행사 방법",
    body: "이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요구할 수 있습니다. 대표전화 또는 이메일로 요청하시면 지체 없이 조치하겠습니다.",
  },
  {
    heading: "7. 개인정보의 파기 절차 및 방법",
    body: "보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 파일은 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄하거나 소각합니다.",
  },
  {
    heading: "8. 개인정보 보호책임자",
    body: `개인정보 보호책임자: 황호산 / 연락처: ${site.phone} / 이메일: ${site.email}. 개인정보 침해에 대한 신고나 상담이 필요하시면 개인정보침해신고센터(privacy.kisa.or.kr, 국번없이 118) 등에 문의하실 수 있습니다.`,
  },
  {
    heading: "9. 개인정보처리방침의 변경",
    body: "법령이나 서비스 내용의 변경에 따라 방침이 수정될 수 있으며, 변경 시 시행일자와 변경 내용을 홈페이지에 공지합니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
              ← 홈으로 돌아가기
            </Link>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              개인정보처리방침
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              {site.name}(이하 &lsquo;회사&rsquo;)은 이용자의 개인정보를 중요하게 생각하며,
              「개인정보 보호법」 등 관련 법령을 준수합니다.
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg font-bold text-ink-900">{section.heading}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-ink-50 p-6">
              <p className="text-sm font-bold text-ink-900">{footer.business.heading}</p>
              <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {footer.business.rows.map((row) => (
                  <div key={row.label} className="flex gap-2 text-xs leading-relaxed">
                    <dt className="shrink-0 text-ink-500">{row.label}</dt>
                    <dd className="text-ink-700">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-ink-500">
                ※ 본 방침은 초안입니다. 실제 게시 전 사업자 정보와 처리 현황을 확인해 주세요.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
