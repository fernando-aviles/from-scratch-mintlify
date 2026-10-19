export const SdkHeader = ({ sdk }) => {
  const statusLabels = {
    stable: "Generally available",
    beta: "Public beta",
    deprecated: "Deprecated",
  };

  return (
    <div className="relaybox-sdk-header not-prose">
      <div className="relaybox-sdk-header-row">
        <code className="relaybox-sdk-package">{sdk.package}</code>
        <span className={`relaybox-pill relaybox-pill-${sdk.status}`}>
          {statusLabels[sdk.status]}
        </span>
      </div>
      <dl className="relaybox-sdk-meta">
        <div>
          <dt>Latest version</dt>
          <dd>{sdk.version}</dd>
        </div>
        <div>
          <dt>Released</dt>
          <dd>{sdk.released}</dd>
        </div>
        <div>
          <dt>Minimum runtime</dt>
          <dd>{sdk.runtime}</dd>
        </div>
      </dl>
      <p className="relaybox-sdk-links">
        <a href={sdk.repo}>View source on GitHub</a>
        {" · "}
        <a href={`${sdk.repo}/releases`}>Release notes</a>
      </p>
    </div>
  );
};
