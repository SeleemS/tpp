import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://tppnetwork.notion.site/Job-Board-The-Potcast-Productions-3a9f64f8c693463ab4557287dd0d85b8?pvs=4',
      permanent: true, // Set to true if this is a permanent redirect
    },
  };
};

const CareersPage = () => {
  return null; // The component doesn't need to render anything
};

export default CareersPage;
