import styled from 'styled-components';
import ReactTooltip, { Effect, Place } from 'react-tooltip';

const StyledTooltip = styled(ReactTooltip)`
  max-width: 20vh;
  white-space: normal;
`;

type TooltipProps = {
  text: string;
  id: string;
  place: Place;
  effect: Effect;
};

function Tooltip({ text, id, place, effect }: TooltipProps) {
  return (
    <StyledTooltip id={id} place={place} effect={effect}>
      {text}
    </StyledTooltip>
  );
}

export default Tooltip;
