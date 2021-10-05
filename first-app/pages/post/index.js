import React from 'react';
import {Container} from "reactstrap";
import Link from 'next/link';
import {decode} from 'html-entities';

export const getStaticProps = async () => {
    const res = await fetch('https://trithuconline.com/wp-json/wp/v2/posts');
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {post:data},
    }
}
function Posts({post}) {
    return(
        <Container>
            <h1>Tin tức</h1>
            <ul>
                {post.map((post,index) => (
                    <li key={index}><Link href={`/post/${post.id}`}>{decode(post.title.rendered)}</Link></li>
                ))}
            </ul>

        </Container>
    )
}
export default Posts