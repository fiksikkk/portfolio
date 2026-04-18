import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import { useModal } from "shared/libs/hooks/useModal";
import { CloseButton, PillBadge } from "shared/ui";

export interface ProjectDetails {
  name: string;
  description: string;
  tags: string[];
  highlight: string;
  details?: string;
}

interface ProjectDetailsModalProps {
  project: ProjectDetails;
  onClose: () => void;
}

export function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const { t } = useTranslation();
  const detailsText = project.details ?? t("projects.modal.placeholder");

  useModal({ onClose });

  return (
    <ModalOverlay onClick={onClose}>
      <ModalDialog onClick={(event) => event.stopPropagation()}>
        <ModalCloseButton
          onClick={onClose}
          aria-label={t("projects.modal.closeLabel")}
        />

        <ModalHighlight>{project.highlight}</ModalHighlight>
        <ModalTitle>{project.name}</ModalTitle>
        <ModalText
          dangerouslySetInnerHTML={{
            __html: detailsText.split("\n").join("<br />"),
          }}
        />
      </ModalDialog>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${Colors.foregroundTint10};
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 100;
`;

const ModalDialog = styled.div`
  position: relative;
  width: 80vw;
  height: 70vh;
  overflow-y: auto;
  background: ${Colors.surface};
  border-radius: 24px;
  padding: 56px;
  box-shadow: 0 16px 64px ${Colors.foregroundTint12};

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

const ModalCloseButton = styled(CloseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const ModalHighlight = styled(PillBadge)`
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(28px, 4vw, 42px);
  margin: 0 0 24px;
`;

const ModalText = styled.p`
  font-size: 18px;
  color: ${Colors.muted};
  line-height: 1.8;
  margin: 0 0 32px;
  white-space: pre-line;
`;
