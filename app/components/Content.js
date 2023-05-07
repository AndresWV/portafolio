"use client";
import { Container, Row, Text, Col, Button, Link} from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import '../assets/css/content.css'
import { BsGithub, BsLinkedin, BsFileEarmarkExcelFill, } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import Image from "next/image";
const description = "¡Hola! Me llamo Andrés Wallberg, soy Ingeniero civil en computación egresado de la Universidad de Talca" +
  ". Me considero un aficionado a la tecnología e innovación, en especial a los datos, tengo experiencia tanto como " +
  "ingeniero de software como ingeniero de datos, pero principalmente me especializo en datos. Además de la ingeniería, me gusta " +
  "mucho el deporte y la música.";
const logosDataEnginer = ['/img/airflow.png', '/img/beam.png', '/img/gcp.png', '/img/python.png']
const logosSoftwareEnginer = ['/img/next.png', '/img/js.png', '/img/laravel.png', '/img/vue.png']
export const Content = () => (

  <Container className="Contentback">
    {/* ACERCA DE MI */}
    <Row className="aboutMyContent">
      <Col>
        <Row><Text b className="principalJob">Data Engineer</Text></Row>
        <Row><Text className="secJob">Software Engineer</Text></Row>
        <Row><Text className="descriptionText">{description}</Text></Row>
      </Col>
    </Row>
    {/* DATA ENGINEER */}
    <Row className="dataEngineerContent">
      <Col>
        {/* logos */}
        <Row className="stackDataEngineer">
          {logosDataEnginer.map((item, index) => (
            <Col key={index}>
              <Image
                key={item}
                width={110}
                height={110}
                src={item}
                className="logoStackDataEng"
                alt={item}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    {/* SOFTWARE ENGINEER */}
    <Row className="dataEngineerContent">
      <Col>
        {/* logos */}
        <Row className="stackDataEngineer">
          {logosSoftwareEnginer.map((itemSoftware, indexSoft) => (
            <Col key={indexSoft}>
              <Image
                key={itemSoftware}
                width={150}
                height={130}
                src={itemSoftware}
                className="logoStackDataEng"
                alt={itemSoftware}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    {/* CONTACTO */}
    <Row className="contactoContent">
      <Grid.Container gap={3} >
        <Grid xs={2}></Grid>
        <Grid xs={2}>
        <Link href="https://github.com/AndresWV"><BsGithub className="socialNetLogo" /></Link>
        </Grid>
        <Grid xs={2}>
        <Link href="https://www.linkedin.com/in/andr%C3%A9s-wallberg-vergara-57667b207/"><BsLinkedin className="socialNetLogo" /></Link>
        </Grid>
        <Grid xs={2}>
        <Link href="mailto:andres.wv@correo.com"><AiOutlineMail className="socialNetLogo" /></Link>
        </Grid>
        <Grid xs={4}>
        <Link href="/files/cv.pdf"><BsFileEarmarkExcelFill className="socialNetLogo" /></Link>
        </Grid>
      </Grid.Container>
    </Row>
  </Container>
);
