import { useRouter } from "next/router";

const Project = () => {
    const router =useRouter();
    console.log(router.query)
    const id=router.query.id;
    return (
        <>
            <h2>Project</h2>
        </>
    )
}

export default Project;