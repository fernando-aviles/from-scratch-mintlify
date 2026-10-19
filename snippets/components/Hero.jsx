export const Hero = ({ title, subtitle, primaryCta, secondaryCta }) => {
  return (
    <div className="relaybox-hero not-prose">
      <span className="relaybox-hero-eyebrow">Event delivery, handled</span>
      <h1 className="relaybox-hero-title">{title}</h1>
      <p className="relaybox-hero-subtitle">{subtitle}</p>
      <div className="relaybox-hero-actions">
        {primaryCta && (
          <a className="relaybox-button relaybox-button-primary" href={primaryCta.href}>
            {primaryCta.label}
          </a>
        )}
        {secondaryCta && (
          <a className="relaybox-button relaybox-button-secondary" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        )}
      </div>
      <p className="relaybox-hero-footnote">
        Free for up to 100,000 events per month. No credit card required.
      </p>
    </div>
  );
};
