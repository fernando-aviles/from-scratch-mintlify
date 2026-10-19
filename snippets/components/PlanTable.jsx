export const PlanTable = ({ plans, highlight }) => {
  const formatPrice = (plan) => {
    if (plan.price === null) return "Contact sales";
    if (plan.price === 0) return "Free";
    return `$${plan.price} / month`;
  };

  return (
    <table className="relaybox-plan-table">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Price</th>
          <th>Included events</th>
          <th>Log retention</th>
          <th>Support</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan) => (
          <tr key={plan.id} className={plan.id === highlight ? "relaybox-plan-highlight" : ""}>
            <td>
              <strong>{plan.name}</strong>
              {plan.id === highlight && <span className="relaybox-pill">Most popular</span>}
              <br />
              <small>{plan.tagline}</small>
            </td>
            <td>{formatPrice(plan)}</td>
            <td>{plan.includedEvents}</td>
            <td>{plan.retention}</td>
            <td>{plan.support}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
