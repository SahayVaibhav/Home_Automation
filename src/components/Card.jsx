function Card({ children, className = '' }) {
  return <section className={`rounded-3xl bg-white p-4 shadow-card ${className}`}>{children}</section>;
}

export default Card;
