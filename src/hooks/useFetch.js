import axios from "axios";
import { useEffect, useState } from "react";

function useFetch() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const url = "https://meetmax-server.cyclic.app/api/auth/signin";
        const data = axios.post(url).then
        // fetch('user.json')
        //     .then(res => res.json())
        //     .then(data => setUserData(data))
    }, []);
    return [userData, setUserData];
}

export default useFetch