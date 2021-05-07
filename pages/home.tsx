import AuthenticatedLayout from 'components/layout/Authenticated';
import UserInfo from 'components/Home/UserInfo';
import ContainerPanel from 'components/Home/ContainerPanel';
import Summary from 'components/Home/Summary';

export default function Home(): JSX.Element {
  return (
    <div>
      <UserInfo />
      <ContainerPanel />
      <Summary />
    </div>
  );
}

Home.Layout = AuthenticatedLayout;
