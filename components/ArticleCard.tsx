export interface ArticleCardProps {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  link: string;
}

export const ArticleCard = ({
  title,
  date,
  excerpt,
  author,
  link,
}: ArticleCardProps) => {
  return (
    <article className="group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:bg-card-hover hover:-translate-y-1">
      <a href={link} className="p-6 h-full flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <time className="text-sm text-muted-foreground font-medium">
              {date}
            </time>
          </div>

          <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <span className="text-sm font-medium text-card-foreground">
            {author}
          </span>

          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
            <span className="text-sm font-medium mr-2">Lire plus</span>
            {/* <ArrowRight className="h-4 w-4" /> */}
          </div>
        </div>
      </a>
    </article>
  );
};
