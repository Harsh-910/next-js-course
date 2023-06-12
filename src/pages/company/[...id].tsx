import { useRouter } from "next/router";
const company = () => {
    const router=useRouter();
    const query=router.query.id;
    console.log(query)
    return (
        <>
            <h2>company {query}</h2>
        </>
    )
}

export default company;