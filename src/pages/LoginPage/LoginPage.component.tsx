import { BuildInProgress } from '../../components/BuildInProgress/BuildInProgress.component';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';

export const LoginPage = () => (
  <CenteredPaper>
    <BuildInProgress text="LoginPage" />
  </CenteredPaper>
);
