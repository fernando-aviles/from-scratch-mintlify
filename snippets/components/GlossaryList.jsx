export const GlossaryList = ({ terms }) => {
  const [query, setQuery] = useState("");

  const filtered = terms.filter((term) =>
    `${term.term} ${term.definition}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relaybox-glossary">
      <input
        type="search"
        className="relaybox-glossary-search"
        placeholder="Filter terms, e.g. “retry” or “signature”"
        aria-label="Filter glossary terms"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filtered.length === 0 && (
        <p className="relaybox-glossary-empty">
          No terms match “{query}”. Try a shorter search.
        </p>
      )}
      <dl>
        {filtered.map((term) => (
          <div key={term.term} id={term.term.toLowerCase().replace(/\s+/g, "-")}>
            <dt>{term.term}</dt>
            <dd>
              {term.definition}
              {term.seeAlso && (
                <>
                  {" "}
                  <a href={term.seeAlso.href}>Learn more about {term.seeAlso.label} →</a>
                </>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
