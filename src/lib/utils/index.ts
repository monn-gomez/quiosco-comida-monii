export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function getImagePath(ImagePath: string) {
  const cloudinaryBaseUrl = "https://res.cloudinary.com";
  if (ImagePath.startsWith(cloudinaryBaseUrl)) {
    return ImagePath;
  } else {
    return `/products/${ImagePath}.jpg`;
  }
}
