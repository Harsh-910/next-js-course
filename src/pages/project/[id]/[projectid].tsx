import { useRouter } from "next/router";

const ProjectId = () => {
    const router =useRouter();
    console.log(router.query)
    const id=router.query.id;
    return (
        <>
            <h2>Projectid</h2>
        </>
    )
}

export default ProjectId;