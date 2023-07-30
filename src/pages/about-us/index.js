import * as React from "react"
import Headers from "../../components/layouts/Header";
import { Container } from "@mui/material";

const AboutUsPage = () => { 
 return (
    <main>
        <Headers />
        <Container>
            <h1>About Us</h1>
        </Container>
    </main>
 )
}

export default AboutUsPage;

export const Head = () => <title>About-Us Page</title>