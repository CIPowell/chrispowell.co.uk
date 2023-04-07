import styles from './BlogArticle.module.css';
import { Link } from 'react-router-dom';

function BlogArticle({ article }) {
    return (<article className={styles.article} role="main">
        <h1>{article.title.Default}</h1>
        <p className={styles.blurb}>{ article.blurb }</p>
        <img src={article.featuredImage} alt="" className={styles.featuredImage}/>
        <section class={styles.article_body}>{article.article}</section>
        <section class={styles.tags}>{article.tags.map(tag => <Link key={tag} to={`/blog?tag=${tag}`} className={styles.tag}>{tag}</Link>)}</section>
    </article>);
}

export default BlogArticle;