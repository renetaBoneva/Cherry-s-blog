export function CommentItem({
    comment,
    auth,
    editedOwnerInfo
}) {
    return (
        <div className="comment">
            {(auth.imageUrl && auth.imageUrl !== "") || (editedOwnerInfo?.imageUrl && editedOwnerInfo?.imageUrl !== "")
                ? (
                    <div className="imgPlace" style={{
                        backgroundImage: `url("${(editedOwnerInfo && editedOwnerInfo?.imageUrl)
                            ? editedOwnerInfo?.imageUrl
                            : auth.imageUrl}")`,
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
                <p className="name">{(editedOwnerInfo && editedOwnerInfo?.username)
                    ? editedOwnerInfo?.username
                    : ((auth.username) ? auth.username : auth.email)}</p>
                <p className="content">{comment}</p>
            </div>
        </div>
    );
}
// {
//     width: 200px;
//     height: 200px;
// }