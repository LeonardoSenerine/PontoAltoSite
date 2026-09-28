export default function Collage() {
  return (
    <section className="collage">
      <div className="container collage__wrap">
        <img
          className="collage__main"
          src="/media/casa-cheia.jpg"
          alt="Casa cheia à noite no Ponto Alto"
          loading="lazy"
        />
        <img
          className="collage__inset"
          src="/media/amigos-1.jpg"
          alt="Amigos curtindo a noite"
          loading="lazy"
        />
      </div>
    </section>
  )
}
