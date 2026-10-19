export const IntegrationHeader = ({ name, logo, category, maintainedBy = "Relaybox", children }) => {
  return (
    <div className="relaybox-integration-header not-prose">
      <img src={logo} alt={`${name} logo`} className="relaybox-integration-logo" />
      <div>
        <p className="relaybox-integration-category">{category}</p>
        <p className="relaybox-integration-name">Relaybox + {name}</p>
        <p className="relaybox-integration-maintainer">
          Maintained by {maintainedBy}
          {maintainedBy !== "Relaybox" && " (community integration)"}
        </p>
      </div>
      {children && <div className="relaybox-integration-summary">{children}</div>}
    </div>
  );
};
