import React from "react";

// NOTE : class button = font-code text-xs font-bold uppercase tracking-wider

const Button = ({ className, href, onClick, children, px, disabled }) => {

  //TODO: CHECK STYLING AGAIN IF NEEDED
  const classes = `button relative inline-flex items-center justify-center rounded-lg h-11 transition-colors hover:text-black hover:bg-white ${px || "px-7"
    } ${className || ""} `;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} disabled={disabled} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;