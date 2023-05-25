import './post.css';

export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/2844474/pexels-photo-2844474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Full-nouse battery backup coming later this year</h2>
        <p className="info">
          <a className="author">Matheus Maldonado</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
