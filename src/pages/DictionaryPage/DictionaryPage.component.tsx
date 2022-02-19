import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { translate } from '../../translations/src';
import { StyledTopics } from './DictionaryPage.styles';

const topics = ['frontCrawl', 'backstroke', 'breaststroke', 'butterfly'];

export const DictionaryPage = () => (
  <CenteredPaper>
    <StyledTopics>
      {topics.map((topic) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{translate(`dictionary.styles.${topic}`)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {translate(`dictionary.descriptions.${topic}`)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </StyledTopics>
  </CenteredPaper>
);
