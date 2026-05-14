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
            Subscribe the BlueBerry to get in touch and get the future update.
          </p>
          <form className="bb-popnews-form" action="#" method="post">
            <input
              type="email"
              name="newsemail"
              placeholder="Email Address"
              required=""
            />
            <button type="button" className="bb-btn-2" name="subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>      
    </>
  );
}