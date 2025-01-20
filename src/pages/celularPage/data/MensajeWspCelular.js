export const MensajeWspCelular = (title) => {
    const message = `Hola, necesito detalles sobre el ${title}.`;
      const phoneNumber = "5491156307246"; // Número de WhatsApp
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    };