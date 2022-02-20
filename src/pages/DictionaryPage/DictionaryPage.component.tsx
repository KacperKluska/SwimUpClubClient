import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { StyledTopics } from './DictionaryPage.styles';
import { useTranslations } from '../../translations/src';

const topics = ['frontCrawl', 'backstroke', 'breaststroke', 'butterfly'];

export const DictionaryPage = () => {
  const translate = useTranslations();

  return (
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
};
