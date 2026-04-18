import { useTranslation } from "react-i18next";
import {
  SectionWrapper,
  SectionContent as Content,
  SectionSubtitle as Subtitle,
  SectionText as Description,
} from "shared/ui";

export function About() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about" background="base">
      <Content>
        <Subtitle>{t("about.title")}</Subtitle>

        <Description>{t("about.paragraph1")}</Description>

        <Description>{t("about.paragraph2")}</Description>
      </Content>
    </SectionWrapper>
  );
}
