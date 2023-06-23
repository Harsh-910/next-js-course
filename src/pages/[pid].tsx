import fs from "fs/promises";
import path from "path";

export default function Product(props: any) {
  const { product } = props;
  return (
    <>
      <h1>{product.title}</h1>
      <p>Description</p>
    </>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const pid = params.pid;
  const filePath = path.join(process.cwd(), "Data", "dummy-backend.json");
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const productdata = data.products.find((product: any) => product.id == pid);
  return {
    props: {
      product: productdata,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
}
