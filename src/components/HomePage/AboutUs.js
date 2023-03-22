import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutUs.css";
import jaceruth from "./Images/jaceruth.jpeg";
import ealynnhsu from "./Images/ealynnhsu.png";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jace Ruth",
      title: "CEO",
      bio: "Jace has over 10 years of experience in ed-tech and is passionate about creating innovative solutions to help students learn.",
      photo: jaceruth,
    },
    {
      name: "Ealynn Hsu",
      title: "CTO",
      bio: "Ealynn is a full-stack developer with expertise in building scalable web applications. She is committed to using technology to improve education.",
      photo: ealynnhsu,
    },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">About Us</h2>
        <Row>
          <Col md={6}>
            <p>
              Athena is a revolutionary new platform for teachers and students.
              Our mission is to make learning more engaging and effective by
              leveraging the power of technology.
            </p>
            <p>
              Our team is made up of experienced educators and developers who
              are passionate about education. We believe that everyone has the
              potential to learn and we want to help unlock that potential.
            </p>
          </Col>
          <Col md={6}>
            <Row>
              {teamMembers.map((member, index) => (
                <Col md={6} key={index}>
                  <div className="team-member">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fluid
                      roundedCircle
                    />
                    <p className="name">{member.name}</p>
                    <p className="title">{member.title}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
