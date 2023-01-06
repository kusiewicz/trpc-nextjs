import { trpc } from "../server/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery();

  return (
    <h1
      style={{
        fontSize: "100px",
        color: "black",
      }}
    >
      {hello.data}
    </h1>
  );
}
