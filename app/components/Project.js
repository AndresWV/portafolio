"use client";
import '../assets/css/content.css'
import '../assets/css/project.css'
import Image from "next/image";
import { Grid, Text, Link, Card } from "@nextui-org/react";
export default function Project({ project }) {
    const linkk = project.link
    return (
        <Card className="projectCard">
            {/* project title */}
            <Card.Header>
                <Grid xs={2}>
                    <Image
                        width={100}
                        height={80}
                        src={project.logo}
                        className="logoStackDataEng"
                        alt={project.logo}
                    />
                </Grid>
                <Grid xs={4} className="contentTitleCard">
                    <Text className="textTitleCard">{project.title}</Text>
                </Grid>
                <Grid xs={6}></Grid>
            </Card.Header>
            {/* project code */}
            <Card.Body>
                <Grid xs={12}>
                    <Text className="descriptionProject">DESCRIPCIÓN: {project.description}</Text>
                </Grid>
                <Grid xs={12}>
                    <Text className="githubRepo">GITHUB: {project.link}</Text>
                </Grid>
            </Card.Body>
        </Card>
    );
}
