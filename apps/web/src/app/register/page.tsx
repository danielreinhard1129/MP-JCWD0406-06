import CardRegister from "./components/CardRegister";
import NextTopLoader from "nextjs-toploader";

const Register = () => {
  return 
    <main className="container max-w-7xl mx-auto w-[100%]">
      <NextTopLoader color="#ffffff" showSpinner={false} />
      <CardRegister />
    </main>
  );
};

export default Register;
