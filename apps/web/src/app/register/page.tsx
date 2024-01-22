import CardRegister from './components/CardRegister';
import NextTopLoader from 'nextjs-toploader';

const Register = () => {
  return (
    <main className="container max-w-7xl px-4 mx-auto">
      <NextTopLoader color="#000" showSpinner={false} />
      <CardRegister />
    </main>
  );
};

export default Register;
