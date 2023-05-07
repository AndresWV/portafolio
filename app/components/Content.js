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
    title: 'Apache Beam aplicado al Quijote de la Mancha',
    link: 'https://github.com/AndresWV/00-Pipeline',
    description: 'Proyecto de apache beam hecho en Python, de manera individual. El proyecto consiste en trabajar sobre la famosa novela del Quijote de la Mancha, en PCollections para realizar un word count, que incluye una limpieza de palabras, con una salida lista para ser exportada en formato csv.'
  },
  {
    logo: '/img/r.png',
    title: 'Análisis iris dataset',
    link: 'https://github.com/AndresWV/procesamiento-irisDataset-r',
    description: 'Breve análisis realizado sobre el dataset iris. El script fue desarrollado en R.'
  },
  {
    logo: '/img/airflow.png',
    title: 'Proyecto introductorio a Apache Airflow',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
  {
    logo: '/img/python.png',
    title: 'Regresion Lineal aplicada a dataset de automóviles mpg',
    link: 'https://github.com/AndresWV/AndresWV.github.io/blob/main/S07-Linear-Models/Tarea_regresion_lineal.ipynb',
    description: 'En este proyecto se investigó acerca del conjunto de datos auto mpg perteneciente a la librería seaborn con el objetivo de estimar el rendimiento promedio de automóviles usando regresión lineal.'
  },
  {
    logo: '/img/python.png',
    title: 'Machine Learning - KNN aplicado a peguin dataset',
    link: 'https://github.com/AndresWV/AndresWV.github.io/blob/main/3_fold_CV_para_Penguin_dataset.ipynb',
    description: 'En este proyecto se investigó acerca del conjunto de datos "penguin dataset" perteneciente a kaggle con el objetivo de entrenar un modelo y generar predicción con los datos, además de realizar un proceso de validación cruzada.'
  },
  {
    logo: '/img/python.png',
    title: 'Machine Learning - Human Activity Recognition | WISDM-HAR1',
    link: 'https://github.com/AndresWV/AndresWV.github.io/blob/main/3_fold_CV_para_Penguin_dataset.ipynb',
    description: 'Se aplicará el método OSEMN para el desarrollo del proyecto, el cual cubre cada paso del ciclo de vida de un proyecto de Machine Learning. Este proyecto se basa en el dataset https://www.cis.fordham.edu/wisdm/dataset.php, el cual es un conjunto de datos que incluyen actividades de 19 sujetos mientras realizaron 6 actividades durante 3 minutos cada una. El proceso utilizó señales obtenidas de acelerómetro y giroscopio incluidos en teléfonos y relojes inteligentes, ubicados en bolsillo y muñeca respectivamente.'
  },
  {
    logo: '/img/python.png',
    title: 'TensorFlow | LibSVM - Heart Attack Analysis & Prediction Dataset',
    link: 'https://colab.research.google.com/drive/17k_VE3_GA-KBc8P4Kv_lRcB3YN76Tul1?usp=sharing#scrollTo=7Zup9THO_0mu',
    description: 'Proyecto en modalidad colaborativa (con 2 personas más), el cual consta de una implementación de Machine Learning a través de LibSVM y una implementación de Deep Learning a través de Tensorflow, aplicada al dataset Heart Attack Analysis & Prediction Dataset de Kaggle, Este proyecto es realizado con el fin de resolver un problema supervisado de clasificación, el cual busca detectar personas con tendencias a ataques cardiacos.'
  },
]
const projectsSoftwareEng = [
  {
    logo: '/img/vue.png',
    title: 'Tracking de bus para la Universidad de Talca',
    link: 'https://github.com/AndresWV/tracking-bus-utal',
    description: 'Proyecto académico, realizado en colaborativo con 4 compañeros. El proyecto consiste en un tracking de GPS, para el bus de la Universidad de Talca. El front del proyecto fue desarrollado en Vue, el back fue desarrollado con express. Para recibir las coordenadas de geolocalización se hace a través de un socket, el cual fue configurado previamente en GCP'
  },
  {
    logo: '/img/vue.png',
    title: 'Monitoreo inteligente de bicicletas',
    link: 'https://github.com/AndresWV/bicicletero',
    description: 'Proyecto académico, realizado en colaborativo con 3 compañeros. El proyecto consiste en una aplicación que permita monitorear a través de las cámaras las bicicletas de la Universidad de Talca, además de llevar un control del ingreso y egreso de los estudiantes al bicicletero. El front del proyecto fue desarrollado en Vue+Vuetify, el back fue desarrollado con express y Firebase. El deploy fue realizado en GCP'
  },
  {
    logo: '/img/vue.png',
    title: 'Sistema Inteligente de Horarios Digitales',
    link: 'https://github.com/AndresWV/horarios',
    description: 'Proyecto académico, realizado en colaborativo con 3 compañeros. El proyecto consiste en una aplicación que permita gestionar las salas de la Universidad de Talca. Se pueden distinguir 2 usuarios, funcionarios y estudiantes, los funcionarios pueden cargar los horarios de cada sala y los estudiantes a través del escaneo de un código QR pueden verificar el horario semanal de las salas, además de poder buscar sus salas y el horario de la sala. El front del proyecto fue desarrollado en Vue+Vuetify, el back fue desarrollado con express y Firebase. El deploy fue realizado en GCP'
  },
  {
    logo: '/img/next.png',
    title: 'Portafolio de Data Engineer | Software Engineer',
    link: 'https://github.com/AndresWV/portafolio',
    description: 'El portafolio que se está viendo fue realizar con, NextJS, NextUI y Bootstrap 5.'
  },
  {
    logo: '/img/laravel.png',
    title: 'Proyecto Laravel PHP',
    link: 'https://githubo.com/AndresWV/ejemplo.R',
    description: 'El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo.'
  },
  {
    logo: '/img/next.png',
    title: 'Proyecto NextJS',
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
    {projectsSoftwareEng.map((project, index) => (
      <Row key={index}>
        <Project key={project} project={project} />
      </Row>
    ))}
  </Container>
);
