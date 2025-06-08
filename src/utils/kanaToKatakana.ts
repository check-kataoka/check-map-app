// kanaToKatakana.ts
export function kanaToKatakana(input: string): string {
  return input.replace(/[\u3041-\u3096]/g, char =>
    String.fromCharCode(char.charCodeAt(0) + 0x60)
  );
}
