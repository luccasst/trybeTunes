import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class Music extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedFavorite: false,
      loading: false,
    };
  }

  componentDidMount() {

  }

  handleChange = async (tracks) => {
    const { checkedFavorite } = this.state;
    this.setState({
      loading: true,
    });
    const musicFavorites = await getFavoriteSongs();
    if (musicFavorites.some((track) => tracks.trackId === track.trackId)) {
      await removeSong(tracks);
    } await addSong(tracks);
    /* console.log(musicFavorites); */
    this.setState({
      checkedFavorite: !checkedFavorite,
      loading: false,
    });
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { checkedFavorite, loading } = this.state;
    return (
      <div>
        <h4>{ trackName }</h4>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        { loading ? (<h3>Carregando...</h3>) : (
          <label htmlFor="favorite">
            Favorita
            <input
              data-testid={ `checkbox-music-${trackId}` }
              name="favorite"
              type="checkbox"
              onChange={ () => this.handleChange(this.props) }
              checked={ checkedFavorite }
            />
          </label>
        )}
      </div>

    );
  }
}

Music.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default Music;
