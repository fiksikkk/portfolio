import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import {
  Section as BaseSection,
  SectionContainer as Container,
  CenteredSectionContent as Content,
  SectionSubtitle as Subtitle,
  SectionParagraph as Description,
  TelegramIcon,
  EmailIcon,
  GitHubIcon,
} from "shared/ui";

interface ContactMethod {
  name: string;
  handle: string;
  link: string;
  Icon: typeof TelegramIcon;
}

export function Contact() {
  const { t } = useTranslation();
  const contactMethods: ContactMethod[] = [
    {
      name: "Telegram",
      handle: "@fiksik_k",
      link: "https://t.me/fiksik_k",
      Icon: TelegramIcon,
    },
    {
      name: "Email",
      handle: "yakov.varenik@gmail.com",
      link: "mailto:yakov.varenik@gmail.com",
      Icon: EmailIcon,
    },
    {
      name: "GitHub",
      handle: "github.com/Fiksikkk",
      link: "https://github.com/Fiksikkk",
      Icon: GitHubIcon,
    },
  ];

  return (
    <Section id="contact">
      <Container>
        <Content>
          <Subtitle>{t("contact.subtitle")}</Subtitle>

          <Title>{t("contact.title")}</Title>

          <Description>{t("contact.description")}</Description>

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
                  <IconContainer>
                    <method.Icon />
                  </IconContainer>

                  <ContactDetails>
                    <ContactName>{method.name}</ContactName>
                    <ContactHandle>{method.handle}</ContactHandle>
                  </ContactDetails>
                </ContactInfo>

                <ArrowContainer>
                  <ArrowIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </ArrowIcon>
                </ArrowContainer>
              </ContactLink>
            ))}
          </ContactList>
        </Content>
      </Container>
    </Section>
  );
}

const Section = styled(BaseSection)`
  background: ${Colors.base};
`;

const Title = styled.h3`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 24px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${Colors.surface};
  border-radius: 24px;
  box-shadow: 0 2px 12px ${Colors.foregroundTint06};
  transition: all 0.5s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 8px 32px ${Colors.primaryTint20};
    background-color: ${Colors.primary};
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
  background-color: ${Colors.base};
  color: ${Colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }

  ${ContactLink}:hover & {
    background-color: ${Colors.surfaceTint20};
    color: ${Colors.surface};
  }
`;

const ContactDetails = styled.div`
  text-align: left;
`;

const ContactName = styled.div`
  font-size: 20px;
  margin-bottom: 0.25rem;
  color: ${Colors.foreground};
  font-family: var(--font-display);
  font-weight: 600;
  transition: color 0.5s;

  ${ContactLink}:hover & {
    color: ${Colors.surface};
  }
`;

const ContactHandle = styled.div`
  font-size: 15px;
  color: ${Colors.muted};
  transition: color 0.5s;

  ${ContactLink}:hover & {
    color: ${Colors.surfaceTint80};
  }
`;

const ArrowContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${Colors.base};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  ${ContactLink}:hover & {
    background-color: ${Colors.surfaceTint20};
    transform: translateX(4px);
  }
`;

const ArrowIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: ${Colors.primary};
  transition: color 0.5s;

  ${ContactLink}:hover & {
    color: ${Colors.surface};
  }
`;
