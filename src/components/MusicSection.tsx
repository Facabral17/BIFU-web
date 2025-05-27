import "../styles/MusicSection.css";

const spotifyArtistURL =
  "https://open.spotify.com/artist/6rhwoYH0ylXbvy6qLjfZL8";
const youtubeChannelURL = "https://www.youtube.com/@bifubanda";

const youtubeVideos = [
  { id: "ntxR5mnESFY", title: "Valentín" },
  { id: "tHSLv8wghAk", title: "Hoy Hay Luna Llena" },
];

const MusicSection = () => {
  return (
    <section id="musica" className="music-section py-5">
      <div className="container">
        <h2 className="section-title">Escuchanos</h2>

        <div className="embed-wrapper">
          <iframe
            title="Spotify Player"
            src="https://open.spotify.com/embed/artist/6rhwoYH0ylXbvy6qLjfZL8"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <a
          href={spotifyArtistURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-custom"
        >
          SEGUINOS EN SPOTIFY
        </a>

        <div className="videos-section">
          <h3 className="videos-title">Videos</h3>
          <div className="video-grid">
            {youtubeVideos.map(({ id, title }) => (
              <div key={id} className="video-wrapper">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ))}
          </div>

          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-custom mt-3"
          >
            VER MÁS EN YOUTUBE
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
