import React from 'react';

const whatapp = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '+917025715775';
    
        const message = 'Hello from your website';
    
        // Create the WhatsApp link
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    
        // Open the link in a new tab
        window.open(whatsappLink, '_blank');
      };
  return (
    <>
      <div className='whatsapp'>
        <img onClick={handleWhatsAppClick} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="" />
      </div> 
    </>
  );
}

export default whatapp;
