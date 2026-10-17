import { NextResponse } from "next/server";

/**
 * 상담 신청 접수 엔드포인트.
 * 현재는 서버 로그로만 남깁니다. 실제 운영 시에는 아래 TODO 위치에
 * 메일 발송 / 구글 시트 / CRM / 알림톡 등 원하는 저장 로직을 연결하세요.
 */

type ContactPayload = {
  name?: string;
  phone?: string;
  industry?: string;
  region?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";

  if (!name || !phone || !payload.industry || !payload.region) {
    return NextResponse.json({ ok: false, error: "MISSING_FIELDS" }, { status: 400 });
  }

  if (payload.consent !== true) {
    return NextResponse.json({ ok: false, error: "CONSENT_REQUIRED" }, { status: 400 });
  }

  // TODO: 실제 접수 처리(메일/시트/CRM 연동)를 이 위치에 구현하세요.
  console.info("[contact] 상담 신청 접수", {
    name,
    phone,
    industry: payload.industry,
    region: payload.region,
    message: payload.message?.trim() ?? "",
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
