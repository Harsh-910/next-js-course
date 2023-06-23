export default function UserProfiel(props: any) {
    return (
        <>
            <h1>{props.id}</h1>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { params } = context;
    const uid = params.uid;
    return {
        props: {
            id: 'User-' + uid
        }
    }
}