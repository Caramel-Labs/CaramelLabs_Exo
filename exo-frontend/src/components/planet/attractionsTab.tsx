import ArticleCard from "./articleCard"

export default function AttractionsTab() {
  return (
    <div>
      {/* carousel */}
      <section>
        <h1>Most recommended</h1>
        <p> Carouselllll arhgghghg</p>
      </section>

      {/* trending  */}
      <section>
        <h1>trending articles</h1>
        <ArticleCard title="title" content="content" />
      </section>
    </div>
  )
}
