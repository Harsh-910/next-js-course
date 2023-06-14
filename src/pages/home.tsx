import Link from 'next/link'
import {useRouter} from 'next/router';

const Home = () => {
    const router = useRouter();

    const changeRoute=()=>{
        router.push('/about');
    }
    return (
        <>
            <h2>Home</h2>
            <Link href='/about'>About thorugh Link</Link>
            <button onClick={changeRoute}>About</button>
        </>
    )
}

export default Home;