import styled from "styled-components"
import { Canon } from "./Typography"
import { Theme } from "./theme"

const SectionCanon = styled(Canon)`
  padding-bottom: 7px;
  margin-bottom: 21px;
  border-bottom: 1px solid ${Theme.colors.mainLight};
`

export default SectionCanon
