import { useEffect } from "react";
import { verifyAccount } from "./config/app.service";

export default function Verfiy() {
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');
    useEffect(() => {
        if(userId && secret){
            verifyAccount(userId,secret).then(rs=>{
                console.log(rs)
            })
        }

    },[secret,userId])
    return (
        <div>
            <h1>Verifying</h1>
        </div>
    )
}