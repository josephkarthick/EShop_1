export default function Header() {

  return (

    <div className="header-dashboard">

      <div className="wrap">

        <div className="header-left">

          <h3>
            Admin Panel
          </h3>

        </div>

        <div className="header-grid">

          <div className="popup-wrap user type-header">

            <div className="dropdown">

              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >

                <span className="header-user wg-user">

                  <span className="image">

                    <img
                      src="/admin/images/avatar/user-1.png"
                      alt=""
                    />

                  </span>

                  <span className="flex flex-column">

                    <span className="body-title mb-2">
                      Admin
                    </span>

                    <span className="text-tiny">
                      Administrator
                    </span>

                  </span>

                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}