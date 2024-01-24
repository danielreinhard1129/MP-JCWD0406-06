import NextTopLoader from 'nextjs-toploader';
import LoginCard from './components/CardLogin';

const Register = () => {
  return (
    <main className="container max-w-7xl mx-auto">
      <NextTopLoader color="#ffffff" showSpinner={false} />
      <LoginCard />
    </main>
  );
};

export default Register;
