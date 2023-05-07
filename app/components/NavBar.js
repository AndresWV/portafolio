import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import '../assets/css/nav.css'
export default function NavBar() {
    const collapseItems = [
        "ACERCA DE MÍ",
        "DATA ENGINEER",
        "SOFTWARE ENGINEER",
        "CONTACTO"
    ];
    return (

        <Navbar className="back navContent">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "50%",
                    },
                }}
            >
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="success"
                hideIn="xs"
                variant="highlight-rounded"
            >
                <Navbar.Link href="#">ACERCA DE MÍ</Navbar.Link>
                <Navbar.Link href="#">DATA ENGINEER</Navbar.Link>
                <Navbar.Link href="#">SOFTWARE ENGINEER</Navbar.Link>
                <Navbar.Link href="#">CONTACTO</Navbar.Link>
            </Navbar.Content>
            
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        css={{
                            color: index === collapseItems.length - 1 ? "$error" : "",
                        }}
                        isActive={index === 2}
                    >
                        <Link
                            color="text"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
