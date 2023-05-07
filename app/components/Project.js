"use client";
import '../assets/css/content.css'
import '../assets/css/project.css'
import Image from "next/image";
import { Container, Row, Text, Col, Link, Card } from "@nextui-org/react";
export default function Project({ project }) {
    return (
        <Card className="projectCard">
            {/* project title */}
            <Card.Header>
                <Col xs={4}>
                    <Image
                        width={100}
                        height={80}
                        src={project.logo}
                        className="logoStackDataEng"
                        alt={project.logo}
                    />
                </Col>
                <Col xs={4}>
                    <Text>{project.title}</Text>
                </Col>
            </Card.Header>
            {/* project code */}
            <Card.Body>
                <Row>
                    <Text>{project.link}</Text>
                </Row>
                <Row>
                    <Text>{project.description}</Text>
                </Row>
            </Card.Body>
        </Card>
    );
}
