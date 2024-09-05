import React from "react";
import { useRouter } from "next/router";

const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Postagem {id}</h1>
            <p>Este é o conteúdo da postagem {id}</p>
        </div>
    )
}

export default PostPage;