import styled from "styled-components";

export default function Contact() {
  const contactMethods = [
    {
      name: "Telegram",
      handle: "@fiksik_k",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      ),
      link: "https://t.me/fiksik_k",
    },
    {
      name: "Email",
      handle: "yakov.varenik@gmail.com",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "mailto:yakov.varenik@gmail.com",
    },
    {
      name: "GitHub",
      handle: "github.com/Fiksikkk",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/Fiksikkk",
    },
  ];

  return (
    <Section id="contact">
      <Container>
        <Content>
          <Subtitle>Get in Touch</Subtitle>

          <Title>Let's work together</Title>

          <Description>
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out.
          </Description>

          <ContactList>
            {contactMethods.map((method, index) => (
              <ContactLink
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ContactInfo>
                  <IconContainer>{method.icon}</IconContainer>

                  <ContactDetails>
                    <ContactName>{method.name}</ContactName>
                    <ContactHandle>{method.handle}</ContactHandle>
                  </ContactDetails>
                </ContactInfo>

                <ArrowContainer>
                  <svg
                    className="w-5 h-5 text-[#C8A97E] group-hover:text-white transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </ArrowContainer>
              </ContactLink>
            ))}
          </ContactList>
        </Content>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 8rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c8a97e;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 19px;
  color: #6f6b63;
  line-height: 1.625;
  margin-bottom: 4rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 2px 12px rgba(43, 43, 43, 0.06);
  transition: all 0.5s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 8px 32px rgba(200, 169, 126, 0.2);
    background-color: #c8a97e;
    transform: translateY(-4px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 16px;
  background-color: #f5f1e8;
  color: #c8a97e;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }

  ${ContactLink}:hover & {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
  }
`;

const ContactDetails = styled.div`
  text-align: left;
`;

const ContactName = styled.div`
  font-size: 20px;
  margin-bottom: 0.25rem;
  color: #2b2b2b;
  font-family: var(--font-display);
  font-weight: 600;
  transition: color 0.5s;

  ${ContactLink}:hover & {
    color: #ffffff;
  }
`;

const ContactHandle = styled.div`
  font-size: 15px;
  color: #6f6b63;
  transition: color 0.5s;

  ${ContactLink}:hover & {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ArrowContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #f5f1e8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  ${ContactLink}:hover & {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(4px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #c8a97e;
    transition: color 0.5s;

    ${ContactLink}:hover & {
      color: #ffffff;
    }
  }
`;
