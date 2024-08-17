import { useState } from 'react';
import { Button, Collapse, Container, Row, Col } from 'react-bootstrap';


const Workout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);
    return (
        <Container fluid className="p-0">
            <Row className="vh-100 no-gutters">
                {/* Sidebar */}
                <Col
                    lg={3}
                    md={4}
                    sm={12}
                    className={`bg-light ${sidebarOpen ? 'd-block' : 'd-none d-lg-block'}`}
                    id="sidebar"
                >
                    <Button
                        className="d-lg-none"
                        onClick={handleToggleSidebar}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        Toggle Sidebar
                    </Button>
                    <Collapse in={sidebarOpen}>
                        <div className="p-3">
                            <MonthList tamilMonthNames={tamilMonthNames}
                                getMonthValue={getMonthValue}
                            />
                        </div>
                    </Collapse>
                </Col>

                {/* Main and Day Overview */}
                <Col
                    lg={9}
                    md={8}
                    sm={12}
                    className="d-flex flex-column"
                >
                    <Row className="flex-grow-1 no-gutters">
                        {/* Main Content */}
                        <Col lg={9} md={12} className="p-3 bg-light" style={{ overflowY: 'auto' }}>
                            {/* Main content here */}
                            {children}
                        </Col>

                        {/* Day Overview */}
                        <Col lg={3} md={12} className="p-3 bg-light" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
                            {/* Day Overview content here */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Workout