"use client";
import { Container, Row, Text, Col, Button, Link } from "@nextui-org/react";
import '../assets/css/content.css'
import Image from "next/image";
import Project from "./Project";

const description = "¡Hola! Me llamo Andrés Wallberg, soy Ingeniero civil en computación egresado de la Universidad de Talca" +
  ". Me considero un aficionado a la tecnología e innovación, en especial a los datos, tengo experiencia tanto como " +
  "ingeniero de software como ingeniero de datos, pero principalmente me especializo en datos. Además de la ingeniería, me gusta " +
  "mucho el deporte y la música.";
const logosDataEnginer = ['/img/airflow.png', '/img/beam.png', '/img/r.png', '/img/python.png']
const logosSoftwareEnginer = ['/img/next.png', '/img/js.png', '/img/laravel.png', '/img/vue.png']
const projectsDataEng = [
  {
    logo: '/img/beam.png',
    title: 'Proyecto introductorio a Apache Beam',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
  {
    logo: '/img/r.png',
    title: 'Proyecto introductorio a R',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
  {
    logo: '/img/airflow.png',
    title: 'Proyecto introductorio a Apache Airflow',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
  {
    logo: '/img/python.png',
    title: 'Proyecto introductorio a Python',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
]
export const Content = () => (

  <Container className="Contentback">
    {/* ACERCA DE MI */}
    <Row className="aboutMyContent" id="about">
      <Col>
        <Row><Text b className="principalJob">Data Engineer</Text></Row>
        <Row><Text className="secJob">Software Engineer</Text></Row>
        <Row><Text className="descriptionText">{description}</Text></Row>
      </Col>
    </Row>
    {/* DATA ENGINEER */}
    <Row className="dataEngineerContent" id="data">
      <Col>
        <Row className="contentTitleSection contentTitleSectionData">
          <Text className="titleSection">Trabajos como Data Engineer</Text>
        </Row>
        {/* logos */}
        <Row className="stackDataEngineer">
          {logosDataEnginer.map((item, index) => (
            <Col key={index}>
              <Image
                key={item}
                width={100}
                height={80}
                src={item}
                className="logoStackDataEng"
                alt={item}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    {projectsDataEng.map((project, index) => (
      <Row key={index}>
        <Project key={project} project={project} />
      </Row>
    ))}
    {/* SOFTWARE ENGINEER */}
    <Row className="dataEngineerContent" id="software">
      <Col>
        <Row className="contentTitleSection">
          <Text className="titleSection">Trabajos como Software Engineer</Text>
        </Row>
        {/* logos */}
        <Row className="stackDataEngineer">
          {logosSoftwareEnginer.map((itemSoftware, indexSoft) => (
            <Col key={indexSoft}>
              <Image
                key={itemSoftware}
                width={100}
                height={80}
                src={itemSoftware}
                className="logoStackDataEng"
                alt={itemSoftware}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
    {projectsDataEng.map((project, index) => (
      <Row key={index}>
        <Project key={project} project={project} />
      </Row>
    ))}
  </Container>
);
