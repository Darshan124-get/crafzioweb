const WhatsAppButton = () => {
  const phoneNumber = "917026496890"; // CrafZio WhatsApp number
  const message = "Hello! I'm interested in your services at CrafZio.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 hover:shadow-xl transition-all duration-300 hover:scale-110">
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-8 h-8"
          fill="white"
        >
          <path d="M4.868 43.303l2.694-9.835a18.863 18.863 0 0 1-2.52-9.467C5.044 13.445 13.45 5.04 23.994 5.04c5.112.003 9.91 1.99 13.524 5.607a19.006 19.006 0 0 1 5.598 13.527c-.004 10.546-8.41 18.95-18.954 18.95a18.93 18.93 0 0 1-9.045-2.302L4.868 43.303zm10.26-5.937l.573.34a15.714 15.714 0 0 0 8.004 2.19h.006c8.683 0 15.75-7.063 15.753-15.75a15.663 15.663 0 0 0-4.622-11.152 15.648 15.648 0 0 0-11.124-4.617c-8.69 0-15.756 7.062-15.758 15.747a15.707 15.707 0 0 0 2.41 8.382l.374.595-1.59 5.808 5.974-1.543zm17.127-8.875c-.117-.195-.43-.312-.898-.547s-2.77-1.367-3.2-1.523c-.43-.156-.742-.234-1.055.234s-1.21 1.523-1.484 1.836-.546.351-1.015.117a12.822 12.822 0 0 1-3.77-2.328 14.098 14.098 0 0 1-2.608-3.254c-.274-.468-.03-.72.207-.953.21-.21.468-.547.703-.82.234-.274.313-.469.47-.781.155-.313.077-.586-.04-.82-.117-.235-1.054-2.543-1.445-3.48-.38-.914-.765-.79-1.054-.804l-.898-.016c-.312 0-.82.117-1.25.585s-1.64 1.602-1.64 3.91 1.68 4.535 1.914 4.848 3.307 5.053 8.014 7.086a27.118 27.118 0 0 0 2.676.988c1.124.36 2.147.309 2.956.187.902-.134 2.773-1.133 3.164-2.228.39-1.094.39-2.032.273-2.227z" />
        </svg>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
