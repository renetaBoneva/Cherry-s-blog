export function CommentItem({
    comment,
    auth
}) {
    return (
        <div className="comment">
            {auth.imageUrl && auth.imageUrl !== ""
                ? (
                    <div className="imgPlace" style={{
                        backgroundImage: `url("${auth.imageUrl}")`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                    </div>
                ) : (
                    <div className="imgPlace">
                        <i className="bi bi-person-fill"></i>
                    </div>
                )}
            <div className="comPlace">
                <p className="name">{auth.username ? auth.username : "User"}</p>
                <p className="content">{comment}</p>
            </div>
        </div>
    );
}
// {
//     width: 200px;
//     height: 200px;
// }