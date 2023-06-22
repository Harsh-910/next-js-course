import styles from "@/styles/Home.module.css";
import fs from "fs/promises";
import path from "path";

export default function Home(props: any) {
  const { product } = props;
  return (
    <>
      <p>Product 1</p>
      <p>Product 2</p>
      <p>Product 3</p>

      {product.map((data: any) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </>
  );
}

// export async function getStaticProps(){
//   return{props:{
//     product:[{id:'p1',title:'Product 1'}]
//   }}
// }

export async function getStaticProps() {
  console.log("Re-generate");
  const filePath = path.join(process.cwd(), "Data", "dummy-backend.json");
  const jsonData: any = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      product: data.products,
    },
    revalidate: 10,
  };
}
