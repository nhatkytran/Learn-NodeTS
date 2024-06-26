import styles from "../styles/Home.module.css";

import useSwr from "swr";

import fetcher from "@/utils/fetcher";

interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  session: string;
  iat: number;
  exp: number;
}

const Home = () => {
  const { data } = useSwr<User>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher
  );

  if (data) return <div>Welcome! {data.name}</div>;

  return <div className={styles.container}>Please login</div>;
};

export default Home;
