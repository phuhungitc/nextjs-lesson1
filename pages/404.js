import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {Container} from "reactstrap";

export default function Notfound() {
    const router = useRouter();
    useEffect(()=>{
       setTimeout(()=>{
           router.push('/')
       },3000)
    },[]);
    return(
        <div className="Not-found">
            <Container>
                <h1 className="text-center">Opp....</h1>
            </Container>
        </div>
    )
}