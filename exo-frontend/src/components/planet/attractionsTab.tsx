import ArticleCard from "./articleCard"
import AttractionCard from "./attractionCard"
import Subheading from "./subheading"

export default function AttractionsTab() {
  return (
    <div>
      {/* Carousel heading */}
      <section className="mt-6">
        <Subheading title={'Most Recommended'} />
      </section>

      {/* Carousel */}
      <section>
        {/* <p>Carouselllll arhgghghg</p> */}
        <AttractionCard />
      </section>

      {/* Trending heading */}
      <section className="mt-6">
        <Subheading title={'Trending Articles'} />
      </section>

      {/* Trending  */}
      <section className="flex flex-col gap-6 mb-4">
        <ArticleCard title="Jovian Wonders Unveiled" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
        <ArticleCard title="Io's Fiery Spectacle" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
        <ArticleCard title="Jovian Wonders Unveiled" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
        <ArticleCard title="Jovian Wonders Unveiled" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
        <ArticleCard title="Jovian Wonders Unveiled" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
        <ArticleCard title="Jovian Wonders Unveiled" content="Embark on an extraordinary journey to explore Jupiter's amazing ecosystem." />
      </section>
    </div>
  )
}
