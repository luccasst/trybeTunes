import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Music from './MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musicTrack: '',
      musics: '',
    };
  }

  componentDidMount() {
    this.getMusicAlbum();
  }

  getMusicAlbum = async () => {
    const { match: { params: { id } } } = this.props;
    const musicsSong = await getMusics(id);
    const song = musicsSong.filter((track) => track.trackId);
    this.setState({
      musicTrack: musicsSong,
      musics: song,
    });
  }

  musicAlbum() {
    const { musicTrack } = this.state;
    if (musicTrack) {
      const { artistName, collectionName, artworkUrl100 } = musicTrack[0];
      return (
        <section>
          <img src={ artworkUrl100 } alt={ artistName } />
          <h2 data-testid="artist-name">{ artistName }</h2>
          <h3 data-testid="album-name">{collectionName}</h3>
        </section>
      );
    }
  }

  render() {
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {this.musicAlbum()}
        { !musics ? (<h2>Carregando...</h2>
        ) : (
          musics.map((music) => (
            <Music
              key={ music.artistId }
              artwork={ music.artwork }
              trackId={ music.trackId }
              artist={ music.artist }
              trackName={ music.trackName }
              previewUrl={ music.previewUrl }
            />
          ))
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;

export default Album;
