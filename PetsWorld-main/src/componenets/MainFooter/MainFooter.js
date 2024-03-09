import './MainFooter.css';

function MainFooter() {
  return (
    <div className="page-container">
      <footer
        style={{
          width: '100%',
          fontFamily: 'ui-sans-serif',
        }}
        className="text-center text-lg-start bg-white text-muted"
      >
        <section className="border-bottom"></section>

        <div
          className="text-center p-4"
          style={{
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#242323',
          }}
        >
          <div>
            © 2022 PetsWorld
            <a
              className="text-reset fw-bold"
              style={{ marginRight: '3px', marginLeft: '3px' }}
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            |
            <a
              className="text-reset fw-bold"
              style={{ marginRight: '3px', marginLeft: '3px' }}
              href="/"
            >
              FAQs
            </a>
          </div>
          <div>All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default MainFooter;
