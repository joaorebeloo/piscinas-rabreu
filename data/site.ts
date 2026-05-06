export const defaultSiteUrl = "https://piscinasrabreu.pt";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return new URL(defaultSiteUrl);
  }

  try {
    const url = new URL(configuredUrl);

    if (url.protocol !== "https:" && process.env.NODE_ENV === "production") {
      return new URL(defaultSiteUrl);
    }

    return url;
  } catch {
    return new URL(defaultSiteUrl);
  }
}
