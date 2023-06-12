import { useRouter } from "next/router";

const Person = () => {
    const router =useRouter();
    console.log(router.query)
    const id=router.query.id;
    return (
        <>
            <h2>Person {id}</h2>
        </>
    )
}

export default Person;