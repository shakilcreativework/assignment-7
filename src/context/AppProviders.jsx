import { use, useState } from "react";
import AppContexts from "./AppContexts";

const friendsPromise = fetch('/friends.json').then(res => res.json());

const AppProviders = ({children}) => {
    const [timeline, setTimeline] = useState([]);
    // load friends data use
    const friends = use(friendsPromise);
    // console.log(friends);

    // passing values
    const values = {
        friends,
        timeline,
        setTimeline
    };

    return (
        <AppContexts.Provider value={values}>
            {children}
        </AppContexts.Provider>
    );
};

export default AppProviders;