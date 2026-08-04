import { Link } from "@tanstack/react-router";

export function ArticleCard({ article, size = "md" }) {
    return (
        <article className="group">
            <Link to="/articles/$slug" params={{ slug: article.slug }} className="block">
                <div className="overflow-hidden rounded-2xl bg-muted shadow-[var(--shadow-soft)]">
                    <img
                        src={article.cover}
                        alt={`Cover image for ${article.title}`}
                        loading="lazy"
                        width={1200}
                        height={800}
                        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${size === "lg" ? "aspect-[16/10]" : "aspect-[3/2]"
                            }`}
                    />
                </div>
                <div className="mt-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        <span className="text-sage">{article.category}</span>
                        {article.featured && (
                            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] tracking-[0.14em] text-accent-foreground">Featured</span>
                        )}
                    </div>
                    <h3
                        className={`mt-3 font-serif tracking-tight decoration-1 underline-offset-4 group-hover:underline ${size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                            }`}
                    >
                        {article.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted-foreground">{article.excerpt}</p>
                    <p className="mt-4 text-xs text-muted-foreground">
                        {formatDate(article.date)} · {article.readingTime} min read
                    </p>
                </div>
            </Link>
        </article>
    );
}
