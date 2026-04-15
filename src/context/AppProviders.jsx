import { use } from "react";
import AppContexts from "../../../creativework/src/context/AppContexts";

const friendsPromise = fetch('/friends.json').then(res => res.json());

const AppProviders = ({children}) => {
    // load friends data use
    const friends = use(friendsPromise);
    console.log(friends);

    // passing values
    const values = {friends};

    return (
        <AppContexts.Provider value={values}>
            {children}
        </AppContexts.Provider>
    );
};

export default AppProviders;