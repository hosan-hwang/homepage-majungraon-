type ClassValue = string | number | null | undefined | false;

/** 조건부 클래스 문자열을 안전하게 합칩니다. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
