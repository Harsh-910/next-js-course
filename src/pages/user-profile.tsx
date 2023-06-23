export default function UserProfiel(props: any) {
    return (
        <>
            <h1>{props.id}</h1>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { params, req, res } = context;
    return {
        props: {
            id: 'MAX'
        }
    }
}