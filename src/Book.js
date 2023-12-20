const Book = (props) => {
    const {title, author, img, number} = props;
    return (
        <article className="book">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h4 className="author">{author}</h4>
            <span className="number">{`# ${number + 1}`}</span>
        </article>
    );
};

export default Book;