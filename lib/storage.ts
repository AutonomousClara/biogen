const API_KEY_STORAGE_KEY = "biogen_api_key";

export function saveApiKey(key: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(API_KEY_STORAGE_KEY, key);
  }
}

export function getApiKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(API_KEY_STORAGE_KEY);
  }
  return null;
}

export function removeApiKey(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  }
}

export function validateApiKey(key: string): boolean {
  // Groq keys começam com 'gsk_'
  return key.startsWith("gsk_") && key.length > 20;
}
