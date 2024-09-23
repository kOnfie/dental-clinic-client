export const makePhoneCall = (phoneNumber: string) => {
  const telLink = `tel:${phoneNumber}`;
  
  window.location.href = telLink;
};
