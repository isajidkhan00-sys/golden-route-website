import './Button.css';
import Icon from './Icon';

// ==========================================================================
// BUTTON — variants: primary (gold), secondary (navy outline), ghost (light)
// Renders as <a> if href is given, otherwise <button>.
// ==========================================================================

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
