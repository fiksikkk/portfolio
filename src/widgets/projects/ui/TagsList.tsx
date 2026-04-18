import styled from "styled-components";
import { Tag } from "./Tag";

interface TagsListProps {
  className?: string;
  tags: string[];
}

export function TagsList({ className, tags }: TagsListProps) {
  return (
    <TagsListContainer className={className}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsListContainer>
  );
}

const TagsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
