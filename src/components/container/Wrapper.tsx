import { Outlet } from "react-router-dom";

import { Sidebar } from "../../layout";

const Wrapper = () => {
    return (
        <main className="main">
            {/* Start sidebar */}
            <Sidebar />
            {/* End sidebar */}
            {/* Start main section */}
            <section className="section">
                <div className="section-page">
                    {/* Page */}
                    <Outlet />
                </div>
            </section>
            {/* End main section */}
        </main>
    );
};

export default Wrapper;
