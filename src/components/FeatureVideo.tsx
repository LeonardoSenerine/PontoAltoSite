type Props = { onPlay: (src: string) => void }

export default function FeatureVideo({ onPlay }: Props) {
  return (
    <section className="feature">
      <div className="container feature__card">
        <div className="feature__media">
          <img src="/media/show-coberto.jpg" alt="Show lotado na área coberta do Ponto Alto" />
        </div>
        <div className="feature__body">
          <h2 className="display display--md">Sinta o clima do último show</h2>
          <p>
            Palco aceso, casa cheia e a galera cantando junto. É assim toda vez que as luzes
            se acendem no Ponto Alto. Aperta o play e vem sentir.
          </p>
          <div className="btn-row">
            <button className="btn" onClick={() => onPlay('/media/video-2.mp4')}>
              Play vídeo <span className="btn__arrow">›</span>
            </button>
            <a href="#galeria" className="btn btn--light">Galeria</a>
          </div>
        </div>
      </div>
    </section>
  )
}
