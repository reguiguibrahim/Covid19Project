import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";


function Health_Info() {
  return (
    <div>
      <div
        style={{
          width: "300px",
          margin: "0 auto",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <Card>
          <Card.Img
            variant="top"
            src="https://www.gstatic.com/healthricherkp/campaigns/wear-mask-save-lives/UZ9ZuX.svg"
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>Wear a mask. Save lives.</Card.Title>
            <Card.Text>
              Wear a mask<br></br>
              Clean your hands<br></br>
              Keep a safe distance<br></br>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Accordion>
        <Card>
          <Card.Header style={{ textAlign: "center" }}>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Symptoms
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate illness and
                recover without hospitalization.<br></br>
                Most common symptoms:
              </p>
              <p>
                <li>fever</li>
                <li>dry cough</li>
                <li>tiredness</li>
              </p>
              Less common symptoms:
              <p>
                <li>aches and pains</li>
                <li>sore throat</li>
                <li>diarrhoea</li>
                <li>conjunctivitis</li>
                <li>headache</li>
                <li>loss of taste or smell</li>
                <li>a rash on skin, or discolouration of fingers or toes</li>
              </p>
              Serious symptoms:
              <p>
                <li>difficulty breathing or shortness of breath</li>
                <li>chest pain or pressure</li>
                <li>loss of speech or movement</li>
              </p>
              <p>
                Seek immediate medical attention if you have serious symptoms.
                Always call before visiting your doctor or health facility.
                People with mild symptoms who are otherwise healthy should
                manage their symptoms at home. On average it takes 5–6 days from
                when someone is infected with the virus for symptoms to show,
                however it can take up to 14 days.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header style={{ textAlign: "center" }}>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Prevention
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                Protect yourself and others around you by knowing the facts and
                taking appropriate precautions. Follow advice provided by your
                local health authority.
              </p>
              <p>To prevent the spread of COVID-19:</p>
              <p>
                <li>
                  Clean your hands often. Use soap and water, or an
                  alcohol-based hand rub.
                </li>
                <li>
                  Maintain a safe distance from anyone who is coughing or
                  sneezing.
                </li>
                <li>Wear a mask when physical distancing is not possible.</li>
                <li>Don’t touch your eyes, nose or mouth.</li>
                <li>
                  Cover your nose and mouth with your bent elbow or a tissue
                  when you cough or sneeze.
                </li>
                <li>Stay home if you feel unwell.</li>
                <li>
                  If you have a fever, cough and difficulty breathing, seek
                  medical attention.
                </li>
              </p>
              <p>
                Calling in advance allows your healthcare provider to quickly
                direct you to the right health facility. This protects you, and
                prevents the spread of viruses and other infections.
              </p>
              <p>Masks</p>
              <p>
                Masks can help prevent the spread of the virus from the person
                wearing the mask to others. Masks alone do not protect against
                COVID-19, and should be combined with physical distancing and
                hand hygiene. Follow the advice provided by your local health
                authority.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header style={{ textAlign: "center" }}>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Treatments
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                To date, there are no specific vaccines or medicines for
                COVID-19. Treatments are under investigation, and will be tested
                through clinical trials.
              </p>
              <p>
                <p>Self care</p>
                <p>
                  {" "}
                  If you feel sick you should rest, drink plenty of fluid, and
                  eat nutritious food. Stay in a separate room from other family
                  members, and use a dedicated bathroom if possible. Clean and
                  disinfect frequently touched surfaces.
                </p>
                <p>
                  Everyone should keep a healthy lifestyle at home. Maintain a
                  healthy diet, sleep, stay active, and make social contact with
                  loved ones through the phone or internet. Children need extra
                  love and attention from adults during difficult times. Keep to
                  regular routines and schedules as much as possible.
                </p>{" "}
                <p>
                  {" "}
                  It is normal to feel sad, stressed, or confused during a
                  crisis. Talking to people you trust, such as friends and
                  family, can help. If you feel overwhelmed, talk to a health
                  worker or counsellor.
                </p>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default Health_Info;
