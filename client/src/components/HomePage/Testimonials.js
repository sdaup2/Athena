import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Math Teacher",
      quote: `"Athena has completely transformed the way I teach math. The ability to create question sets and real-time questions has made my classes much more engaging and interactive."`,
    },
    {
      name: "Jane Smith",
      title: "High School Student",
      quote: `"I used Athena to prepare for my AP exams and it was incredibly helpful. The question sets were challenging but also fun to do, and the real-time questions helped me stay on track."`,
    },
  ];

  return (
    <section id="testimonials" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={6} key={index}>
              <div className="testimonial">
                <p className="quote">{testimonial.quote}</p>
                <p className="name">{testimonial.name}</p>
                <p className="title">{testimonial.title}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
