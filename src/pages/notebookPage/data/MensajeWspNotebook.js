export const MensajeWspNotebook = () => {
    const message = `Hola, me gustaría saber más sobre el seguro para notebook.`;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=800');
    };