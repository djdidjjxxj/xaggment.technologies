export const WHATSAPP_NUMBER = '916290322713';
export const openWhatsApp = (message: string = 'Hi Xaggment, I want to discuss a project.') => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
