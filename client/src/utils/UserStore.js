import React, { useState } from "react";




export const UserContext = React.createContext();


const UserStore = ({ children }) => {
    const [userState, setUserState] = useState();

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserStore;