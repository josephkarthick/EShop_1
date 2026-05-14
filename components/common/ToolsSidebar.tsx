export default function ToolsSidebar() {
  return (
    <>
  <div className="bb-tools-sidebar-overlay" />
  <div className="bb-tools-sidebar">
    <a href="javascript:void(0)" className="bb-tools-sidebar-toggle in-out">
      <i className="ri-settings-fill" />
    </a>
    <div className="bb-bar-title">
      <h6>Tools</h6>
      <a href="#" className="close-tools">
        <i className="ri-close-line" />
      </a>
    </div>
    <div className="bb-tools-detail">
      <div className="bb-tools-block">
        <h3>Select Color</h3>
        <ul className="bb-color">
          <li className="color-primary active-variant" />
          <li className="color-1" />
          <li className="color-2" />
          <li className="color-3" />
          <li className="color-4" />
          <li className="color-5" />
          <li className="color-6" />
          <li className="color-7" />
          <li className="color-8" />
          <li className="color-9" />
        </ul>
      </div>
      <div className="bb-tools-block">
        <h3>Dark Modes</h3>
        <div className="bb-tools-dark">
          <div
            className="mode-primary bb-dark-item mode active-dark light"
            data-bb-mode-tool="light"
          >
            <img src="assets/img/tools/light.png" alt="light" />
            <p>Light</p>
          </div>
          <div className="bb-dark-item mode dark" data-bb-mode-tool="dark">
            <img src="assets/img/tools/dark.png" alt="dark" />
            <p>Dark</p>
          </div>
        </div>
      </div>
      <div className="bb-tools-block">
        <h3>RTL Modes</h3>
        <div className="bb-tools-rtl">
          <div className="bb-tools-item ltr active-rtl" data-bb-mode-tool="ltr">
            <img src="assets/img/tools/ltr.png" alt="ltr" />
            <p>LTR</p>
          </div>
          <div className="bb-tools-item rtl" data-bb-mode-tool="rtl">
            <img src="assets/img/tools/rtl.png" alt="rtl" />
            <p>RTL</p>
          </div>
        </div>
      </div>
      <div className="bb-tools-block">
        <h3>Box Design</h3>
        <div className="bb-tools-box">
          <div
            className="bb-tools-item default active-box"
            data-bb-mode-tool="default"
          >
            <img src="assets/img/tools/box-0.png" alt="box-0" />
            <p>Default</p>
          </div>
          <div className="bb-tools-item box-1" data-bb-mode-tool="box-1">
            <img src="assets/img/tools/box-1.png" alt="box-1" />
            <p>Box-1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}