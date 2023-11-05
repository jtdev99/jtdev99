import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes";
import { Loading } from "./components";

function App() {
    return (
        <Router>
            <Suspense
                fallback={
                    <div className="w-screen h-screen">
                        <Loading />
                    </div>
                }
            >
                <AppRoutes />
            </Suspense>
        </Router>
    );
}

export default App;
