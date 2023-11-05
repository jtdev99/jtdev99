import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "../../layout";

const Wrapper = () => {
    return (
        <main>
            {/* Start sidebar */}
            <Sidebar />
            {/* End sidebar */}
            {/* Start main section */}
            <section>
                {/* Header */}
                <Header />
                {/* Page */}
                <Outlet />
            </section>
            {/* End main section */}
        </main>
    );
};

export default Wrapper;
