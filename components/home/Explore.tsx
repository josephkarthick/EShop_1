export default function Explore () {
	
	return (
	<>
  <section className="section-category padding-tb-50">
    <div className="container">
      <div className="row mb-minus-24">
        <div className="col-lg-5 col-12 mb-24">
          <div className="bb-category-img">
            <img src="assets/img/category/category.jpg" alt="category" />
            <div className="bb-offers">
              <span>50% Off</span>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 mb-24">
          <div className="bb-category-contact">
            <div
              className="category-title"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={600}
            >
              <h2>Explore Categories</h2>
            </div>
            <div className="bb-category-block owl-carousel">
              <div
                className="bb-category-box category-items-1"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className="category-image">
                  <img src="assets/img/category/1.svg" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">vegetables</a>
                  </h5>
                  <p>485 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-2"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className="category-image">
                  <img src="assets/img/category/2.svg" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Fruits</a>
                  </h5>
                  <p>291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-3"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className="category-image">
                  <img src="assets/img/category/3.svg" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Cold Drinks</a>
                  </h5>
                  <p>49 items</p>
                </div>
              </div>
              <div
                className="bb-category-box category-items-4"
                data-aos="flip-left"
                data-aos-duration={1000}
                data-aos-delay={800}
              >
                <div className="category-image">
                  <img src="assets/img/category/4.svg" alt="category" />
                </div>
                <div className="category-sub-contact">
                  <h5>
                    <a href="shop-left-sidebar-col-3.html">Bakery</a>
                  </h5>
                  <p>08 items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
	</>
	
	)
}