import { useRouter } from "next/router";

const test = () => {
  const router = useRouter();
  return <h1>{router.query.test}</h1>;
};
export default test;
