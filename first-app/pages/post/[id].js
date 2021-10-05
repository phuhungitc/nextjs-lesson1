import React from 'react';
import {Container} from "reactstrap";
import {decode} from 'html-entities';


export const getStaticPaths = async () => {
    const res = await fetch('https://trithuconline.com/wp-json/wp/v2/posts');
    const data = await res.json();
    const paths = data.map((post) => {
        return{
            params: {
                slug: post.slug,
                id: post.id.toString()
            }
        }
    });
    return{
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://trithuconline.com/wp-json/wp/v2/posts/'+id);
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
function Post({post}) {
    return(
        <div>
            <Container>
                <h1>{decode(post.title.rendered)}</h1>
                <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
            </Container>
        </div>
    )
}
export default Post;