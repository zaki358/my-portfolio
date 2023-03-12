import React, { memo } from "react";
import styled from 'styled-components'

export const About: React.FC = memo(() => {
  return <SSection>About.</SSection>;
});

const SSection = styled.section`
  padding-top: 60px;
`