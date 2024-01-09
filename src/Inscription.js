import React, { useState, useEffect } from "react";
import { useMemberstack } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";



function Inscription(args, props) {
    const memberstack = useMemberstack();
    const { openModal, hideModal } = useMemberstackModal();
    const [member, setMember] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Open signup modal 
        memberstack.openModal("SIGNUP")
            // Handle returned data 
            .then((signupData) => {
                console.log("User signed up!", signupData);
                memberstack.hideModal();
                setMember(member);
                navigate("/app/dashboard");
            });
    }, []);

    return (
        <></>
    );
}

export default Inscription;