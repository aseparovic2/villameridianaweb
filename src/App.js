import {Route, Switch} from "react-router-dom";
import HomeV1 from "./pages/Homepage/Home";
import AboutUs from "./pages/About/About";
import TourDetails from "./pages/AccomodationDetails/tour-details";
import GalleryDetails from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import React from "react";

const App = () => {
    return(

            <div>
                <Switch>
                    <Route exact path="/" component={HomeV1} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/room" component={TourDetails} />
                    <Route path="/gallery-details" component={GalleryDetails} />
                    <Route path="/booking" component={Contact} />
                </Switch>
            </div>
    )
}

export default App;