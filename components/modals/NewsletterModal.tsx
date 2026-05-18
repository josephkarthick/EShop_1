export default function NewsletterModal() {
  return (
    <>
  <div className="bb-popnews-bg" />
  <div className="bb-popnews-box">
    <div className="bb-popnews-close" title="Close" />
    <div className="row">
      <div className="col-md-6 col-12">
        <img src="assets/img/newsletter/newsletter.jpg" alt="newsletter" />
      </div>
      <div className="col-md-6 col-12">
        <div className="bb-popnews-box-content">
          <h2>Newsletter.</h2>
          <p>
                Now we are available on Amazon. Place your order directly from
                Amazon and enjoy fast delivery.
          </p>
              <div className="bb-popnews-form">
                <a
                  href="https://www.amazon.in/s?k=VaisKart&ref=bl_dp_s_web_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bb-btn-2"
                >
                  Shop on Amazon
                </a>
              </div>
        </div>
      </div>
    </div>
  </div>      
    </>
  );
}