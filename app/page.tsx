import { ArticleCard, ArticleCardProps } from "@/components/ArticleCard";

const articles: ArticleCardProps[] = [
  {
    title: "Les tendances du design web en 2024",
    date: "15 Mars 2024",
    excerpt:
      "Découvrez les dernières tendances qui façonnent l'avenir du design web, des interfaces minimalistes aux animations immersives.",
    author: "Sophie Martin",
    link: "#article-1",
  },
  {
    title: "Optimiser les performances de vos applications React",
    date: "12 Mars 2024",
    excerpt:
      "Apprenez les meilleures pratiques pour améliorer significativement les performances de vos applications React modernes.",
    author: "Thomas Dubois",
    link: "#article-2",
  },
  {
    title: "L'importance de l'accessibilité numérique",
    date: "8 Mars 2024",
    excerpt:
      "Comprendre pourquoi l'accessibilité web n'est plus une option mais une nécessité pour tous les projets numériques.",
    author: "Marie Laurent",
    link: "#article-3",
  },
  {
    title: "Tailwind CSS : Guide complet pour débutants",
    date: "5 Mars 2024",
    excerpt:
      "Un guide pratique pour maîtriser Tailwind CSS et créer des interfaces élégantes avec ce framework utility-first.",
    author: "Lucas Bernard",
    link: "#article-4",
  },
  {
    title: "TypeScript vs JavaScript : Que choisir ?",
    date: "1 Mars 2024",
    excerpt:
      "Analyse approfondie des avantages et inconvénients de TypeScript par rapport à JavaScript pour vos projets.",
    author: "Emma Rousseau",
    link: "#article-5",
  },
  {
    title: "L'avenir du développement frontend",
    date: "28 Février 2024",
    excerpt:
      "Explorez les technologies émergentes qui transformeront le développement frontend dans les années à venir.",
    author: "Pierre Durand",
    link: "#article-6",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Articles Récents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos derniers articles sur le développement web et les
            technologies modernes
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
