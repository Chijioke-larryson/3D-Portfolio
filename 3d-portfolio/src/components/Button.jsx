const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }}
      className={`${className || ""} cta-wrapper`}
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '50%', // Wrapper spans 50% of the parent width
      }}
    >
      <div
        className="cta-button group"
        style={{
          width: '50%', // Button spans 50% of the wrapper width
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start', // Keeps content aligned to the left
        }}
      >
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;