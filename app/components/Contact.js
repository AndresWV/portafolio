"use client";
import { Container, Row, Text, Button, Link } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import '../assets/css/content.css'
import { BsGithub, BsLinkedin, BsFileEarmarkExcelFill, } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact() {
    return (
        <Container className="contactoContent">
            {/* CONTACTO */}
            <Row id="contact" >
                <Grid.Container gap={3} >
                    <Grid xs={12} className="footerContactContent">
                        <Text className="footerContact">Andrés Wallberg | +56993514859 | andres.wv99@gmail.com</Text>
                    </Grid>
                    <Grid xs={3}></Grid>
                    <Grid xs={2}>
                        <Link href="https://github.com/AndresWV"><BsGithub className="socialNetLogo" /></Link>
                    </Grid>
                    <Grid xs={2}>
                        <Link href="https://www.linkedin.com/in/andr%C3%A9s-wallberg-vergara-57667b207/"><BsLinkedin className="socialNetLogo" /></Link>
                    </Grid>
                    <Grid xs={2}>
                        <Link href="mailto:andres.wv@correo.com"><AiOutlineMail className="socialNetLogo" /></Link>
                    </Grid>
                    <Grid xs={3}>
                        <Link href="/files/cv.pdf"><BsFileEarmarkExcelFill className="socialNetLogo" /></Link>
                    </Grid>
                </Grid.Container>
            </ Row >
        </Container>
    );
}
