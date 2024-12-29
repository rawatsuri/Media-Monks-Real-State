export const formatPrice = (price: number, status: 'For Sale' | 'For Rent'): string => {
  if (status === 'For Rent') {
    return `$${price.toLocaleString()}/mo`;
  }
  return `$${price.toLocaleString()}`;
};