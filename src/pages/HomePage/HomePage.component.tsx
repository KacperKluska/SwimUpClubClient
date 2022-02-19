import { BuildInProgress } from '../../components/BuildInProgress/BuildInProgress.component';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';

export const HomePage = () => (
  <CenteredPaper>
    <BuildInProgress text="HomePage" />
  </CenteredPaper>
);
